import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";

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

    let dialoguesData = [
        {id: 1, name: 'Ben'},
        {id: 2, name: 'George'},
        {id: 3, name: 'Paul'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Mary'},
        {id: 6, name: 'Diana'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi there!!!'},
        {id: 2, message: 'What\'s up'},
        {id: 3, message: 'I\'m tired :=(((('},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Is anyone here??'},
        {id: 6, message: 'cool man, I didn\'t see it\'s coming'},
    ]

    return (
        <div className={s.dialogues}>
            <div className={s.dialogueItems}>
                <DialogueItem name={dialoguesData[0].name} id={dialoguesData[0].id}/>
                <DialogueItem name={dialoguesData[1].name} id={dialoguesData[1].id}/>
                <DialogueItem name={dialoguesData[2].name} id={dialoguesData[2].id}/>
                <DialogueItem name={dialoguesData[3].name} id={dialoguesData[3].id}/>
                <DialogueItem name={dialoguesData[4].name} id={dialoguesData[4].id}/>
                <DialogueItem name={dialoguesData[5].name} id={dialoguesData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
    );
}

export default Dialogues;