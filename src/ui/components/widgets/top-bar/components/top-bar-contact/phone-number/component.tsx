import { Text } from "@components/common"

export interface PhoneNumberProps {
  value?: string
}

function PhoneNumber ({ value = "+ NNNNNNNNNN" }: PhoneNumberProps): JSX.Element {
  return <Text.Caption customWeight="semibold">{ value }</Text.Caption>
}

export default PhoneNumber