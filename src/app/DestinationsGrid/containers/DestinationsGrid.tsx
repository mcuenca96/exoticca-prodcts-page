"use client";

import { useDebounce } from "use-debounce";
import { useDeviceType } from "@hooks";
import DestinationsGridComponent from "../components/DestinationsGrid";
import { Destination, Country } from "@types";
import { useSearchStore } from "@store";

type DestinationsGridProps = {
  countryName: Country["name"];
  featuredMultiMarket: Destination[];
  multiMarket: Destination[];
};

const MAPPED_INCLUDES = {
  ACCOMMODATION: "Accommodation",
  ALL_FLIGHTS: "All flights",
  ALL_TRANSFERS: "All transfers",
  SOME_MEALS: "Some meals",
  ACTIVITIES: "Activities",
} as const;

const filterCriteria = (destination: Destination, search: string) => {
  return (
    destination.title.toLowerCase().includes(search.toLowerCase()) ||
    destination.priceDetail.fromPriceBeautify
      .replace(/[^0-9]/g, "")
      .includes(search)
  );
};

const sanitizeDeviceImages = (
  images: Destination["images"],
  deviceSize: keyof Destination["images"][number]
) => {
  return images.map((image) => image[deviceSize]);
};

const sanitizeInclude = (include: Destination["includes"][number]) => {
  return MAPPED_INCLUDES[include];
};

const DestinationsGrid = ({
  featuredMultiMarket,
  multiMarket,
  ...otherProps
}: DestinationsGridProps) => {
  const deviceSize = useDeviceType();
  const { search } = useSearchStore();

  const [debouncedSearch] = useDebounce(search, 200);

  const featuredMultiMarketSanitized = featuredMultiMarket
    .filter((destination) => filterCriteria(destination, debouncedSearch))
    .map((destination) => ({
      ...destination,
      includes:
        deviceSize !== "mobile"
          ? destination.includes.map(sanitizeInclude)
          : undefined,
      images: sanitizeDeviceImages(destination.images, deviceSize),
    }));

  const multiMarketSanitized = multiMarket
    .filter((destination) => filterCriteria(destination, debouncedSearch))
    .map((destination) => ({
      ...destination,
      includes:
        deviceSize !== "mobile"
          ? destination.includes.map(sanitizeInclude)
          : undefined,
      images: sanitizeDeviceImages(destination.images, deviceSize),
    }));

  return (
    <DestinationsGridComponent
      featuredMultiMarket={featuredMultiMarketSanitized}
      multiMarket={multiMarketSanitized}
      isMobile={deviceSize === "mobile"}
      {...otherProps}
    />
  );
};

export default DestinationsGrid;
