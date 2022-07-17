
import './transition.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useId, useState } from 'react';
import { v4 as uuid } from 'uuid';

const MyBtn = ({ text,func }) => <button onClick={func}>{text}</button>

const ReactTransition = () => {
    const initState = [
        { 'id': useId(), text: 'first' },
        { 'id': useId(), text: 'second' },
        { 'id': useId(), text: 'therd' },
    ]
    const [list, setList] = useState(initState);


    const addTask=()=>{
        const inText=prompt('Input task');
        if(inText){
            setList(state=>([...state,{'id':Date.now(),text:inText}]))
        }
    }

    return (
        <div>
            <h2>React Transition Group</h2>
            <button onClick={addTask}> Add</button>
            <TransitionGroup className='TranseGroup'>
                {
                    list.map(({ id, text },i) => 
                    (<CSSTransition key={id/* обязательно ID из состояния */} timeout={500} classNames='item'> 
                        <MyBtn text={text} func={()=>setList(state=>state.filter(el=>el.id!==id))}/>
                    </CSSTransition>))
                }
            </TransitionGroup>
        </div>
    )
}



export default ReactTransition;