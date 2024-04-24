import { render, screen } from "@testing-library/react"
import ContactUsComponent from "../src/components/Contact"
import "@testing-library/jest-dom"
test('Should load contact us component', ()=>{
    render(<ContactUsComponent/>)

    // render, query, assert
    const button = screen.getByText("Submt")
    expect(heading).toBeInTheDocument()
})
