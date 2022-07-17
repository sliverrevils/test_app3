
import {useState} from 'react'



import Modal,{Block} from '../modal/modal';
import './tgc.css';

const Tgc=()=>{
    const [modal,setModal]=useState(false);
    const [button,setButton]=useState(true);
    const [block,setBlock]=useState(false);


    return (
        <div className='Tgc'>
            <h2>React Transition Group</h2>
            <h4>удобно делать модалки , тк можно поставить параметры unmountOnExit mountOnEnter<br/>
            и скрывать блоки или кнопки  на мамент активации onEnter }
             </h4>
            
            {button&&<button onClick={()=>setModal(true)}>Modal</button>}
            <Modal modal={modal} {...{setButton}} onOff={()=>setModal(false)}> 💖</Modal>
            <Block {...{block,setBlock}}>😸</Block>
        </div>
    )
}

export default Tgc;