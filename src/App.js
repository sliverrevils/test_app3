
import './App.css';
import React,{useEffect, useState,lazy,Suspense, createContext} from 'react';
import Exchange from './components/exchange/exchange';
import Callback from './components/callback/callback';
import Memo from './components/memo/memo';
import Ref from './components/ref/ref';
import ClientRect from './components/useClientRect/useclientrect';
import UserHuk from './components/userHuk/userHuk';
import HTTP from './components/http/http';
import MyRouter from './components/myrouter/myrouter';
import ReactMemo from './components/reactmemo/reactmemo';
import Context from './components/context/contextComponent';
import Reducer from './components/Reducer/reducer';
import Hoc from './components/hoc/hoc';
import Hoc2 from './components/hoc2/hoc2';
import Tgc from './components/tgc/tgc';
import FormikComp from './components/FormikComp/FormikComp';

import {CSSTransition} from 'react-transition-group'
import Formik2 from './components/FormikComp/Formik2';
import ReactHelmet from './components/ReactHelmet/ReactHelmet';
import React18 from './components/react18/react18';
import ReactTransition from './components/transition/transition';

//import Lazy from './components/Lazy/lazy';
const Lazy=lazy(()=>import('./components/Lazy/lazy'));// динамическая подгрузка 
const Counter=lazy(()=>import('./components/counter/counter'));
const ReactLazy=lazy(()=>import('./components/react18/react18'));



const App=()=>{
  

const [state,setState]=useState({
  showList:false,
  counter:false,
  exchange:false,
  callback:false,
  memo:false,
  ref:false,
  clientrect:false,
  myHook:false,
  http:false,
  router:false,
  lazy:false,
  reactMemo:false,
  context:false,
  reducer:false,
  hoc:false,
  hoc2:false,
  tgc:false,
  formik:false,
  formik2:false,
  helmet:false,
  react18:false,
  trans:true,
});

return (
  <div className='Toggles'>   
  
  <div className='Menu-list'>
  <button style={{position:'absolute',right:-50,top:10,cursor:'pointer'}} onClick={()=>setState(state=>({...state,showList:!state.showList}))} > {state.showList?'🔴':'🟢'}</button> 
 
  <CSSTransition in={state.showList} classNames={'main-menu'} timeout={300} mountOnEnter unmountOnExit >
    <div className='main-menu'>
      <h4><mark> Animation React-Transition-Group 🎃</mark></h4>
    <button onClick={()=>setState(state=>({...state,counter:!state.counter}))}>COUNTER & RANDOM {!state.counter?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,exchange:!state.exchange}))}>EXCHANGE {!state.exchange?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,callback:!state.callback}))}>CALLBACK {!state.callback?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,memo:!state.memo}))}>MEMO {!state.memo?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,ref:!state.ref}))}>REF {!state.ref?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,clientrect:!state.clientrect}))}>CLIENT RECT {!state.clientrect?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,myHook:!state.myHook}))}>COSTUM_HUK & PORTAL MSG & RANDOM FROM SERVER{!state.myHook?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,http:!state.http}))}>HTTP.hook{!state.http?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,router:!state.router}))}>Router{!state.router?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,lazy:!state.lazy}))}>React.lazy (SET 3g SLOW for LOADING🕐 ){!state.lazy?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,reactMemo:!state.reactMemo}))}>React.memo{!state.reactMemo?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,context:!state.context}))}>Context{!state.context?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,reducer:!state.reducer}))}>Reducer{!state.reducer?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,hoc:!state.hoc}))}>HOC{!state.hoc?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,hoc2:!state.hoc2}))}>HOC2{!state.hoc2?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,tgc:!state.tgc}))}>React Transition Group{!state.tgc?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,formik:!state.formik}))}>Formik-useFormik{!state.formik?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,formik2:!state.formik2}))}>Formik-Component{!state.formik2?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,helmet:!state.helmet}))}>Helmet{!state.helmet?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,react18:!state.react18}))}>React 18-updates{!state.react18?'❌':'✅'}</button>
    <button onClick={()=>setState(state=>({...state,trans:!state.trans}))}>React-Transition-Group{!state.trans?'❌':'✅'}</button>
    </div>
    </CSSTransition>
  
    
    </div>
    <div className='Main'>
    {state.counter&&<Suspense fallback={<h1>Loading 🚭</h1>}> <Counter/></Suspense>}
    {state.exchange&&<Exchange/>}
    {state.callback&&<Callback/>}
    {state.memo&&<Memo/>}
    {state.ref&&<Ref/>}
    {state.clientrect&&<ClientRect/>}
    {state.myHook&&<UserHuk/>}
    {state.http&&<HTTP/>}
    {state.router&&<MyRouter/>}
    {state.reactMemo&&<ReactMemo/>}
    {state.lazy&&<Suspense fallback={<h1>Loading 🚭</h1>}><Lazy/></Suspense>}    
    {state.context && <Context/>}
    {state.reducer && <Reducer/>}
    {state.hoc && <Hoc/>}
    {state.hoc2 && <Hoc2/>}
    {state.tgc && <Tgc/>}
    {state.formik && <FormikComp/>}
    {state.formik2 && <Formik2/>}
    {state.helmet && <ReactHelmet/>}
    {state.react18 && <Suspense fallback={<h1>L⏱AD🕯NG</h1>}><ReactLazy/></Suspense>}
    {state.trans && <ReactTransition/>}
    </div>
     
    
  </div>
)

}

export default App;
