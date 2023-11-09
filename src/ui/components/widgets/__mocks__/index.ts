import { type FooterLinksSection } from "@widgets/footer/types"

export const linksMock: FooterLinksSection[] = [
  {
    sectionName: "Help",
    linksList: [
      {
        label: "Contact us",
        route: "#"
      },
      {
        label: "Delivery information",
        route: "#"
      },
      {
        label: "Payment information",
        route: "#"
      },
      {
        label: "Customer service",
        route: "#"
      },
      {
        label: "FAQ",
        route: "#"
      }
    ]
  },
  {
    sectionName: "About us",
    linksList: [
      {
        label: "Our stores",
        route: "#"
      },
      {
        label: "Flower care",
        route: "#"
      },
      {
        label: "Site map",
        route: "#"
      }
    ]
  },
  {
    sectionName: "Legal",
    linksList: [
      {
        label: "Privacy policy",
        route: "#"
      },
      {
        label: "Terms & Conditions",
        route: "#"
      },
      {
        label: "Cookie policy",
        route: "#"
      }
    ]
  }
]