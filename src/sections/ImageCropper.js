import "react-image-crop/dist/ReactCrop.css";

import { Card, CardHeader, CardContent, Typography, Box } from "@mui/material";

import SmallLogo from "./SmallLogo";
import MainLogo from "./MainLogo";
import BackgroundImage from "./BackgroundImage";

const ImageCropper = () => {
  return (
    <Box
      sx={{
        padding: "25px",
      }}
    >
      <Typography textAlign="center" variant="h4" pt={4} pb={4}>
        Image Cropper
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "16px",
          padding: "0 200px",
        }}
      >
        <Card>
          <CardHeader title="Rounded Logo" />
          <CardContent>
            <SmallLogo />
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Main Logo" />
          <CardContent>
            <MainLogo />
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Background Image" />
          <CardContent>
            <BackgroundImage />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
export default ImageCropper;
