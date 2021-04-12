import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import ClearIcon from "@material-ui/icons/Clear";

import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  console.log(item);

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          image={item.media.source}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" className={classes.name}>
            {item.name}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              className={classes.minus}
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              {item.quantity >= 2 && "-"}
            </Button>
            <Typography className={classes.quantity}>
              {item.quantity}
            </Typography>
            <Button
              type="button"
              size="small"
              className={classes.plus}
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              {item.quantity <= 9 && "+"}
            </Button>
          </div>
          <Typography variant="h5" className={classes.subtotal}>
            {item.line_total.formatted_with_symbol}
          </Typography>
          <Button
            type="button"
            className={classes.remove}
            onClick={() => onRemoveFromCart(item.id)}
          >
            <ClearIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CartItem;
