import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom"
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/state";

const Dialogues = (props) => {

    let dialoguesElements = props.dialoguesPage.dialogues.map(d => (<DialogueItem name={d.name} id={d.id}/>))
    let messagesElements = props.dialoguesPage.messages.map(m => (<Message message={m.message}/>))
    let newMessageBody = props.dialoguesPage.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyActionCreator(body))
    }


    return (
        <div className={s.dialogues}>
            <div className={s.dialogueItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogues;