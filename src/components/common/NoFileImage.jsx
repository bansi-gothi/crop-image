// External
import { Box } from "@mui/material";
// Internal
import NoFile from "../../assets/images/thumbnail.jpg";

const NoFileImage = () => (
  <Box sx={{ height: "200px", width: "200px" }}>
    <img src={NoFile} style={{ width: "100%", height: "100%" }} />
  </Box>
);
export default NoFileImage;
