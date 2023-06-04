import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Clock from "@/components/Clock/Clock";
import * as analytics from "@/helpers/analytics";
describe("Clock", () => {
  it("Should render clock and handle mouse enter/leave", async () => {
    const { getByTestId } = render(<Clock />);
    const clockIcon = getByTestId("clock");
    const spy = jest.spyOn(analytics, "hoverClock");
    await userEvent.hover(clockIcon);
    await userEvent.unhover(clockIcon);
    expect(spy).toHaveBeenCalled();
  });
});
