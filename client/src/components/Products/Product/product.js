import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import useStyles from "./styles";
// import { AddShoppingCart } from "@material-ui/icons";

const Product = ({ product, onAddToCart, cart }) => {
  const classes = useStyles();
  console.log(product.id);
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    const currentItem = cart.filter((item) => {
      return item.name === product.name;
    });

    if (currentItem.length > 0) {
      setItemQuantity(currentItem[0].quantity);
    }
  }, [cart, product]);

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
          <FacebookShareButton
            url="https://gymonster.netlify.app/"
            quote="What a delicious food, try it!"
            hashtag="#DeliciousFood"
          >
            <FacebookIcon className={classes.fbShare}></FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton
            url="https://gymonster.netlify.app/"
            quote="What a delicious food, try it!"
            hashtag="#DeliciousFood"
          >
            <TwitterIcon className={classes.instaShare}></TwitterIcon>
          </TwitterShareButton>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Remove from Cart"
            onClick={() => onAddToCart(product.id, -1)}
          >
            <RemoveIcon />
          </IconButton>
          <div>{itemQuantity}</div>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => {
              if (itemQuantity < 10) {
                onAddToCart(product.id, 1);
              } else {
                alert("You can order maximum 10 of each product");
              }
            }}
          >
            <AddIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
