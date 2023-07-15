import { type PropsWithChildren } from "react"

/* eslint-disable @typescript-eslint/indent */
function Icon ({ children }: PropsWithChildren): JSX.Element | null {
  return (
    children != null
      ? (
        <div data-testid="Icon" className="Icon" style={{ lineHeight: 0 }}>
          {children}
        </div>
      )
      : null
  )
}

export default Icon