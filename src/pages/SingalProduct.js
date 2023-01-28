import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";


function SingalProduct() {

  const [product, setProduct] = useState([]);
  let { id } = useParams();

  function productsData() {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  useEffect(() => {
    productsData();
  }, [])
  return (
    <>
      <Container sx={{marginTop:"50px"}}>
           <Card sx={{ padding: "55px 25px", width:"750px",borderRadius: "10px",display:"flex",gap:"50px"}}>
           <div>
             <CardMedia
              sx={{width:"300px",height:"300px"}}
               image={product.image}
             />
           </div>
           <div>
             <Typography padding='5px 0' variant="body1">{product.title}</Typography>
             <Typography variant="body1" sx={{ fontWeight: "700" }}> {product.rating?.rate}({product.rating?.count} Customers Reviews)</Typography>
             <Typography padding='5px 0' variant="overline">{product.category}</Typography>
             <Typography padding='5px 0' variant="subtitle2">{product.description}</Typography>
             <div style={{ display: "flex", justifyContent: "space-between" }}>
               <Typography variant="body1" sx={{ fontWeight: "700" }}> Price: {product.price}</Typography>
              
             </div>
           </div>
         </Card>
       
      </Container>

    </>
  )
}

export default SingalProduct;