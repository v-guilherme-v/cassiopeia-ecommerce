import { type FooterLinksSection } from "@widgets/footer/types"

export const linksMock: FooterLinksSection[] = [
  {
    sectionName: "Help",
    linksList: [
      {
        label: "Contact us",
        route: "contact-us"
      },
      {
        label: "Delivery information",
        route: "delivery-information"
      },
      {
        label: "Payment information",
        route: "payment-information"
      },
      {
        label: "Customer service",
        route: "customer-service"
      },
      {
        label: "FAQ",
        route: "faq"
      }
    ]
  },
  {
    sectionName: "About us",
    linksList: [
      {
        label: "Our stores",
        route: "our-stores"
      },
      {
        label: "Flower care",
        route: "flower-care"
      },
      {
        label: "Site map",
        route: "site-map"
      }
    ]
  },
  {
    sectionName: "Legal",
    linksList: [
      {
        label: "Privacy policy",
        route: "privacy-policy"
      },
      {
        label: "Terms & Conditions",
        route: "policy-terms"
      },
      {
        label: "Cookie policy",
        route: "cookie-policy"
      }
    ]
  }
]