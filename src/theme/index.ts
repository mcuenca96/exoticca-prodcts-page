import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
  breakpoints,
  palette,
  typography,
});

export default theme;
