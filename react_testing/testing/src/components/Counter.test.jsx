import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";


describe('Counter Component', () => {
  it('render with initial data', ()=> {
    render(<Counter/>)
    expect(screen.getByText(/0/i)).toBeInTheDocument()
  })

  it('increment button click', async ()=> {
    render(<Counter/>)
    const incrementButton = screen.getByText('Increment')
    await userEvent.click(incrementButton);
    expect(screen.getByText(/1/i)).toBeInTheDocument()
  })

  it('decrement button click', async ()=> {
    render(<Counter/>)
    const decrementButton = screen.getByText('Decrement')
    await userEvent.click(decrementButton);
    expect(screen.getByText(/i/i)).toBeInTheDocument()
  })
})
