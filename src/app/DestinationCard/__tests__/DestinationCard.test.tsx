import { render, screen } from "@testing-library/react";
import { DestinationCard } from "..";
import { MOCK_SANITIZED_DESTINATION_1 } from "./mocks";

test("DestinationCard renders correctly all of its elements", async () => {
  render(<DestinationCard {...MOCK_SANITIZED_DESTINATION_1} />);

  expect(
    screen.getByText("Asia, Japan & South Korea in 20 days")
  ).toBeDefined();
  expect(screen.getByText("2700$")).toBeDefined();
  expect(screen.getByText("Japan & South Korea")).toBeDefined();
  expect(screen.getAllByTestId("RoomIcon")).toHaveLength(2);
  expect(screen.getByText("Accommodation")).toBeDefined();
});
