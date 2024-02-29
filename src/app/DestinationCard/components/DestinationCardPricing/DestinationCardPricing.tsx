import { Box, Typography, Chip } from "@mui/material";
import { DestinationCardPricingProps } from "./types";
import * as styles from "./styles";

const DestinationCardPricing = ({
  priceDetail,
}: DestinationCardPricingProps) => {
  return (
    <Box sx={styles.pricingColumn}>
      <Chip color="primary" label={`- ${priceDetail.pricingPercentage}%`} />
      <Box sx={styles.pricingResume}>
        <Typography variant="body1" color="grey">
          From{" "}
          <Box
            sx={styles.oldPrice}
            component="span"
          >{` ${priceDetail.oldPriceBeautify}`}</Box>
        </Typography>
        <Typography variant="h4" color="primary.secondary">
          {priceDetail.fromPriceBeautify}
        </Typography>
        <Typography variant="body1" color="grey">
          {`Per night: ${priceDetail.pricePerNight}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default DestinationCardPricing;
