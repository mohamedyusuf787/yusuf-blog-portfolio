import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
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
  );
}

export default App;
