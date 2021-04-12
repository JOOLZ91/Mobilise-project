import React from "react";
import ReactDom from "react-dom";

import useStyles from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Modal = ({ open }) => {
  const classes = useStyles();
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={classes.overlayStyles} />
      <div className={classes.modalStyles}>
        <div className={classes.processing}>Processing Payment...</div>
        <CircularProgress className={classes.circular} />
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
