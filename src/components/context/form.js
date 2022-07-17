import { useContext, useState } from "react";
//import context from "./context";
import context from "./context";

const Form=({setData})=>{

    const con=useContext(context);
    const [state,setState]=useState({});
    const updateState=({target:{name,value}})=>setState(prevState=>({...prevState,[name]:value}))

    const click=e=>e.target.value='';

    const submit=e=>{
        e.preventDefault();
        //setData(state);
        con.forceChange(state);
    };

    return(
        <form onSubmit={submit}>
            <input type="text" onClick={click} onChange={updateState} name="login" value={state.login||'Login'}/>
            <input type='text' onClick={click} onChange={updateState} name="pass" value={state.pass||'Password'} />
            <input type="submit" value={'OK'} />

        </form>
    )
}

export default Form;