import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/actions";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Hr = styled("div")({
  borderTop: "solid 1px gray",
  marginBottom: "1rem",
});

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

      dispatch(selectedProduct(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id && id !== "") {
      fetchProductDetails();
      console.log(product);
    }
  }, [id]);

  return (
    <div style={{ height: "100%" }}>
      {Object.keys(product).length === 0 ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>.....Loading</Typography>
        </div>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>
              <Link to="/">Continue shopping</Link>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ border: "solid 1px gray", borderRadius: "10px" }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={image}
                  alt={title}
                  height="450px"
                  style={{ margin: "1rem" }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} container>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                border: "solid 1px gray",
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <div style={{ marginTop: "1rem" }}>
                <Typography variant="h4" sx={{ color: "#203040" }}>
                  {title}
                </Typography>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Grid container>
                  <Grid
                    className="tag"
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    style={{ height: "60px" }}
                  >
                    <div style={{ marginLeft: "2.5rem" }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {price} &nbsp;/=
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6">Category</Typography>
                <Hr />
                <Typography>{category}</Typography>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Typography variant="h6">Description</Typography>
                <Hr />
                <Typography variant="body1">{description}</Typography>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Button variant="contained">add to cart</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ProductDetails;
