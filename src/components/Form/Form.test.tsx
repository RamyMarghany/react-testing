import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Form", () => {
  test("Form renders correctly ", () => {
    render(<Form />);

    /** Priority order by Query */
    /** 1. getByRole , {level, name} */
    /** 2. getByLabelText, {selector} */
    /** 3. getByPlaceholderText */
    /** 4. getByText, {selector} */
    /** 5. getByDisplayValue */
    /** 6. getByAltText */
    /** 7. getByTitle */
    /** 8. getByTestId */

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

    const elementName2 = screen.getByLabelText("Name", { selector: "input" });
    expect(elementName2).toBeInTheDocument();

    const elementName3 = screen.getByPlaceholderText("full name");
    expect(elementName3).toBeInTheDocument();

    const elementName4 = screen.getByDisplayValue("Ramy");
    expect(elementName4).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const paragraphElement = screen.getByText("Submit", { selector: "button" });
    expect(paragraphElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });
});
