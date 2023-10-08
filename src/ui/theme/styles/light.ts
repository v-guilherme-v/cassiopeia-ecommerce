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
    black: "#000000",
    whatsapp: "#24D366",
    facebook: "#4F66A5"
  },

  fieldState: {
    default: "1px solid #E6E6EB",
    disabled: "1px solid #F0F0F5",
    active: "1px solid #595CFF",
    onFocus: "1px solid #000000",
    error: "1px solid #EE7764",
    success: "1px solid #00CB6F"
  },

  boxShadow: {
    lightShadow: "0px 3px 52px 0px rgba(90, 92, 102, 0.06)",
    lightShadowHoverRight: "3px 7px 18px rgba(103, 105, 116, 0.0833424)",
    lightShadowHoverLeft: "-10px 5px 18px rgba(103, 105, 116, 0.0833424)"
  },

  general: {
    containerSize: "1160px",
    headerLayer: 10
  },

  viewPorts: {
    extraLarge: "1200px",
    large: "992px",
    medium: "768px",
    small: "576px"
  },

  button: {
    borderRadius: "4px",
    transition: "background-color .2s cubic-bezier(.17, .67, .83, .67)"
  },

  text: {
    large: {
      fontSize: "1rem",
      lineHeight: "20px"
    },
    default: {
      fontSize: "0.875rem",
      lineHeight: "20px"
    },
    button: {
      fontSize: "0.875rem",
      lineHeight: "17px"
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: "16px"
    },
    strikeLarge: {
      fontSize: "1.125rem",
      lineHeight: "22px"
    },
    strike: {
      fontSize: "0.875rem",
      lineHeight: "18px"
    },
    radio: {
      fontSize: "0.75rem",
      lineHeight: "15px"
    }
  },

  title: {
    extraLarge: {
      fontSize: "2rem",
      lineHeight: "38px"
    },
    large: {
      fontSize: "1.75rem",
      lineHeight: "28px"
    },
    medium: {
      fontSize: "1.5rem",
      lineHeight: "28px"
    },
    small: {
      fontSize: "1.125rem",
      lineHeight: "22px"
    },
    extraSmall: {
      fontSize: "1rem",
      lineHeight: "22px"
    }
  },

  productCard: {
    width: "260px",
    img: {
      width: "260px",
      height: "260px"
    },
    controls: {
      width: "2.875rem",
      height: "2.875rem"
    }
  },

  fallbackImage: {
    backgroundColor: "#F9F9F9"
  }
}

export default lightTheme