import Header from "./Header";
import Aside from "./Aside";
import data from "../data";

function Layout(){
  return(
    <>
      <Header />
      <Aside data = {data} />
    </>
  )
}

export default Layout;