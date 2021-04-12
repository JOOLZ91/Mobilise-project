import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modalStyles: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
    borderRadius: "5%",
  },

  overlayStyles: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  },
  processing: {
    fontFamily: "Montserrat",
    fontSize: "30px",
    paddingBottom: "100px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  circular: {
    margin: "0 auto",
    position: "fixed",
    top: 140,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));
