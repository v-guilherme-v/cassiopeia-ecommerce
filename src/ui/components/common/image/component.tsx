import { type PropsWithChildren } from "react"

interface ImageProps extends PropsWithChildren {
  src?: string
  alt?: string
}

function Image ({ src, alt }: ImageProps): JSX.Element {
  return <img src={src} alt={alt} />
}

export default Image