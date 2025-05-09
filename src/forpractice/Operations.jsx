import { createElement } from "react"
function Operations(){
   const name = "rohan yog"
   const fun = (a,b) =>{
      return a+b
   }
   const name3 = null
   return(
      <>
      <h1>hello world , from - {name}</h1>
      <h2>dynamic funciton call : {fun(2,3)}</h2>
      {name3?<h2>hellow</h2>:<h2>no name present</h2>}
      <h3>{createElement('div',{id:'we'},"This is used to create Elements")}</h3>
      <button onClick={()=>{alert('Hello from Alert')}}>Alert Button</button>
      </>
   )
}
export default Operations;