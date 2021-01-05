import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom"

const DialogueItem = (props) => {
    let path = "/dialogues/" + props.id;

    return (
        <div className={s.dialogue + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogues = (props) => {

    let dialoguesElements = props.dialogues.map(d => (<DialogueItem name={d.name} id={d.id}/>))
    let messagesElements = props.messages.map(m => (<Message message={m.message}/>))

    return (
        <div className={s.dialogues}>
            <div className={s.dialogueItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogues;