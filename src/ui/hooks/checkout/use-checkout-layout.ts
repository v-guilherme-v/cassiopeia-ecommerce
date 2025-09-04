import { useState, Dispatch, SetStateAction } from "react"

export interface IUseCheckoutLayoutProperties {
  isMobileSummaryVisible: boolean,
  setIsMobileSummaryVisible: Dispatch<SetStateAction<boolean>>
}

/**
 * Checkout layout context/state
 * @returns { IUseCheckoutLayoutProperties }
 * @property {boolean} isMobileSummaryVisible - Indicates if the mobile summary is opened up
 * @property {Dispatch<SetStateAction<boolean>>} setIsMobileSummaryVisible - State setter for isMobileSummaryVisible
 */
export function useCheckoutLayoutProperties(): IUseCheckoutLayoutProperties {
  const [ isMobileSummaryVisible, setIsMobileSummaryVisible ] = useState<boolean>(false)

  return {
    isMobileSummaryVisible,
    setIsMobileSummaryVisible
  }
}