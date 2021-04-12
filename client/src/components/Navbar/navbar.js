import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation, useHistory } from "react-router-dom";

import logo from "../../assets/logo6.jpg";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const location = useLocation();
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Smoking Goat and Som Saa - Thai restaurant"
              height="45px"
              className={classes.image}
            />
            Smoking Goat and Som Saa
          </Typography>
          <div className={classes.grow} />
          <Button
            className={classes.btnStyle}
            variant="contained"
            size="small"
            onClick={handleLogout}
          >
            Log out
          </Button>
          {location.pathname === "/products" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
