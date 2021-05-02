import React from "react"
import App from "./component"
import { render, screen } from "@testing-library/react"

describe("Component", () => {
  it("should render component", () => {
    render(<App />)
    expect(screen.getByText("Starter App")).toBeInTheDocument()
  })
})
