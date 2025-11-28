import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Grid, Button } from "@mui/material";

const products = [
  { id: 1, name: "Product 1", price: "$10", image: "https://c1.neweggimages.com/productimage/nb640/AMYES200828Hpw9T.jpg" },
  { id: 2, name: "Product 2", price: "$20", image: "https://avatars.mds.yandex.net/i?id=84e33d1de5a7940f32077f3e22a97affd9474af8-4576832-images-thumbs&n=13" },
  { id: 3, name: "Product 3", price: "$30", image: "https://i.pinimg.com/originals/19/8f/d3/198fd32acbe95f2be77c84a3d05a6471.jpg" },
];

function ProductCards() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography style={{textAlign:"center", color:"#1976D2"}} variant="h3" sx={{ mb: 6 }}>
        Products
      </Typography>
      <Grid style={{display:"flex", justifyContent:"center"}} container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia component="img" height="190" style={{width:400, objectFit:"fill"}} image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">{product.price}</Typography>
                <Button variant="contained" sx={{ mt: 1 }}>Buy Now</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductCards;
