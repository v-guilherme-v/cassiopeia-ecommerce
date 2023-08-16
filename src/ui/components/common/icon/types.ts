export enum IconDirections {
  LEFT = "left",
  RIGHT = "right",
  UPWARDS = "upwards",
  DOWNWARDS = "downwards"
}

export interface IconProps {
  color?: string
  direction?: IconDirections
}