import { Country } from "@types";
import { DestinationCardProps } from "@components/DestinationCard/components/DestinationCard";

type DestinationsGridProps = {
  countryName: Country["name"];
  isMobile?: boolean;
  featuredMultiMarket: DestinationCardProps[];
  multiMarket: DestinationCardProps[];
};

export type { DestinationsGridProps };
