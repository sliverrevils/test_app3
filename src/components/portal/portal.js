import './portal.css';

import  ReactDOM  from "react-dom";


const Message=props=> {
    
    return ReactDOM.createPortal(<div className={props.class} onClick={props.infoClose?()=>props.infoClose():null}>{props.children}</div>,document.body)
};




export default Message;