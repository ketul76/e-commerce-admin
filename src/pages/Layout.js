import Header from "./Header";
import Aside from "./Aside";
import data from "../data";
import axios from 'axios';


function Layout(){


  axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    console.log();
  })
  .catch(function (error) {
    console.log(error);
  })

  return(
    <>
      <Header />
      <Aside data = {data} />
    </>
  )
}

export default Layout;