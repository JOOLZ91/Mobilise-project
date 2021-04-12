import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(227, 225, 250);",
    marginBottom: "5px",
    position: "relative",
    display: "flex",
    width: "800px",
    height: "100px",
    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "320px",
    },
  },
  media: {
    display: "flex",
    height: "auto",
    width: "120px",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
  },
  name: {
    position: "absolute",
    top: "32px",
    paddingRight: "20px",
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  remove: {
    position: "absolute",
    right: "10px",
    [theme.breakpoints.down("md")]: {
      right: "0px",
      bottom: "0px",
    },
  },
  subtotal: {
    fontFamily: "Montserrat",
    position: "absolute",
    right: "90px",
    [theme.breakpoints.down("md")]: {
      bottom: "0px",
    },
  },
  minus: {
    fontSize: "25px",
    position: "absolute",
    right: "350px",
    top: "24px",
    [theme.breakpoints.down("md")]: {
      right: "100px",
      top: "130px",
    },
  },
  plus: {
    fontSize: "25px",
    position: "absolute",
    right: "200px",
    top: "26px",
    [theme.breakpoints.down("md")]: {
      right: "0px",
      top: "130px",
    },
  },
  quantity: {
    borderRadius: "20%",
    color: "rgba(0,0,0, 0.5)",
    padding: "0px 12px 0 12px",
    border: "1px solid grey",
    position: "absolute",
    right: "288px",
    top: "38px",
    [theme.breakpoints.down("md")]: {
      right: "65px",
      top: "143px",
    },
  },
}));
