import React, { useState, useEffect } from "react";
import Login from "../Login/login";
import Products from "../Products/products";
import Cart from "../Cart/cart";
import Navbar from "../Navbar/navbar";
import { commerce } from "../../lib/commerce";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/products">
            <Navbar totalItems={cart.total_items} />
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              cart={cart}
            />
          </Route>
          <Route exact path="/cart">
            <Navbar totalItems={cart.total_items} />
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Main;
