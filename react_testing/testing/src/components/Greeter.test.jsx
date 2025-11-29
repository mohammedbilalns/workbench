import { render, screen } from "@testing-library/react";
import Greeter from "./Greeter";
import { describe, it, expect } from "vitest";

describe('Greeting Component', () => {
  it('should render with default text', ()=> {
    render(<Greeter></Greeter>)
    expect(screen.getByText(/Hello Bilal/i)).toBeInTheDocument()
  }),
  it('render with props', ()=> {
    render(<Greeter name="Akshay"></Greeter>)
    expect(screen.getByText(/Hello Akshay/i)).toBeInTheDocument()
  })
})
