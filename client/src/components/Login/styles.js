import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paperStyle: {
    position: "relative",
    padding: "20px",
    height: "auto",
    width: "500px",
    margin: "20px auto",
  },
  inputStyle: {
    margin: "0px 0px 20px",
  },

  btnStyle: {
    position: "absolute",
    right: "20px",
    padding: "10px 30px",
  },

  signText: {
    margin: "20px 0 60px",
  },

  lockStyle: {
    position: "absolute",
    right: "30px",
    top: "225px",
    fontSize: "30px",
    color: "rgba(0,0,0, 0.5)",
  },

  userStyle: {
    position: "absolute",
    right: "30px",
    top: "150px",
    fontSize: "30px",
    color: "rgba(0,0,0, 0.5)",
  },
}));
