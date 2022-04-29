import React from "react";
import { Grid, Typography } from "@mui/material";
import Cart from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
        <Link to="/">
          {" "}
          <Typography variant="h4" sx={{ color: "white" }}>
            My Shop
          </Typography>
        </Link>
      </Grid>

      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <Link to="/cart">
          <Cart />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
