import { SxProps, Theme } from "@mui/material";

const cardContainer = {
  borderRadius: 4,
};

const cardImage = (theme: Theme) => ({
  [theme.breakpoints.down("lg")]: {
    height: 300,
  },
  height: "100%",
});

const cardDetails: SxProps = {
  paddingY: 2,
};

const cardText: SxProps = {
  paddingY: 1,
};

const cardInfo = (theme: Theme) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    marginX: 2,
  },
});

export { cardContainer, cardImage, cardDetails, cardText, cardInfo };
