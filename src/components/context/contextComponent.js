



import './context.css';
import Form from './form';
import Out from './out';
import context from './context';
import { useState } from 'react';

const{Provider}=context;

const Context=()=>{   
    const [data,setData]=useState({forceChange});
    function forceChange(newData){
        setData({...data,...newData})
    }
    return(
        <div>                  
            <h1>Context</h1>  
            <h3>Передача данных с компонента в компонент </h3>
            <h4>создаем отдельный файл с контекстом <mark>createContext</mark> и экспортируем,<br/>
                  импортируем в главный и достаем с него Provider, оборачиваем в него детей,<br/>
                  У реюенка импортируем и деструк Consumer и в его колбэке получаем данные,<br/>
                  Либо используем const data=useContext(context);<br/>

                </h4>         
             <div style={{backgroundColor:'lightseagreen'}}>
                 <h2>Hook Context</h2>
                 <Provider value={data}>
                 <Form {...{setData}}/>
                 <Out/>
                 </Provider>
             </div>

        </div>

    )

}



export default Context;