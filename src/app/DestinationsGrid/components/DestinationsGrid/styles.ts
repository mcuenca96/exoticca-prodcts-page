import { SxProps, Theme } from "@mui/material";

const gridContainer = (theme: Theme) => ({
  padding: 5,
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "75%",
  },
});

const multiMarketTitle: SxProps = {
  marginY: 5,
  fontWeight: "bold",
  fontSize: 20,
  textAlign: "center",
  color: "primary.secondary",
};

export { gridContainer, multiMarketTitle };
