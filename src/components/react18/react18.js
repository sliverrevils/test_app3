import { useMemo, useState , useTransition, useDeferredValue, useRef} from 'react';
import db from '../../db/users.json';


import './react18.css';

const React18 = () => {
    const [textSearch, setTextSearch] = useState('');
    const [textSearch2, setTextSearch2] = useState('');
    const [textSearch3, setTextSearch3] = useState('');
    

   
    //---1 - Нативный поиск 
    const findUser = useMemo(() => db.filter(user => user.name.toLowerCase().includes(textSearch.toLowerCase()))
        .map((user,i)=> <li key={i+"_col1"}>{user.name}</li>)
        , [textSearch])//отслеживаем просто прямое состояние



    //---2 - С отложенным действием - useDeferredValue
     //создаем отложенное действие
    const defferedValue=useDeferredValue(textSearch2)//передаем состояние с введенным текстом
    const findUser2 = useMemo(() => db.filter(user => user.name.toLowerCase().includes(textSearch2.toLowerCase()))
        .map((user,i)=> <li key={i+"_col2"}>{user.name}</li>)
        , [defferedValue])//отслеживаем  отложенное действие с помощью -  useDeferredValue



    //---3 - Отложенное действие со стартом и  состоянием - useTransition
    //   статус ожидания , старт выполнения
    const [isPanding,startTransition]=useTransition(); 

    //-----------------НА СОБЫТИИ ИНПУТА (в контролируемом инпуте)

    // const textChange=e=>{  // оборачиваем в колбэк startTransition изменение стэйта 
    //     startTransition(()=>{ 
    //         setTextSearch3(e.target.value);
    //     });
    // }

    //--------------------------------------ПОИСК ОТДЕЛЬНОЙ КНОПКОЙ 🖱 (функцией на кнопке -  в не контролируемом инпуте берем по рефу текст и заносим его в состояние  которое отслеживает мемо поиска )
    
    //реф для доступа к инпуту 
    const input=useRef();
    //функция на кнопку поиска
    const onFind=()=> startTransition(()=>{ // оборачиваем в колбэк startTransition изменение стэйта 
        setTextSearch3(input.current.value);
    });
    //функция поиска 
    const findUser3 = useMemo(() => db.filter(user => user.name.toLowerCase().includes(textSearch3.toLowerCase()))
        .map((user,i)=> <li key={i+"_col3"}>{user.name}</li>)
        , [textSearch3])//отслеживаем  прямое состояние 


    return (
        <div className='React18'>
            <h1>React 18 updates</h1>
            <h2>useTransition, useDeferredValue, useId</h2>
            <h4>
            useDeferredValue - отложенное действие <br/>
            useTransition - отложенное действие с контролем и стэйтом выполнения 
            </h4>
            <div className='SearchName'>
                <label>
                <b>   Native filter</b>
                    <input type="text" value={textSearch} onChange={e => setTextSearch(e.target.value)} />
                    <ul >{findUser}</ul>
                </label>
                <label>
                <b> useDeferredValue</b>
                    <input type="text" value={textSearch2} onChange={e => setTextSearch2(e.target.value)} />
                    <ul>{findUser2}</ul>
                </label>
                <label>
                <b> useTransition</b>
                    <input type="text"  ref={input}/>
                    {isPanding?'⏳':<button onClick={onFind}>Find</button>}
                    
                    <ul>{findUser3}</ul>
                </label>
                <label>
                    {db.sort((a,b)=>a.age-b.age<=0?1:-1).map(el=><span>{el.name}:{el.age}<br/></span>)}
                </label>
            </div>
        </div>
    )
}

export default React18;