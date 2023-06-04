import { render } from "@testing-library/react";
import Header from "@/components/Header/Header";
describe("Header", () => {
  it("Should render with passed id", () => {
    const result = render(<Header id="testId" />);
    expect(result.container.querySelector("#testId")).toBeInTheDocument();
  });
});
