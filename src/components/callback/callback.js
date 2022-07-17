
import {useState,useCallback,useEffect} from 'react';

const Callback=()=>{
    const [taggle,setTaggle]=useState(false);
    const [chack,setCheck]=useState(false)

    const getRandom= useCallback(()=>{
        console.log('RANDOMED');
        return parseInt(Math.random()*100) 
    },[chack?taggle:null]); // если добавим отслеживать [taggle] компонет в рэндринге (принимающий эту функцию) 
                    //будет при каждом рэндринге вызывать ее заного 
                    // [] пустой массив вызовет ее один раз, а потом запомнит результат  
    
    const onToggle=()=>setTaggle(!taggle); 

    return(
        <div className="callback">
            <p><mark>useCallback</mark><pre> - оборачиваем в useCallback функцию,
                в render вызываем компонент и параметром передаем эту функцию
                в самом компоненте вызываем ее в эффекте и отслеживаем саму функцию</pre> </p>
            отслеживать клик в useCallback<input type="checkbox" onChange={()=>setCheck(!chack)} checked={chack} />

            <Number {...{getRandom}}/>
            <button onClick={onToggle}>Render update</button>
        </div>
    )
}

const Number=({getRandom})=>{
    const [number,setNumber]=useState();

    useEffect(()=>{       
        setNumber(getRandom());
    },[getRandom]);// сработает при изменении функции

    return <p><h1>{number}</h1></p>;
    
}

export default Callback;