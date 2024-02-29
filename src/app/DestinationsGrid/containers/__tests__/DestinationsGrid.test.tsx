import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useSearchStore } from "@store";
import DestinationGridContainer from "../DestinationsGrid";
import SearchInput from "@components/SearchInput/components/SearchInput";

import { MOCK_RAW_DESTINATION_1, MOCK_RAW_DESTINATION_2 } from "./mocks";

const DestinationGridWithCustomSearch = () => {
  const { search, setSearch } = useSearchStore();
  return (
    <>
      <SearchInput
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <DestinationGridContainer
        countryName="USA"
        featuredMultiMarket={[MOCK_RAW_DESTINATION_1]}
        multiMarket={[MOCK_RAW_DESTINATION_2]}
      />
    </>
  );
};

test("DestinationGrid renders correctly all of its elements", async () => {
  render(<DestinationGridWithCustomSearch />);
  expect(screen.getAllByRole("img")).toHaveLength(2);
  expect(
    screen.getByText(
      "Our recomendations to visit USA and neighboring countries"
    )
  ).toBeDefined();
});

test("DestinationGrid renders correctly all of its elements after search", async () => {
  render(<DestinationGridWithCustomSearch />);
  expect(screen.getAllByRole("img")).toHaveLength(2);

  const searchInput: HTMLInputElement = screen.getByPlaceholderText(
    "Search your next destination"
  );
  fireEvent.change(searchInput, { target: { value: "Japan" } });
  expect(searchInput.value).toBe("Japan");
  waitFor(() => {
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });

  fireEvent.change(searchInput, { target: { value: "" } });
  waitFor(() => {
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  fireEvent.change(searchInput, { target: { value: 350 } });
  waitFor(() => {
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });
});
