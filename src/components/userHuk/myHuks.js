import { useCallback, useEffect, useState } from "react"


 export const useNumber=initVal=>{// async Huk

    const [num,setNum]=useState(initVal);

    const inc=()=>setNum(oldNum=>+oldNum+1);
    const dec=()=>setNum(oldNum=>+oldNum-1);      
    const onGetRnd=useCallback((min=1,max=100)=> {
        fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`)
            .then(data=>data.text()).then(num=>setNum(num));
            console.log('onGetRnd');
        },[]);

    useEffect(()=>{ isNaN(num)&&setTimeout(()=>setNum(1),1000) },[num]);
    return {num,inc,dec,onGetRnd}
}

export function useInput(initVal){ // input Validate
        const [text,setText]=useState(initVal);
        const onChange=e=>setText(e.target.value);
        const isValid=()=>text.search(/(\d|\s)/)>=0?{color:'red'}:{color:'black'};
    
        return {text,onChange,isValid}
    }