import { useId } from "react"
import StyledNavigation from "./widget.styled"
import { Text } from "@components/common"

export interface NavigationLink {
  label: string
  route: string
}

export interface NavigationProps {
  navigationLinks: NavigationLink[]
}

function Navigation ({ navigationLinks }: NavigationProps): JSX.Element {
  const uniqueId = useId()

  return (
    <StyledNavigation>
      <ul className="Navigation__Links">
        {navigationLinks.map((link) => (
          <li key={link.route + uniqueId} className="Navigation__Link">
            <a href={link.route} className="Navigation__LinkAnchor">
              <Text.Large>{link.label}</Text.Large>
            </a>
          </li>
        ))}
      </ul>
    </StyledNavigation>
  )
}

export default Navigation