import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Form", () => {
  test("Form renders correctly ", () => {
    render(<Form />);

    const pageHeading = screen.getByRole("heading", { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { name: "Section 1" });
    expect(sectionHeading).toBeInTheDocument();

    /** getByRole */

    /** the name in getByRole is for simple cases equal to
        1. the label of a form element.
        2. the text content of a button.
        3. the value of the aria-label attribute.
     */
    const elementName = screen.getByRole("textbox", { name: "Name" });
    expect(elementName).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });
});
