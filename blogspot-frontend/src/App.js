import { Routes, Route } from "react-router-dom";
import './index.css'
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import About from "./Pages/About.jsx";
import Login from "./Authentication/Login.jsx";
import Registration from "./Authentication/Registration.jsx";
import BlogPost from "./Pages/BlogPost.jsx";
import AuthorDetail from "./Pages/AuthorDetail.jsx";
import CreatePost from "./Pages/CreatePost.jsx";





function App() {
  return (
    <div className="home-block">    
        <div><Header></Header></div>        
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/CreatePost' element = { <CreatePost/> }></Route>
          <Route path='/About' element = { <About />}></Route>
          
            <Route path='/Login' element = { <Login/> }></Route>
          
          
          <Route path='/Registration' element = { <Registration/> }></Route>
          
          <Route path='/BlogPost' element = { < BlogPost /> }></Route>
          <Route path='/AuthorDetail' element = { <AuthorDetail/> }></Route>
        </Routes>
    </div>
  );
}

export default App;
