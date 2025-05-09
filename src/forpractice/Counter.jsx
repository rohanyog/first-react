import { useState } from "react"

function Aple() {
  const [count,setCount] = useState(1)
  const [rcount,rsetCount] = useState(10)

  return (
    <>
      <h3>Counter : {count} </h3>
      <h3>Counter : {rcount} </h3>
      <button onClick={()=>{setCount(count +1)}}>change content +</button><br />
      <button onClick={()=>{rsetCount(rcount -1)}}>change content - </button>
    </>
  )
}
export default Aple