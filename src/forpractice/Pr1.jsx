import { useState } from "react";

const Pr1 = () => {
      const [count,setCount] = useState()
      console.log(count);
      
   return(
      <>
      <h1>count :{count} </h1>
      <input type="number" onInput={(e)=>{setCount(e.target.value)}} />
      </>
   )
}

export default Pr1;