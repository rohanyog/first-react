import { Button } from "react-bootstrap";
import { Card ,CardHeader ,CardBody , CardImg} from "react-bootstrap";
function Bootstrap(){
   const path = `src/assets/react.svg`;
   return(
      <>
    <div classname="flex  flex-wrap flex-col-reverse">

<Card>
   <CardHeader>
      <div className="img-fluid img-thumbnail border-zinc-950 bg-black"> 
   <img src={path}  style={{width:'140px'}} />
   </div>
      <h2>Hello Rohan World</h2>
   </CardHeader>
   <CardBody>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laudantium quae deleniti veniam quaerat expedita in suscipit ea eaque voluptates explicabo aperiam impedit eum nisi, eius fugit, modi consequatur molestiae.</CardBody>
</Card>
<Card>
   <CardHeader>
   <div className="img-fluid img-thumbnail border-zinc-90 bg-black"> 
   <img src={path}  style={{width:'140px'}} />
   </div>
      <h2>Hello Rohan World</h2>
   </CardHeader>
   <CardBody>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laudantium quae deleniti veniam quaerat expedita in suscipit ea eaque voluptates explicabo aperiam impedit eum nisi, eius fugit, modi consequatur molestiae.</CardBody>
</Card><Card>
   <CardHeader>
   <div className="img-fluid img-thumbnail border-zinc-950 bg-black"> 
   <img src={path}  style={{width:'140px'}} />
   </div>
      <h2>Hello Rohan World</h2>
   </CardHeader>
   <CardBody>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laudantium quae deleniti veniam quaerat expedita in suscipit ea eaque voluptates explicabo aperiam impedit eum nisi, eius fugit, modi consequatur molestiae.</CardBody>
</Card><Card>
   <CardHeader>
   <div className="img-fluid img-thumbnail border-red-500 border-b-8 bg-black"> 
   <img src={path}  style={{width:'140px'}} />
   </div>
      <h2>Hello Rohan World</h2>
   </CardHeader>
   <CardBody>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laudantium quae deleniti veniam quaerat expedita in suscipit ea eaque voluptates explicabo aperiam impedit eum nisi, eius fugit, modi consequatur molestiae.</CardBody>
</Card>
</div>
      </>
   )
}
export default Bootstrap;