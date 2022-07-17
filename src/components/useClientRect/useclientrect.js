//https://ru.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node


import { useCallback, useState ,useEffect, useRef} from 'react';

import './useclientrect.css';

const ClientRect=()=>{
    const [state,setState]=useState();
    const update=useRef(0);
    const [rect,ref] = useClientRect();


    useEffect(()=>{        
        console.log('💱');
    },
    [state]);

    return(
        <div>
            <h4>-(callback-ref элемента <mark>заголовка </mark>оборачиваем в useCallback , где получаем объект размеров. только при componentDidMount )</h4>
            <h1 ref={ref}> <mark> Заголовок </mark></h1>
            {rect!==null&&
            <h2> Заголовок имеет высоту {Math.round(rect.height)} пикселей</h2>}
            <button onClick={()=>{setState(!state);++update.current}}>update {update.current}</button>
        </div>
    )
}

function useClientRect(){
    const [rect,setRect]=useState(null);

    const ref=useCallback(node=>{
        if(node!==null){            
            console.log('GETTING RECT');
            setRect(node.getBoundingClientRect());
        }
    },[]);
    return [rect,ref];

}

export default ClientRect;