import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Modalpopup = () => {
  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MODAL</h1>
      <Button onClick={functionopenpopup} color="primary" variant="contained">
        Open Popup
      </Button>
      <Dialog
        // fullScreen
        open={open}
        onClose={closepopup}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          User Registeration{" "}
          <IconButton onClick={closepopup} style={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{" "}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TextField variant="outlined" label="Username"></TextField>
            <TextField variant="outlined" label="Password"></TextField>
            <TextField variant="outlined" label="Email"></TextField>
            <TextField variant="outlined" label="Phone"></TextField>
            <FormControlLabel
              control={<Checkbox defaultChecked color="primary"></Checkbox>}
              label="Agree terms & conditions"
            ></FormControlLabel>
            <Button color="primary" variant="contained">
              Submit
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modalpopup;
