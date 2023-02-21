import { createBreakpoints } from "@chakra-ui/theme-tools";

export const mediaSize = {
  base: "0px",
  sm: "375px",
  md: "781px",
  lg: "991px",
  xl: "1441px",
};

const breakpoints = createBreakpoints(mediaSize);

export default breakpoints;
