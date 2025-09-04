declare module 'react-i18next' {
  import * as React from 'react'

  export interface UseTranslationResponse {
    t: (key: string, options?: any) => string
    i18n: {
      changeLanguage: (lng: string) => Promise<void>
    }
  }

  export function useTranslation(): UseTranslationResponse

  // Minimal stubs to satisfy imports when present
  export const Trans: React.FC<{ children?: React.ReactNode }>
  export const initReactI18next: any
}

