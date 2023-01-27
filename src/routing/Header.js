import { Link } from "react-router-dom";


function Header(){
  return(
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  )
}

export default Header;