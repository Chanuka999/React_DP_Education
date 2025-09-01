import { Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const SnackBar = ({ stat, msg, onClose }) => {
  const [open, setOpen] = useState(stat);

  const handdleClose = (_, reason) => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(stat);
  }, [stat]);

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handdleClose}>
        Undo
      </Button>

      <IconButton size="small" onClick={handdleClose}>
        <CloseIcon />
      </IconButton>
    </>
  );
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message={msg}
        action={action}
        onClose={handdleClose}
      />
    </>
  );
};

export default SnackBar;
