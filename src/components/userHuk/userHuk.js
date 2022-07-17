
import './userHuk.css';

import { useEffect, useRef, useState} from 'react';
import {useInput, useNumber} from './myHuks';
import Message from '../portal/portal';





const UserHuk=()=>{
    const [range,setRange]=useState({min:1,max:100});
    const onChangeRange=e=>setRange(oldVal=>({...oldVal,[e.target.placeholder]:+e.target.value}));
    useEffect(()=>{
        console.log(range);
    },[range])
// --------------------USE MY HUK
    const input=useInput('');
    const num=useNumber('Hi !!!'); 

  
    //----------
    const [beep,setBeep] =useState(false);
    const isBeep=useRef(null);

    useEffect(()=>{
        setBeep(true);
        isBeep.current=setTimeout(()=>{
            setBeep(false);
            clearTimeout(isBeep.current);
        },500);

    },[num.num]);   

    return(
        <div className='UserHuk'>
            <p> <b>Создаем свой <mark> Huk </mark>для input</b> (со своим внутренним state и функциями валидации текста(без цифр и пробелов) )</p>
            <input type="text" style={input.isValid()} value={input.text} onChange={input.onChange} placeholder="без пробелов и числе"/>
            <br />
            <div className='Inc'>
                <h2>создаем Huk для получения случаного числа в диапазоне с сервера</h2>
                <h2>Number : {num.num}</h2>
                <div> 
                    <input type="number" onChange={onChangeRange} value={range.min} placeholder='min'/>
                    <input type="number" onChange={onChangeRange} value={range.max} placeholder='max'/>
                
                </div>
                <p>
                <button onClick={num.inc}>Inc 📈</button>
                <button onClick={num.dec}>Dec 📉</button>
                <button onClick={()=>num.onGetRnd(range.min,range.max)}>Rnd from server ⌚📪</button>                         
                </p>
                {beep&&<Message class="Message Active">{num.num}</Message>}
            </div>            
        </div>
    )
}

export default UserHuk;