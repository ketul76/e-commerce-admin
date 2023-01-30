import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Button, Card, CardMedia, Stack, Typography } from "@mui/material";
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
      <Container sx={{marginTop:"20px"}}>
          <Card className="sigleCard" sx={{display:"flex",padding:"20px",gap:"50px",borderRadius:"16px"}} >
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
             <Stack direction='row' gap={2} marginTop="25px" >
              <Button variant='contained'>Add To Cart</Button>
              <Button variant='contained'>Shop Now</Button>
             </Stack>
           </div>
         </Card>
       
      </Container>

    </>
  )
}

export default SingalProduct;