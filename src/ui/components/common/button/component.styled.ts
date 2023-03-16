import styled from "styled-components"
import {
  type ButtonProps,
  ButtonSizes,
  ButtonIconPositions,
  type ButtonPropsHasIcon,
  type ButtonPropsAsIcon
} from "@components/common/button"

function getButtonSize (size: ButtonSizes | undefined): string {
  switch (size) {
    case ButtonSizes.ICON:
      return "46px"
    case ButtonSizes.LARGE:
      return "200px"
    default:
      return "138px"
  }
}

const getBorderColorIndex = (props: ButtonProps): string => {
  const { size, outlined } = props
  if (size === ButtonSizes.ICON && (outlined != null)) { return "lightGrey" }

  return "primary"
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13.5px;

  background-color: ${(props) => (props.outlined != null)
    ? props.theme.color.white
    : props.theme.color.primary
};
  
  color: ${(props) => (props.outlined != null)
    ? props.theme.color.black
    : props.theme.color.white
};

  width: ${(props) => getButtonSize(props.size)};
  height: 45px;

  // TODO: make it better
  border: ${(props) => `1px solid ${props.theme.color[getBorderColorIndex(props)]}`};
  border-radius: ${(props) => props.theme.button.borderRadius};
  
  cursor: pointer;
  user-select: none;
`

const StyledButtonHasIcon = styled(StyledButton)<ButtonPropsHasIcon>`
  flex-direction: ${(props) =>
    props?.icon?.position === ButtonIconPositions.PREPEND
      ? "row-reverse"
      : "row"
};
`

const StyledButtonAsIcon = styled(StyledButton)<ButtonPropsAsIcon>`
  border-radius: ${(props) => (props.rounded == null) || props.size !== ButtonSizes.ICON
    ? props.theme.button.borderRadius
    : "50%"
};
`

export default {
  Default: StyledButton,
  HasIcon: StyledButtonHasIcon,
  AsIcon: StyledButtonAsIcon
}