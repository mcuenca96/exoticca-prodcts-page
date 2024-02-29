"use client";

import { Box, Grid, Typography } from "@mui/material";
import { DestinationCard } from "@components/DestinationCard";
import { DestinationsGridProps } from "./types";
import * as styles from "./styles";

const DestinationsGrid = ({
  countryName,
  featuredMultiMarket,
  multiMarket,
  isMobile,
}: DestinationsGridProps) => {
  return (
    <Box sx={styles.gridContainer}>
      <Typography
        sx={styles.multiMarketTitle}
        color="primary.secondary"
        variant="h5"
      >
        {featuredMultiMarket.length > 0 &&
          `Our recomendations to visit ${countryName} and neighboring countries`}
      </Typography>
      <Grid container spacing={4}>
        {featuredMultiMarket.map((featured) => (
          <Grid xs={12} item key={featured.id}>
            <DestinationCard {...featured} isMobile={isMobile} />
          </Grid>
        ))}
      </Grid>
      <Typography
        sx={styles.multiMarketTitle}
        color="primary.secondary"
        variant="h5"
      >
        {multiMarket.length > 0 &&
          `Multi country vacation packages including ${countryName}`}
      </Typography>
      <Grid container spacing={4}>
        {multiMarket.map((market) => (
          <Grid xs={12} item key={market.id}>
            <DestinationCard {...market} isMobile={isMobile} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DestinationsGrid;
