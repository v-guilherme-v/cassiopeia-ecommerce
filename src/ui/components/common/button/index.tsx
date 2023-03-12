import StyledButton from "@components/styled/button.styled"
import { Text } from "@components/common"

export default function Button (): JSX.Element {
  return (
    <StyledButton>
      <Text color="white">
        Button
      </Text>
    </StyledButton>
  )
}