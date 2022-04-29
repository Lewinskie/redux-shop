import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({ product }) => {
  const { title, category, image, price, id } = product;
  console.log(product);
  return (
    <Link
      to={`/products/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card>
        <CardMedia component="img" image={image} height="150px" alt={title} />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{price}</Typography>
          <Typography variant="caption">{category}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductComponent;
