import StyledHome from "./styled/Home.styled"
import Button, { ButtonSizes } from "@components/common/button"
import { ThinArrow } from "@components/icons"

export default function Home (): JSX.Element {
  return (
    <StyledHome className="Home">
      <Button.HasIcon
        icon={{
          element: <ThinArrow color="black" />
        }}
        size={ButtonSizes.LARGE}
        outlined
      />
    </StyledHome>
  )
}