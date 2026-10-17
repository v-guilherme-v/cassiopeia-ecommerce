# Etapa 1: build da aplicação com Node
FROM node:20-alpine AS build

WORKDIR /app

# Desativa o husky (não há repositório git dentro do container)
ENV HUSKY=0

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

# O vite.config.ts usa base "/cassiopeia-ecommerce/" (GitHub Pages);
# no container a app é servida na raiz, então sobrescrevemos o base.
RUN yarn tsc && yarn vite build --base=/

# Etapa 2: servir os arquivos estáticos com Nginx
FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
