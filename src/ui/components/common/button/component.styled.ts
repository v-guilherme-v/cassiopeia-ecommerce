import styled from "styled-components"
import { type ButtonProps, ButtonSizes, ButtonIconPositions } from "@components/common/button"
import { getBgColor, getBorderColor, getButtonSize, getFontColor } from "./component.styled.utils"

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13.5px;

  background-color: ${(props) => getBgColor(props)};
  width: ${(props) => getButtonSize(props.size)};
  color: ${(props) => getFontColor(props)};
  height: 45px;

  /** @todo make it better */
  border: ${(props) => `${getBorderColor(props)}`};
  
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  user-select: none;

  flex-direction: ${(props) =>
    props?.icon?.position === ButtonIconPositions.PREPEND
      ? "row-reverse"
      : "row"
  };

  border-radius: ${(props) => (props.rounded == null) || props.size !== ButtonSizes.ICON
    ? props?.style?.borderRadius ?? props.theme.button.borderRadius
    : "50%"
  };

  [data-name="StyledText"] {
    color: ${(props) => getFontColor(props)};
  }
`

const StyledButtonAsIcon = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`

export default {
  Normal: StyledButton,
  AsIcon: StyledButtonAsIcon
}