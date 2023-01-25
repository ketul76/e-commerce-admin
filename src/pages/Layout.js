import Header from "./Header";
import Aside from "./Aside";
import axios from 'axios';
import { useEffect, useState } from "react";


function Layout(){
  const [apiData,setApiData] = useState([]);

function cardsData(){
  axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    setApiData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}
  
useEffect(() => {
  cardsData();
},[])
  return(
    <>
      <Header />
      <Aside apiData = {apiData} />
    </>
  )
}

export default Layout;