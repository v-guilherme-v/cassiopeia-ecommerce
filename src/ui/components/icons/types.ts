export enum IconDirections {
  LEFT = "left",
  RIGHT = "right",
  UPWARDS = "upwards",
  DOWNWARDS = "downwards"
}

export interface IconProps {
  width?: string
  height?: string
  color?: string
  direction?: IconDirections
}