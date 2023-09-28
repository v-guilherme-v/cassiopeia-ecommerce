import { Text } from "@components/common"

export interface PhoneNumberProps {
  value?: string
}

function PhoneNumber ({ value = "+ NNNNNNNNNN" }: PhoneNumberProps): JSX.Element {
  return <Text.Caption weight="semibold">{ value }</Text.Caption>
}

export default PhoneNumber