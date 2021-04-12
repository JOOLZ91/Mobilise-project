import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CartItem from "./CartItem/cartitem";
import { Card as CardPayment } from "../Card/Card";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart }) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/products" className={classes.link}>
        come back and add some.
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid className={classes.containerForVisa}>
        <div className={classes.visaContainer}>
          <CardPayment />
        </div>
      </Grid>
      <Grid container spacing={3} className={classes.container}>
        {cart.line_items.map((item) => (
          <Grid
            item
            md={4}
            lg={12}
            key={item.id}
            className={classes.cartMobile}
          >
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container className={classes.container}>
        <div className={classes.cardDetails}>
          <div className={classes.price}>Subtotal:</div>
          <Typography variant="h4" className={classes.subtotal}>
            {cart.subtotal.formatted_with_symbol}
          </Typography>
        </div>

        <Button
          component={Link}
          to="/products"
          type="button"
          className={classes.goBack}
        >
          <ArrowBackIcon className={classes.arrow} />
          Continue Shopping
        </Button>
      </Grid>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4">
        Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
