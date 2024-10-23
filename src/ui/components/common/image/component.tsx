import { type PropsWithChildren, useState } from "react"
import styled from "styled-components"
import fallbackSrc from "src/assets/no-image.jpg"
import { getFallbackImageStyles } from "@theme/selectors"

interface ImageProps extends PropsWithChildren {
  className?: string
  src: string
  alt: string
  width?: string
  height?: string
}

function Image ({ className, src, alt, width, height }: ImageProps): JSX.Element {
  const [ failedToLoad, setFailedToLoad ] = useState<boolean>(false)

  /**
   * An image may fail to load
   */
  const onImageError = (): void => {
    setFailedToLoad(true)
  }

  const imagePath = failedToLoad ? fallbackSrc : src
  const errorProperty = failedToLoad ? { error: "true" } : {}

  return (
    <StyledImage>
      <img
        className={className}
        src={imagePath} alt={alt}
        width={width} height={height}
        onError={onImageError}
        {...errorProperty }
      />
    </StyledImage>
  )
}

const StyledImage = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  
  img[error="true"] {
    object-position: center;
    background-color: ${props => getFallbackImageStyles(props).backgroundColor};
    user-select: none;
  }
`

Image.Styled = StyledImage

export default Image