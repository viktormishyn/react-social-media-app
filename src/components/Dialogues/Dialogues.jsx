import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom"
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";

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