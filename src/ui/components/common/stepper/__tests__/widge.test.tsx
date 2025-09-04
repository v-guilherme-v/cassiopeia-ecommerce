import { fireEvent, render, screen } from "@testing-library/react"
import { LightThemeProvider } from "@ui/providers"

import Stepper from "../component"
import { IStepperStep } from "../types"

import { useViewPorts } from "@ui/hooks/use-viewports"
jest.mock("@ui/hooks/use-viewports")

const steps: IStepperStep[] = [
  {
    id: "step-1",
    title: "Step 1",
    component: () => <>First step</>,
    state: "complete",
    actions: {
      nextButtonLabel: "Go to second"
    }
  },
  {
    id: "step-2",
    title: "Step 2",
    component: () => <>Second step</>,
    actions: {
      prevButtonLabel: "Go to first"
    }
  },
  {
    id: "step-3",
    title: "Step 3",
    component: () => <>Third step</>
  }
]

describe("The Stepper component...", () => {
  beforeAll(() => {
    // Some code will only run on mobile, so i'm "simulating" this view
    (useViewPorts as jest.Mock)
      .mockReturnValue({ maxWidthMedium: true })
  })

  it("goes forward and backwards", async () => {
    render(
      <LightThemeProvider>
        <Stepper steps={steps}/>
      </LightThemeProvider>
    )

    expect(await screen.findByText("Second step")).toBeInTheDocument()
    
    const secondStepPrevButton = await screen.findByRole("button", { name: "Go to first" })
    expect(secondStepPrevButton).toBeInTheDocument()
    fireEvent.click(secondStepPrevButton)
    
    expect(await screen.findByText("First step")).toBeInTheDocument()

    const firstStepNextButton = await screen.findByRole("button", { name: "Go to second" })
    expect(firstStepNextButton).toBeInTheDocument()
    fireEvent.click(firstStepNextButton)

    expect(await screen.findByText("Second step")).toBeInTheDocument()
  })

  it("has no content/actions cause it's complete", async () => {
    render(
      <LightThemeProvider>
        <Stepper steps={[
          {
            id: "step",
            title: "Step",
            component: () => <>Single step</>,
            state: "complete",
            actions: {
              prevButtonLabel: "Back to somewhere",
              nextButtonLabel: "Got to somewhere"
            }
          }
        ]}/>
      </LightThemeProvider>
    )
    // When the only step is already complete, Stepper has no current step,
    // therefore it renders no step content or actions.
    expect(screen.queryByText("Single step")).not.toBeInTheDocument()
    expect(screen.queryByText("Back to somewhere")).not.toBeInTheDocument()
    expect(screen.queryByText("Go to somewhere")).not.toBeInTheDocument()
  })
})
