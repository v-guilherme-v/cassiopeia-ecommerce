export const toCurrency = (value?: number): string | undefined => {
  if (value !== undefined) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }
}