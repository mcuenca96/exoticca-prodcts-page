"use client";

import { Box, Typography } from "@mui/material";
import * as styles from "./styles";
import { HeaderLayoutProps } from "./types";

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return <Box sx={styles.layoutHeaderContainerStyles}>{children}</Box>;
};

export default HeaderLayout;
