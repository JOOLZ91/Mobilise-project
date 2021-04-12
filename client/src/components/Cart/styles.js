import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
    fontFamily: "Montserrat",
    marginBottom: "30px",
    width: "300px",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
    right: "200px",
  },
  main: {
    fontFamily: "Play",
  },
  container: {
    display: "flex",
    position: "relative",
    width: "800px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      justifyContent: "center",
    },
  },
  subtotal: {
    fontFamily: "Montserrat",
    position: "absolute",
    right: "0px",
    top: "82px",
  },
  price: {
    fontSize: "20px",
    fontFamily: "Montserrat",
    position: "absolute",
    right: "140px",
    top: "92px",
    paddingBottom: "40px",
  },
  goBack: {
    fontFamily: "Montserrat",
    fontSize: "20px",
    color: "rgb(1, 68, 134)",
    textTransform: "none",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      position: "absolute",
      left: "0px",
    },
  },
  arrow: {
    fontSize: "25px",
    marginRight: "10px",
    color: "black",
  },
  visaContainer: {
    position: "absolute",
    right: "0px",
    marginBottm: "10px",
    [theme.breakpoints.down("md")]: {
      position: "unset",
      display: "flex",
      flexDirection: "column",
    },
  },
  containerForVisa: {
    position: "relative",
  },
  cartMobile: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
}));
