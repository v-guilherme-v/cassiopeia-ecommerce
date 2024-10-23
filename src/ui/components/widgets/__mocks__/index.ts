import { type FooterLinksSection } from "@widgets/footer/types"
import type { ICategory } from "@widgets/types"
import flowersBanner from "src/assets/flowers-banner.png"

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

export const categoriesMock: ICategory[] = [
  {
    id: "c0001",
    label: "Flowers",
    route: "/category/flowers",
    parentCategoryId: "root",
    children: [
      {
        id: "c0010",
        parentCategoryId: "c0001",
        label: "Daisies",
        route: "/category/flowers/daisies",
        children: [
          {
            id: "c0110",
            parentCategoryId: "c0010",
            label: "Sub Daisies",
            route: "/category/flowers/sub-daisies"
          },
          {
            id: "c0111",
            parentCategoryId: "c0010",
            label: "Sub Daisies",
            route: "/category/flowers/sub-daisies"
          },
          {
            id: "c0112",
            parentCategoryId: "c0010",
            label: "Sub Daisies",
            route: "/category/flowers/sub-daisies"
          }
        ]
      },
      {
        id: "c0011",
        parentCategoryId: "c0001",
        label: "Tulips",
        route: "/category/flowers/tulips"
      },
      {
        id: "c0012",
        parentCategoryId: "c0001",
        label: "Roses",
        route: "/category/flowers/roses"
      }
    ]
  },
  { id: "c0002", parentCategoryId: "root", label: "Plants", route: "/category/plants" },
  { id: "c0003", parentCategoryId: "root", label: "Gifts", route: "/category/gifts" },
  { id: "c0004", parentCategoryId: "root", label: "Discounts", route: "/category/discounts" },
  { id: "c0005", parentCategoryId: "root", label: "About us", route: "about-us" }
]

export const heroBannersMock = [
  {
    title: { text: "Flowers", color: "#000" },
    description: { text: "Our flowers", color: "#000" },
    button: { text: "See more", backgroundColor: "#000" },
    image: { src: flowersBanner, alt: "Flowers banner" }
  },
  {
    title: { text: "Flowers", color: "#000" },
    description: { text: "Our flowers", color: "#000" },
    button: { text: "See more", backgroundColor: "#000" },
    image: { src: flowersBanner, alt: "Flowers banner" }
  },
  {
    title: { text: "Flowers", color: "#000" },
    description: { text: "Our flowers", color: "#000" },
    button: { text: "See more", backgroundColor: "#000" },
    image: { src: flowersBanner, alt: "Flowers banner" }
  }
]