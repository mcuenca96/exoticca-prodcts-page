import { Destination } from "@types";

const MOCK_RAW_DESTINATION_1: Destination = {
  id: 1,
  url: "https://www.exoticca.com/uk/cities/asia/15356-self-guided-japanese-adventure?category=50201",
  destination: "Asia, Japan & South Korea",
  days: 20,
  title: "Japan & South Korea",
  includes: [
    "ACCOMMODATION",
    "ALL_FLIGHTS",
    "ALL_TRANSFERS",
    "SOME_MEALS",
    "ACTIVITIES",
  ],
  highlights: [
    {
      title: "Tokyo",
      url: "https://www.exoticca.com/uk/tours/asia/9479-self-guided-land-of-the-rising-sun?",
    },
    {
      title: "Kyoto",
      url: "https://www.exoticca.com/uk/tours/asia/16110-southeast-asian-odyssey?",
    },
  ],
  images: [
    {
      desktop:
        "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F15356%2F347757.jpg&w=1080&q=75",
      tablet:
        "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F15356%2F347757.jpg&w=1080&q=75",
      mobile:
        "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F15356%2F347757.jpg&w=1080&q=75",
    },
  ],
  tags: [
    {
      tagId: "f4ea31b5-3b78-4cab-ad2b-ba645708a57b",
      alias: "Solo",
    },
    {
      tagId: "8132dc0e-f165-42d5-a668-544f21b0b317",
      alias: "Muli-country",
    },
  ],
  priceDetail: {
    discountSaved: 35,
    fromPriceBeautify: "2,700$",
    pricingPercentage: 35,
    oldPriceBeautify: "3,500$",
    pricePerNight: "270$",
  },
};

const MOCK_RAW_DESTINATION_2: Destination = {
  id: 2,
  url: "https://www.exoticca.com/uk/cities/asia/15356-self-guided-japanese-adventure?category=50221",
  destination: "America, New York & Los Angeles",
  days: 15,
  title: "New York",
  includes: [
    "ACCOMMODATION",
    "ALL_FLIGHTS",
    "ALL_TRANSFERS",
    "SOME_MEALS",
    "ACTIVITIES",
  ],
  highlights: [
    {
      title: "New York",
      url: "https://www.exoticca.com/uk/tours/asia/9479-self-guided-land-of-the-rising-sun?",
    },
    {
      title: "Los Angeles",
      url: "https://www.exoticca.com/uk/tours/asia/16110-southeast-asian-odyssey?",
    },
  ],
  images: [
    {
      desktop:
        "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F15356%2F347757.jpg&w=1080&q=75",
      tablet:
        "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F15356%2F347757.jpg&w=1080&q=75",
      mobile:
        "https://www.exoticca.com/_next/image?url=https%3A%2F%2Fstatic-uk.exoticca.com%2Fimg%2Fp%2F15356%2F347757.jpg&w=1080&q=75",
    },
  ],
  tags: [
    {
      tagId: "f4ea31b5-3b78-4cab-ad2b-ba645708a57b",
      alias: "Solo",
    },
    {
      tagId: "8132dc0e-f165-42d5-a668-544f21b0b317",
      alias: "Muli-country",
    },
  ],
  priceDetail: {
    discountSaved: 15,
    fromPriceBeautify: "3,500$",
    pricingPercentage: 20,
    oldPriceBeautify: "4,500$",
    pricePerNight: "270$",
  },
};

export { MOCK_RAW_DESTINATION_1, MOCK_RAW_DESTINATION_2 };
