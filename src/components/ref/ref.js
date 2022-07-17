
import { useEffect, useRef, useState } from 'react';

import './ref.css';

const Ref=()=>{
    
    const [text,setText]=useState();

    const myRef=useRef(0);
    const prevTextState=useRef('');
    const inputRef=useRef(null);

    useEffect(()=>{
        myRef.current++;  
        prevTextState.current=text;      
    });

    return(
        <div className='Ref'>
            <p>Ref</p>
            <div>
                <p>Renders {myRef.current} -//используем useRef для хранилища переменной обновлений рендера</p>
                <input type="text" ref={inputRef} name='name' onChange={e=>setText(e.target.value)} />
                <button onClick={()=>inputRef.current.focus()}> Select input</button>
                <br />
                <textarea name="" id="" cols="30" rows="3" value={prevTextState.current} placeholder="тут отобразится предидущий state input-а сохраненный через useRef" readOnly={true}></textarea>
                <br/>                
            </div>
        </div>
    )
}

export default Ref;