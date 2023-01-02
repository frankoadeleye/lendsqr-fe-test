import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface State extends SnackbarOrigin {
  open: boolean;
}
export default function AlertSnackbar({
  open,
  duration = 2990,
  handleClose,
  type,
  message,
}: any) {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  useEffect(() => {}, [setState]);
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={type}
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
