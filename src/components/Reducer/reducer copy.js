

import { useEffect, useReducer, useRef } from 'react';
import './reducer.css';

let mainEl=null;

function reducer(state,action){ //SWITCH
    switch(action.type){
        case 'red' : return {color:'red'};
        case 'green' : return {color:'green'};
        case 'blue' : return {color:'blue'};
        default: console.log('ACTION',action);
    }
}

const reducer2=(state,action)=>{ //OBJECT
    console.log('Event',action.event);
    const obj={
        red:{color:'red'},
        green:{color:'green'},
        blue:{color:'blue'},
        opacity:{opacity:(+window.getComputedStyle(action.event.target.parentElement.firstChild ).opacity) + (action.event.type==='click'?-0.3:0.3)}
    }
    
    if(action.type in obj){   
        const temp= {...state,...obj[action.type]};
        //console.log('REDUSER STATE',temp);
    return temp;
}else{
    alert(`COLOR ${action.type} NOT FOUND ! `);
}

}

const Reducer=()=>{
    const mainDiv=useRef(null);

    const [reducerState,dispatch]=useReducer(reducer2,{color:'gray'});
    const click=(e,opacity=null)=>{
        e.preventDefault();
        dispatch({type:e.target.innerText,event:e})
    };

    const changeOpacity=e=>{        
        console.log(window.getComputedStyle(mainDiv.current).opacity);
        //let op=window.getComputedStyle(mainDiv.current).opacity;
        mainDiv.current.style.opacity=+window.getComputedStyle(mainDiv.current).opacity-0.1;
        
    }

    useEffect(()=>{
        console.log('RENDER');
        mainEl=mainDiv.current;
    });
    return(
        <div className='Reducer' ref={mainDiv}>
            <h1 style={reducerState} >Reducer</h1>
            <button onClick={click}>red</button>
            <button onClick={click}>green</button>
            <button onClick={click}>blue</button>
            <button onClick={click}>pink</button>
            <button onClick={click} onContextMenu={click}>opacity</button>
        </div>
    )
}

export default Reducer;