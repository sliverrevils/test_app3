
import { useEffect, useMemo,useState } from 'react';

import './memo.css';


let updates1=0,
    updates2=0;


const Memo=()=>{

    const [name,setName]=useState('');
    const [sename,setSename]=useState('');
    const [toggle,setToggle]=useState(false);
    const [isMemo,setIsMemo]=useState(true);    
    
    const addUpdates=()=>{
        console.log('⭕',updates1);
        updates1=updates1+1;
    };

    const CreateUser=(name,sename)=>{
        addUpdates();
        console.log('USER CREATING 🔄');     
        return {name,sename}
    }

    const user=useMemo(()=>CreateUser(name,sename),[name,sename]);

    
    const style=useMemo(()=>({        
        backgroundColor:updates2%2===0?'lightgray':'white'
    }),[updates2]);

    useEffect(()=>{
        console.log('CHANGING STYLE 🔀');
    },[style]);


    useEffect(()=>{
        updates2+=1;
        console.log('💥',updates2);        
        
    },[updates1]);


    return(
        
        <div className='Memo'>
            
            <p>Оборачиваем в useMemo функцию котороую render вызывает только при изменениии переменных указаных  в зависимости</p>
        <p>useMemo <input type="checkbox" checked={isMemo} onChange={()=>setIsMemo(!isMemo)}/></p>
        RESULTS: <b style={style}> {updates2} </b>
        <div className='Inputs'>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <input type="text" value={sename} onChange={e=>setSename(e.target.value)} />
            <input type="button" value={toggle} onClick={()=>setToggle(!toggle)} />
        </div>
            
            <pre>
            {JSON.stringify(isMemo?user:CreateUser(name,sename),null,2)}
            </pre>
        </div>
    )
}

export default Memo;