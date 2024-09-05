import { useId } from "react"
import { Link } from "react-router-dom"

import StyledNavigation from "./widget.styled"
import { Text } from "@components/common"

export interface NavigationLink {
  label: string
  route: string
}

export interface NavigationProps {
  navigationLinks?: NavigationLink[]
}

const navigationLinksMock: NavigationLink[] = [
  { label: "Flowers", route: "/category/flowers" },
  { label: "Plants", route: "/category/plants" },
  { label: "Gifts", route: "/category/gifts" },
  { label: "Discounts", route: "/category/discounts" },
  { label: "About us", route: "about-us" }
]

function Navigation ({ navigationLinks = navigationLinksMock }: NavigationProps): JSX.Element {
  const uniqueId = useId()

  return (
    <StyledNavigation>
      <ul className="Navigation__Links">
        {navigationLinks.map((link) => (
          <li key={link.route + uniqueId} className="Navigation__Link">
            <Link to={link.route} className="Navigation__LinkAnchor">
              <Text.Large>{link.label}</Text.Large>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNavigation>
  )
}

export default Navigation