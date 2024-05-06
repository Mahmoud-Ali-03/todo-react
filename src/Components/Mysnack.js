import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
export default function Mysnack({ toshow, cusmsg, serve }) {
  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="inherit">
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={toshow}
        autoHideDuration={6000}
        message="Note archived"
        action={action}
      >
        <Alert variant="filled" severity={serve}>
          {cusmsg}
        </Alert>
      </Snackbar>
    </div>
  );
}
