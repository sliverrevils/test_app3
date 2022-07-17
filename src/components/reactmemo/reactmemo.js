

import { useState ,memo, useRef, useEffect, Component, useCallback} from 'react';
import './reactmemo.css';
//let render=0;

//----------------------FUNCTION1
// оборачиваем компонент в мемо для мемонизации компонента, рерэндринг будет только с новыми пропсами
const ViewState = memo(props => { 
    console.log('RENDER');
    const render = useRef(0);
   // props.func();
    useEffect(() => render.current++);
    return (
        <div style={{backgroundColor:'lightgray',color:'white'}}> 
                <h1>memo(fuction 1)//props - объект</h1>
            <h4 style={{color:'tomato'}}>* Компонент обдернут в memo , рэндринг только при получении новых props <br/> * Если в props не примитивы , вторым параметром пишем функцию сравнения</h4>           
            <h3>Login : {props.data?.name || 'none'}, Password : {props.data?.pass || 'none'}</h3>
            <p> 👉RENDER : <b style={{color:'tomato'}}>{render.current} 👈</b></p>
        </div>
    )                             //функция сравнения многоуровневых пропсов 
},(prevProps,nextProps)=>prevProps.data.name===nextProps.data.name&&prevProps.data.pass===nextProps.data.pass); 


//------------------FUNCTION2
const ViewState2 = memo(props => { 
    console.log('RENDER');
    const render = useRef(0);
    //props.func();
    useEffect(() => render.current++);
    return (
        <div style={{backgroundColor:'lightgray',color:'white'}}> 
                <h1>memo(function 2 )//props - примитивы</h1>
            <h4 style={{color:'tomato'}}>* - в props функции не сравниваются , для этого создаем вторым параметром функцию сравнения и  выборочно сравниваем там, либо оборачиваем функцию в useCallback</h4>           
            <button onClick={()=>props.func()}>Переданная функция обернутая в useCallback</button>
            <h3>Login : {props.name || 'none'}, Password : {props.pass || 'none'}</h3>
            <p> 👉RENDER : <b style={{color:'tomato'}}>{render.current} 👈</b></p>
        </div>
    )                             
}); 



//-----------------------CLASS
class ViewStateClass extends Component{
    renderCalc=1;
    //жизненный цикл контроля обновления 
    shouldComponentUpdate(nextProps){ 
        //(возвращаем true - обновляется, false - нет)
        return !(this.props.data.name===nextProps.data.name&&this.props.data.pass===nextProps.data.pass); 
    }

    componentDidUpdate(){
        this.renderCalc++;
    }
    render(){        
        return(
            <div style={{backgroundColor:'lightgreen'}}>
                <h1>CLASS</h1>
                <h4>shouldComponentUpdate(nextProps) - жизненный цикл который отвечает за обновление (возвращает bool)</h4>
                <h3 style={{color:'white'}}>Login:{this.props.data.name}, PAss : {this.props.data.pass}</h3>
                <h2> 👉RENDER : {this.renderCalc}👈</h2>
            </div>
        )
    }
}

const ReactMemo=()=>{      
    const [state,setState]=useState({});
    const form=useRef(); 

    const onSubmit=e=>{
        e.preventDefault();
        console.dir(form.current);
        setState({name:form.current[0].value,pass:form.current[1].value});
    }

    const testFunc=useCallback(()=>alert('Hi!'),[]);

    return(
        <div className='Reactmemo'>           
            <h1><mark>React.memo</mark></h1><h3>(помогает не допускать повторных(лишних) рендеров при отсутствии изменения  данных (props) в компонентов которые отображают данные)</h3>            
            {/* <ViewState name={state.name} pass={state.pass}/> */}
            <ViewStateClass data={state}/>
            <ViewState data={state} />
            <ViewState2 name={state.name} pass={state.pass} func={testFunc} />
                <form ref={form} style={{border:'1px solid black'}}>
                    <h2>Login <input type="text"  /></h2> 
                    <h2>Password <input type="text" /></h2> 
                    <button onClick={onSubmit}>SEND DATA TO VIEW IN COMPONENT</button>
                </form>
        </div>
    )
}



export default ReactMemo;