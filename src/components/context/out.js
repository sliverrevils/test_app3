
import {useContext} from 'react';
import context from "./context";

const {Consumer} = context;
const Out=()=>{
    const con=useContext(context);
    console.log('useContext',con);
    return(
    <div>
     <h2>Out with Consumer :</h2>
     <Consumer>
         {
             data=><h3>Login: {data.login} , Password: {data.pass}</h3>  
         }
     </Consumer>
     <h2>Out with useContext</h2>
         <h3>Login : {con.login} , Password : {con.pass}</h3>
          
    </div>
    )
}

export default Out;