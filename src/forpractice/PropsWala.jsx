
const Propswala = (props) => {
//   const { user, isActive } = props; // Destructuring the props

  return (
   <div>
     <h1>{props.user.name}</h1>
     <p>Age: {props.user.age}</p>
     <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
   </div>
 );
};

export default Propswala;