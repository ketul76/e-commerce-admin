import { useParams } from "react-router-dom";
 
function Dashboard(){
  let { id } = useParams();
  return(
    <>
      <h1> This Is a Dashboard: {id}</h1>

    </>
  )
}

export default Dashboard;