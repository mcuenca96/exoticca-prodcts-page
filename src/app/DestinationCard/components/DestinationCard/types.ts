import { Destination } from "@types";
import { DestinationCardFeaturesProps } from "../DestinationCardFeatures";

type DestinationCardProps = Omit<Destination, "images" | "includes"> & {
  images: string[];
  includes: DestinationCardFeaturesProps["includes"];
  isMobile?: boolean;
};

export type { DestinationCardProps };
