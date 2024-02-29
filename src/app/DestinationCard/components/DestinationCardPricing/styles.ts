import { SxProps, Theme } from "@mui/material";

const pricingColumn = (theme: Theme) => ({
  [theme.breakpoints.up("md")]: {
    textAlign: "right",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
  },
  paddingX: 2,
  paddingY: 1,
});

const oldPrice: SxProps = {
  textDecoration: "line-through",
};

const pricingResume = (theme: Theme) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: 2,
  },
});

export { pricingColumn, oldPrice, pricingResume };
