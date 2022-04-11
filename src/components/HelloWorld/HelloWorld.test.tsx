import { render, screen } from "@testing-library/react"
import { HelloWorld } from "./HelloWorld"

describe("HelloWorld", () => {
  it("renders as expected", () => {
    render (<HelloWorld />)

    expect(screen.getByText('Hello World')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Hello World' })).toBeInTheDocument()
  });
});