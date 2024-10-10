import { useId } from "react"
import { Link } from "react-router-dom"

import StyledNavigation from "./widget.styled"
import { Text } from "@components/common"
import type { INavigationProps } from "@widgets/types"

function Navigation (props: INavigationProps): JSX.Element {
  const uniqueId = useId()

  return (
    <StyledNavigation>
      <ul className="Navigation__Links">
        {props.categories.map((link) => (
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