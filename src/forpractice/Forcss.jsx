import {Route,Routes,Link} from 'react-router'
import Home from './Home';
import About from './About';

export default function Forcss(){
   const path = `src/assets/react.svg`;
   return(
      
   <>
    
  <nav className="flex p-2  bg-black text-white">
   <img src={path} className="ml-6 " alt="" />
   <Link className="p-3 text-xl my-2 ml-12 hover:text-lime-400 font-mono " to="/">Home</Link>
   <Link className="p-3 text-xl my-2  hover:text-lime-400 font-mono" to="/about" >Media</Link>
   <a className="p-3 text-xl my-2  hover:text-lime-400 font-mono" href="">About</a>
   <a className="p-3 text-xl my-2  hover:text-lime-400 font-mono" href="">Gallery</a>
  </nav>
  <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        </>
   )
}