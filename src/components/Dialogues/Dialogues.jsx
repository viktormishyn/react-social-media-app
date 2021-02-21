import s from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom"

const Dialogues = (props) => {

    let dialoguesElements = props.dialoguesPage.dialogues.map(d => (<DialogueItem name={d.name} key={d.id} id={d.id}/>))
    let messagesElements = props.dialoguesPage.messages.map(m => (<Message message={m.message} key={m.id}/>))
    let newMessageBody = props.dialoguesPage.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (props.isAuth === false) return <Redirect to="/login"/>


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