import { type ThemeType } from "../types"

const lightTheme: ThemeType = {
  font: {
    family: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    rootSize: "16px",
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600"
    }
  },

  color: {
    primary: "#595CFF",
    primaryDark: "#383BE4",
    secondary: "#8C8EFF",

    active: "#595CFF",
    positive: "#00CB6F",
    warning: "#FFBC2C",
    negative: "#EE7764",

    white: "#FFFFFF",
    snow: "#F9F9FB",
    paleGrey: "#F0F0F5",
    lightGrey: "#E6E6EB",
    grey: "#AFB1BD",
    darkGrey: "#82828B",
    black: "#000000"
  },

  fieldState: {
    default: "1px solid #E6E6EB",
    disabled: "1px solid #F0F0F5",
    active: "1px solid #595CFF",
    onFocus: "1px solid #000000",
    error: "1px solid #EE7764",
    success: "1px solid #00CB6F"
  },

  lightShadow: "0px 52px rgba(90, 92, 102, 0.06)",
  lightShadowHoverRight: "3px 7px 18px rgba(103, 105, 116, 0.0833424)",
  lightShadowHoverLeft: "-10px 5px 18px rgba(103, 105, 116, 0.0833424)",

  button: {
    borderRadius: "4px",
    transition: "background-color .2s cubic-bezier(.17, .67, .83, .67)"
  },

  text: {
    large: {
      fontSize: "1rem",
      lineHeight: "20"
    },
    default: {
      fontSize: "0.875rem",
      lineHeight: "20"
    },
    button: {
      fontSize: "0.875rem",
      lineHeight: "17"
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: "16"
    },
    strikeLarge: {
      fontSize: "1.125rem",
      lineHeight: "22"
    },
    strike: {
      fontSize: "0.875rem",
      lineHeight: "18"
    }
  },

  title: {
    extraLarge: {
      fontSize: "2rem",
      lineHeight: "38"
    },
    large: {
      fontSize: "1.75rem",
      lineHeight: "28"
    },
    medium: {
      fontSize: "1.5rem",
      lineHeight: "28"
    },
    small: {
      fontSize: "1.125rem",
      lineHeight: "22"
    },
    extraSmall: {
      fontSize: "1rem",
      lineHeight: "22"
    }
  }
}

export default lightTheme