// External
import { Dialog, DialogTitle } from "@mui/material";
// Internal
import CropImage from "../CropImage";

const Modal = ({
  updateAvatar,
  onClose,
  open,
  imgSrc,
  aspect,
  isCircularCrop,
}) => (
  <Dialog
    fullWidth
    sx={{ minHeight: 300 }}
    maxWidth="xs"
    open={open}
    onClose={onClose}
  >
    <DialogTitle sx={{ p: (theme) => theme.spacing(3, 3, 2, 3) }}>
      Upload Image
    </DialogTitle>
    <CropImage
      updateAvatar={updateAvatar}
      onClose={onClose}
      imgSrc={imgSrc}
      aspect={aspect}
      isCircularCrop={isCircularCrop}
    />
  </Dialog>
);

export default Modal;
