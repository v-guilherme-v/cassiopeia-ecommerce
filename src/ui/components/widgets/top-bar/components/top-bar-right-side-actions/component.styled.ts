import { getViewPortsStyles } from "@ui/theme/selectors";
import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 68px;

  @media (min-width: ${props => getViewPortsStyles(props).medium}) {
    .TopBar__Search:hover,
    .TopBar__MiniCart:hover {
      cursor: pointer;
      opacity: .6;
    }
  }
`