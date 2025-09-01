import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import SnackBar from "./SnackBar";

const DialogComponent = () => {
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false);

  const openHanddle = () => {
    setOpen(true);
  };

  const closeHanddle = () => {
    setOpen(false);
  };

  const yesHanddle = () => {
    setOpen(false);
    setSnack(true);
  };

  const snackClose = () => {
    setSnack(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={openHanddle}>
        Click to
      </Button>

      <Dialog open={open}>
        <DialogTitle>
          Delete file(s)
          <IconButton
            onClick={closeHanddle}
            style={{ right: 8, position: "absolute", top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you realy want to delete this
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={yesHanddle}>Yes</Button>
          <Button onClick={closeHanddle}>No</Button>
        </DialogActions>
      </Dialog>
      <SnackBar msg="item deleted" stat={snack} onClose={snackClose} />
    </>
  );
};

export default DialogComponent;
