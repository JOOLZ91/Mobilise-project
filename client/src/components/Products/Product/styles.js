import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    position: "relative",
    height: "470px",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "60%",
  },
  cardActions: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  fbShare: {
    position: "absolute",
    bottom: "30px",
  },
  instaShare: {
    position: "absolute",
    bottom: "30px",
    left: "50px",
  },
  description: {
    marginTop: "16px",
  },
}));
