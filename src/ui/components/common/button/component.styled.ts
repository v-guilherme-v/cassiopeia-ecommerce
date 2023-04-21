import styled from "styled-components"
import { type ButtonProps, ButtonSizes, ButtonIconPositions } from "@components/common/button"
import { getBgColor, getBorderColor, getButtonSize, getFontColor } from "./component.styled.utils"

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13.5px;

  background-color: ${(props) => getBgColor(props)};
  color: ${(props) => getFontColor(props)};
  width: ${(props) => getButtonSize(props.size)};
  height: 45px;

  // TODO: make it better
  border: ${(props) => `${getBorderColor(props)}`};
  border-radius: ${(props) => props.theme.button.borderRadius};
  
  cursor: pointer;
  user-select: none;

  flex-direction: ${(props) =>
    props?.icon?.position === ButtonIconPositions.PREPEND
      ? "row-reverse"
      : "row"
  };

  border-radius: ${(props) => (props.rounded == null) || props.size !== ButtonSizes.ICON
    ? props.theme.button.borderRadius
    : "50%"
  };
`

export default StyledButton