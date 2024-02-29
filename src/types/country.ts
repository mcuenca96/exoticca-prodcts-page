import { Destination } from ".";

type Country = {
  id: number;
  name: string;
  type: string;
  longDescription: string;
  destinations: {
    featuredMultiMarket: Destination[];
    multiMarket: Destination[];
  };
};

export type { Country };
