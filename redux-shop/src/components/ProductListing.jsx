import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/actions";
import { Grid } from "@mui/material";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      dispatch(setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={product.id}>
          <ProductComponent product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListing;
