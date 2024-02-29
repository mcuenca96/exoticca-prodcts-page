import { Box, Typography, Link } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import FlightIcon from "@mui/icons-material/Flight";
import RoomIcon from "@mui/icons-material/Room";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import { DestinationCardFeaturesProps } from "./types";
import * as styles from "./styles";

const ICONS_BY_FEATURES = {
  Accommodation: <BedIcon />,
  "All flights": <FlightIcon />,
  "All transfers": <DirectionsBusIcon />,
  "Some meals": <FreeBreakfastIcon />,
  Activities: <LocalActivityIcon />,
};

const DestinationCardFeatures = ({
  highlights,
  includes,
}: DestinationCardFeaturesProps) => {
  return (
    <Box sx={styles.listsContainer}>
      <Box>
        {highlights.slice(0, 4).map((highlight) => (
          <Box key={highlight.url} sx={styles.highlightContainer}>
            <RoomIcon sx={styles.roomIcon} />
            <Link underline="none" key={highlight.url} href={highlight.url}>
              <Typography variant="body1" color="primary.secondary">
                {highlight.title}
              </Typography>
            </Link>
          </Box>
        ))}
        {highlights.length > 4 && (
          <Typography
            sx={styles.moreHighlights}
            color="primary.secondary"
          >{`+ ${highlights.length - 4} more`}</Typography>
        )}
      </Box>
      <Box>
        {includes?.map((include) => (
          <Box sx={styles.includeContainer} key={include}>
            {ICONS_BY_FEATURES[include]}
            <Typography ml={1} variant="body2" color="primary.secondary">
              {include}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DestinationCardFeatures;
