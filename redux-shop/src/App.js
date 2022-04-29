import { Container, Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="header">
        <Header />
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="main">
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/products/:id" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="footer">
        <footer>footer</footer>
      </Grid>
    </Grid>
  );
}

export default App;
