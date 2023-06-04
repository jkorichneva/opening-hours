import { render } from "@testing-library/react";
import Worktable from "@/components/Worktable/Worktable";
import * as useWorkingHours from "@/hooks/useWorkingHours";
import * as analytics from "@/helpers/sendAnalytics";
import userEvent from "@testing-library/user-event";
describe("Worktable", () => {
  it("Should render without displaying error and handle click", async () => {
    jest.spyOn(useWorkingHours, "useWorkingHours").mockImplementation(() => ({
      openingHoursStrings: {
        monday: "Closed",
        tuesday: "10AM - 5PM",
        wednesday: "Closed",
        thursday: "5PM - 1AM",
        friday: "5PM - 1AM",
        saturday: "5PM - 1AM",
        sunday: "5PM - 1AM",
      },
      currentDay: 1,
      isError: false,
      isLoading: false,
    }));
    const handleClick = jest.spyOn(analytics, "handleClick");
    const { getByText } = render(<Worktable />);
    expect(getByText("10AM - 5PM")).toBeInTheDocument();
    expect(getByText("Today")).toBeInTheDocument();
    await userEvent.click(getByText("Today"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("Should render with error", () => {
    jest.spyOn(useWorkingHours, "useWorkingHours").mockImplementation(() => ({
      openingHoursStrings: {},
      currentDay: 1,
      isError: true,
      isLoading: false,
    }));
    const { getByText } = render(<Worktable />);
    expect(
      getByText("Error, please try refreshing the page")
    ).toBeInTheDocument();
  });
});
