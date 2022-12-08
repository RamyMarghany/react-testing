import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

/**
 * getBy and getAllBy class of queries to assert if elements are 'present' in the DOM.
 * queryBy and queryAllBy class of queries to assert if elements are 'not present (display:none)' in the DOM.
 * findBy and findALlBy are using when we we have async code, can set a custom timeout by using {timeout:2000}.
 * */

describe("Skills component", () => {
  const skills = ["html", "css", "js"];

  test("renders correctly ", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills correctly ", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });

  test("renders login button correctly", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.getByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
  });

  /** using queryBy to select an element that "not present" in the DOM  */
  /** queryBy return an object that match the query or null if not matched */
  /** queryAllBy return an array of objects that match the query or an empty array if not matched */
  test("renders learning button correctly", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(buttonElement).not.toBeInTheDocument();
  });

  /**
   * findBy
        • Returns a Promise which resolves when an element is found which matches the given query.
        • The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms
          findAllBy.
    
    * findAllBy
        • Returns a promise which resolves to an array of elements when any elements are found which match the given query
        • The promise is rejected if no elements are found after a default timeout of 1000ms 
*/
  test("start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const buttonElement = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 }
    );
    expect(buttonElement).toBeInTheDocument();
  });
});
