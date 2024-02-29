import { Destination } from "@types";

type DestinationCardFeaturesProps = {
  highlights: Destination["highlights"];
  includes?: (
    | "Accommodation"
    | "All flights"
    | "All transfers"
    | "Some meals"
    | "Activities"
  )[];
};

export type { DestinationCardFeaturesProps };
