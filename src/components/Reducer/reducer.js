

import { useEffect, useReducer, useRef } from 'react';
import './reducer.css';

let mainEl = null;

function reducer(state, action) { //SWITCH
    switch (action.type) {
        case 'red': return { color: 'red' };
        case 'green': return { color: 'green' };
        case 'blue': return { color: 'blue' };
        default: console.log('ACTION', action);
    }
}

let rgb = null;// -----------------!!!! надо работать со стэйтом редюсера а не с глобальными переменными !!!!
const reducer2 = (state, action) => { //OBJECT

    const {event:{type}}=action;

    //ПОЛУЧАЕМ ЦВЕТ ПРИ ПЕРВОЙ ОПЕРАЦИИ
    if (!rgb) rgb = window.getComputedStyle(action.event.target.parentElement.firstChild).color.replace(/\D/g, '').split('');
    
    //const rgb=state.color.replace(/\D/g, '').split('');
    console.log('RGB-first', rgb);

    const changeVal=val=>(type==='click'?+ val:-val);

    const obj = {
        red: () => rgb[0] = +rgb[0] + changeVal(20),
        green: () => rgb[1] = +rgb[1] + changeVal(20),
        blue: () => rgb[2] = +rgb[2] + changeVal(20),
        opacity: ()=>(+window.getComputedStyle(action.event.target.parentElement.firstChild).opacity) + (type === 'click' ? -0.3 : 0.3) 
    }

    if (action.type in obj) {
        console.log('RGB-last', rgb);
        action.type!=='opacity'&&obj[action.type]();
        const temp = { ...state, color: `rgb(${rgb + ''})`, ...(action.type==='opacity')&&{opacity:obj.opacity()} };
        //console.log('REDUSER STATE', temp);
        return temp;
    } else {
        alert(`COLOR ${action.type} NOT FOUND ! `);
    }

}

const Reducer = () => {
    const mainDiv = useRef(null);

    const [reducerState, dispatch] = useReducer(reducer2, { color: `rgb(0, 0, 0)` });
    const click = (e, opacity = null) => {
        e.preventDefault();
        dispatch({ type: e.target.innerText, event: e })
    };

    const changeOpacity = e => {
        console.log(window.getComputedStyle(mainDiv.current).opacity);
        //let op=window.getComputedStyle(mainDiv.current).opacity;
        mainDiv.current.style.opacity = +window.getComputedStyle(mainDiv.current).opacity - 0.1;

    }

    useEffect(() => {
        console.log('RENDER');
        mainEl = mainDiv.current;
    });
    return (
        <div className='Reducer' ref={mainDiv}>
            <h1 style={reducerState} >Reducer</h1>
            <h4>[left,right]= [add,remove]</h4>
            <button onClick={click} onContextMenu={click} >red</button>
            <button onClick={click} onContextMenu={click} >green</button>
            <button onClick={click} onContextMenu={click}>blue</button>
            <button onClick={click}>pink</button>
            <button onClick={click} onContextMenu={click}>opacity</button>
        </div>
    )
}

export default Reducer;