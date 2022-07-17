

import { createRef } from 'react';
import './modal.css';
import { Transition ,CSSTransition} from 'react-transition-group';

const Modal = props => {

    const duration = 500;// ЗАДЕРЖКА АНИМАЦИИ
    const defaultStyle = { //НАЧАЛЬНЫЙ СТИЛЬ  - DISPLAY NONE - НЕ АНИМИРУЕТСЯ !
        transition: `all ${duration}ms ease-in-out`,
        visibility:'hidden',
    }

    const transitionStyles = { // ЭТАПЫ АНИМАЦИИ 
        entering: { opacity: 1, visibility:'visible' },
        entered: { opacity: 1, visibility:'visible' },
        exiting: { opacity: 0, visibility:'hidden' },
        exited: { opacity: 0, visibility:'hidden' }
    };

    //Оборачиваем в Transition колбэк который получает стэйт с текущим сотоянием анимации и возвращаем весь наш JSX компонента 
    //Для переключения анимации надо тоглить стэйт-бул из пропсов 
    //unmountOnExit - удалять и добавлять эелемент в Дом-дереве
    //onEnter & onExit - события на этапах 
    return (
       <Transition in={props.modal} timeout={duration} unmountOnExit mountOnEnter onEnter={()=>{props.setButton(false)}} onExit={()=>{props.setButton(true)}}>
           {state=>(
                <div className='Modal' onClick={e => e.target.classList.contains('Modal') && props.onOff()} style={{...defaultStyle,...transitionStyles[state]}}>
                <div className='ModalWin'>
                    <h2>Modal window  </h2>
                    <button style={{ position: 'absolute', right: 0, top: 0 }} onClick={props.onOff}>❌</button>
                    {props.children}
                </div>
            </div>
           )}
       </Transition>
    )
}

const Modal2 = props => {

    const duration = 3000;// ЗАДЕРЖКА АНИМАЦИИ
 
    //classNames - указываем базавое имя стиля (остальные будут написаны в CSS)
    return (
       <CSSTransition in={props.modal} timeout={duration} unmountOnExit onEnter={()=>{props.setButton(false)}} onExit={()=>{props.setButton(true)}} classNames='modal'>
           
                <div className='Modal' onClick={e => e.target.classList.contains('Modal') && props.onOff()} >
                <div className='ModalWin'>
                    <h2>Modal window  </h2>
                    <button style={{ position: 'absolute', right: 0, top: 0 }} onClick={props.onOff}>❌</button>
                    {props.children}
                </div>
            </div>
           
       </CSSTransition>
    )
}

const Block = props => {
    const {block,setBlock}=props;
    return(<CSSTransition in={block} timeout={500}classNames='block' >
    <div onClick={()=>setBlock(old=>!old)} className='block'>
        {props.children}
    </div>
</CSSTransition>)}

export {Modal2,Block};
export default Modal;