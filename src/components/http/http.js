
import { useEffect, useState } from 'react';
import { useHTTP } from '../hooks/http.hook';
import Message from '../portal/portal';
import './http.css';


const HTTP=props=>{

const [url,setUrl]=useState('https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=0&apikey=c3fa8cd8533a22f8ca1668e6e1f595ab');
    const [resArr,setResArr]=useState([]);
    const http=useHTTP();
    const [info,setInfo]=useState(false);

    const onRequest=()=>{
        setInfo(false);    
        setResArr([]);
        http.error&&http.clearError();
        http.request(url).then(({data:{results}})=>setResArr(results));
        
    }

    const onDelEl=({target:{parentElement:{id}}})=>{         
        setResArr(resArr.filter(el=>+el.id!==+id));   
        //setInfo(false); -------- DONT WORK !!!???    
    }

    //info   

    function onSelectChar(event,el){
        setInfo(el);
        
        window.scrollTo({top:0,behavior:'smooth'});
    }

    
    const CharJSX=()=>
    <div >
        <h2>{info.name}</h2>
        <img src={info.thumbnail.path+'.jpg'} alt="" />
        <p>{info.description}</p>

    </div>
    

    return(
        <div className='HTTP'>
                <h2>HTTP.hook</h2>
                <input type="text" onChange={e=>setUrl(e.target.value)} value={url}/>
                <button onClick={onRequest}>GET</button>
                <div className='HTTP-response'>
                    
                    {http.loading?<h2>Loading...</h2>:resArr.map(el=><h3 key={el.id} id={el.id} onClick={(e)=>onSelectChar(e,el)} >{el.name} <span onClick={onDelEl} style={{cursor:'pointer'}}>❌</span></h3>)}
                    {http.error&&<h2>ERROR 😫{http.error}</h2>}
                    {info&&<Message class="Info" infoClose={()=>setInfo(false)}> <CharJSX/></Message>}
                    
                </div>
            </div>
    )
} 


export default HTTP;