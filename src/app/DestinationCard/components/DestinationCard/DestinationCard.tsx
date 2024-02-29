"use client";

import Card from "@mui/material/Card";
import { Grid, Typography, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { DestinationCardProps } from "./types";
import * as styles from "./styles";
import DestinationCardFeatures from "../DestinationCardFeatures";
import DestinationCardTags from "../DestinationCardTags";
import DestinationCardPricing from "../DestinationCardPricing";

const DestinationCard = ({
  title,
  days,
  images,
  priceDetail,
  includes,
  destination,
  highlights,
  tags,
  isMobile,
}: DestinationCardProps) => {
  return (
    <Card sx={styles.cardContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} md={12}>
          <CardMedia sx={styles.cardImage} image={images[0]} />
        </Grid>
        {isMobile && (
          <Grid item xs={12}>
            <DestinationCardPricing priceDetail={priceDetail} />
          </Grid>
        )}
        <Grid item xs={12} lg={4} md={6} sx={styles.cardInfo}>
          <Typography
            sx={styles.cardText}
            variant="body2"
            color="primary.secondary"
          >
            {`${destination} in ${days} days`}
          </Typography>
          <Typography
            sx={styles.cardText}
            variant="body1"
            color="primary.secondary"
          >
            {title}
          </Typography>
          <DestinationCardFeatures
            highlights={highlights}
            includes={includes}
          />
          <DestinationCardTags tags={tags} />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} lg={2} md={4} sx={styles.cardInfo}>
            <DestinationCardPricing priceDetail={priceDetail} />
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default DestinationCard;
