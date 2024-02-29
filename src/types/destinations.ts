type Destination = {
  id: number;
  days: number;
  destination: string;
  title: string;
  url: string;
  includes: (
    | "ACCOMODATION"
    | "ALL_FLIGHTS"
    | "ALL_TRANSFERS"
    | "SOME_MEALS"
    | "ACTIVITIES"
  )[];
  highlights: {
    title: string;
    url: string;
  }[];
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  }[];
  priceDetail: {
    discountSaved: number;
    fromPriceBeautify: string;
    pricingPercentage: number;
    oldPriceBeautify: string;
    pricePerNight: string;
  };
  tags: {
    alias: string;
    tagId: string;
  }[];
};

export type { Destination };
