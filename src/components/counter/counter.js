import { useEffect, useState } from "react";


function Counter() {
  
    const [counter,setCounter]=useState(0);
    const [rndMax,setRndMax]=useState('');
    
  
    function changeCounter(num,rnd){
      if(num!==0)
      setCounter(counter=>counter+num);
      else
      setCounter(rnd);
    }
  
    function randomNum(min=0,max=100){
      return parseInt(Math.random()*(max-min)+min);
    }
  
    const logFnc=()=>console.log('Event CLICK');
  
    useEffect(()=>{
      console.log('Mount & ADD EVENT CLICK');
      document.title=`Num: ${counter}`;
      document.addEventListener('click',logFnc);
    return ()=>{
      console.log('Unmount & REMOVE EVENT CLICK');
      document.removeEventListener('click',logFnc);
  
  
      // const handlePageChange=()=>document.hidden
      // ?console.log(`User left the page at${new Date()}`)
      // :console.log(`User opened the page at${new Date()}`);
  
      // document.addEventListener('visibilitychange',handlePageChange);
      
  
  
    }},[]);// сработает только при монтировании компонента
  
    useEffect(()=>{
      console.log('Update counter')
      document.title=`Num: ${counter}`;
    },[counter]);//срабатывает при каждом обновлении counter
  
    
  
    return (
      <div className="App">
        <div>
          <p>Counter : {counter}</p>
          
          <button onClick={()=>changeCounter(+1)}>+</button>
          <button onClick={()=>changeCounter(-1)}>-</button>
         
          <input type="number" onClick={()=>setRndMax('')} onChange={e=>setRndMax(parseInt(e.target.value))} placeholder='max value' value={rndMax} />
          <button onClick={()=>changeCounter(0,randomNum(0,rndMax))} disabled={!(rndMax>0)} >RND</button>
          <button onClick={()=>setCounter(0)}>RESET</button>       
        </div>   
        
      </div>
    );
  }
export default Counter;  