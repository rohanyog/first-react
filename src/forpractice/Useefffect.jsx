import { useEffect, useState } from "react";

function Useeffect(){
const [d,sd] = useState(2)
useEffect(()=>{
   now();
},[])
   function now(){
      console.log('hello world');
   }
  
  return(<>
<button className="bg-red-600" onClick={()=>{sd(d+1)}}>Hello world{d}</button>

  </>)

}
export default Useeffect;