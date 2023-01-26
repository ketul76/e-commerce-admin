import { useParams } from "react-router-dom";

function SingalProduct(){
  let {id} = useParams();
  return(
    <>
      <h1>The Product Id is {id}</h1>
    </>
  )
}

export default SingalProduct;