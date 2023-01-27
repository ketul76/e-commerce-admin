import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";


function SingalProduct(){
  let {id} = useParams();
  function productsData(){
    axios.get('https://fakestoreapi.com/id')
  .then(function (response) {
    console.log ("Responded Id is" ,  response);
  })
  .catch(function (error) {
    console.log(error);
  })
  }


  useEffect(() => {
    productsData();
  },[])
  return(
    <>
      <h1>The Product Id is {id}</h1>
    </>
  )
}

export default SingalProduct;