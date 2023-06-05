import { render, screen } from "@testing-library/react";
import TableRow from "@/components/TableRow/TableRow";
describe("ListItem", () => {
  it("Should render opened, not today", () => {
    const { getByText } = render(
      <TableRow dayName="monday" openingHours="10 AM - 12 PM" isToday={false} />
    );
    expect(screen.queryByText("Today")).not.toBeInTheDocument();
    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("10 AM - 12 PM")).toBeInTheDocument();
  });

  it("Should render closed, today", () => {
    const { getByText } = render(
      <TableRow dayName="monday" openingHours="Closed" isToday={true} />
    );
    expect(getByText("Today")).toBeInTheDocument();
    expect(getByText("Closed")).toBeInTheDocument();
  });

  it("Should render with skeleton", () => {
    const { getByText, getByTestId } = render(
      <TableRow dayName="monday" openingHours={undefined} isToday={true} />
    );
    expect(getByText("Today")).toBeInTheDocument();
    expect(getByTestId("listItemSkeleton")).toBeInTheDocument();
  });

  it("Should render without skeleton, just empty opening hours", () => {
    const { getByText } = render(
      <TableRow dayName="monday" openingHours={null} isToday={true} />
    );
    expect(getByText("Today")).toBeInTheDocument();
    expect(screen.queryByTestId("listItemSkeleton")).not.toBeInTheDocument();
  });
});
