import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import AnimatedCursor from "react-animated-cursor"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
 <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    /> 
   <div className=" bg-black border rounded-lg w-full">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>

    </BrowserRouter>
   </div>
   </>
  );
}

export default App;
