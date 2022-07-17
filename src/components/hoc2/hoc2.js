

import { useState } from 'react';
import './hoc2.css';

const Component=props=>{
    const [arr,setArr]=useState([1,2,3,4,5,6,7,8,9]);
    return props.render(arr);
}

function Hoc2(){
    const [name,setName]=useState('');
    const mail=useState('');

    const setter=set=>({target:{value}})=>set(value);
    //console.dir(setMail);
    const setter2=({target:{value,placeholder}})=>{
    mail[1](value);
    }

    return( 
    <div className='Hoc2'>
        <h2>Name: {name}; Mail : {mail[0]} .</h2>
        <div style={{display:'flex',flexDirection:'column'}}>
        <input type="text" onChange={setter(setName)} required  pattern={/^\d{10}$}/} />
        <input type="text" onChange={setter2} placeholder='Mail' />    
        <input type="number" min={0} max={10} step={2} />
        </div>  
        <h2>Render-props и HOC - -в Компонент передаем функцию render , которую в нем и возвращаем (используя внутренние параметры и логику)</h2>
        <Component render={arr=>arr.map(num=><h6>{num}</h6>)}/>          
    </div>
    )
    
}

export default Hoc2;