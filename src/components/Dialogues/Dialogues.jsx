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

const Dialogues = () => {

    let dialogues = [
        {id: 1, name: 'Ben'},
        {id: 2, name: 'George'},
        {id: 3, name: 'Paul'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Mary'},
        {id: 6, name: 'Diana'}
    ]

    let messages = [
        {id: 1, message: 'Hi there!!!'},
        {id: 2, message: 'What\'s up'},
        {id: 3, message: 'I\'m tired :=(((('},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Is anyone here??'},
        {id: 6, message: 'cool man, I didn\'t see it\'s coming'},
    ]

    let dialoguesElements = dialogues.map(d => (<DialogueItem name={d.name} id={d.id}/>))
    let messagesElements = messages.map(m => (<Message message={m.message}/>))

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