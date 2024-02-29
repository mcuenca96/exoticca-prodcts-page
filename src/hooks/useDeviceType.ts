import { useTheme, useMediaQuery } from "@mui/material";

const useDeviceSize = () => {
  const {
    breakpoints: { down, values },
  } = useTheme();

  const { sm, lg } = values;
  const isMobile = useMediaQuery(down(sm));
  const isTablet = useMediaQuery(down(lg));

  if (isMobile) return "mobile";
  if (isTablet) return "tablet";
  return "desktop";
};

export default useDeviceSize;
