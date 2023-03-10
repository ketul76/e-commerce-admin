import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function Home(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home;