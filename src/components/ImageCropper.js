// External
import { Card, CardHeader, CardContent, Typography, Box } from "@mui/material";

// Internal
import ImageComponent from "./ImageComponent";
import { images } from "src/constant/Images";

import "react-image-crop/dist/ReactCrop.css";

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
        {images.map((img) => (
          <Card key={img.name}>
            <CardHeader title={img.title} />
            <CardContent>
              <ImageComponent
                height={img.height}
                name={img.name}
                aspect={img.aspect}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default ImageCropper;
