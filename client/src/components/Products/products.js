import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart, cart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <h1 className={classes.title}>
        Welcome to best Asian restaurant in London!
      </h1>
      <h2 className={classes.description}>
        If you’re looking to enjoy amazing food in what feels like a Grand
        Palace in the heart of Thailand, book yourself a table at Smoking Goat
        and Som Saa
      </h2>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product
              product={product}
              onAddToCart={onAddToCart}
              cart={cart.line_items}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
