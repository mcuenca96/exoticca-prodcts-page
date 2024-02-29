"use server";

import { Country } from "@types";
import DestinationsGrid from "./DestinationsGrid";

async function getBotswanaLandingCountry(): Promise<Country> {
  const res = await fetch(process.env.PRODUCTS_URL || "");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function DestinationsGridQueryContainer() {
  const botswanaCountry = await getBotswanaLandingCountry();
  const { name, destinations } = botswanaCountry;
  const { featuredMultiMarket, multiMarket } = destinations;
  return (
    <DestinationsGrid
      countryName={name}
      featuredMultiMarket={featuredMultiMarket}
      multiMarket={multiMarket}
    />
  );
}
