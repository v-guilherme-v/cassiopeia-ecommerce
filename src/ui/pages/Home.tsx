import StyledHome from "./styled/Home.styled"
import TopBar from "@components/widgets/top-bar/widget"

export default function Home (): JSX.Element {
  return (
    <StyledHome className="Home">
      <TopBar.SocialMedias />
    </StyledHome>
  )
}