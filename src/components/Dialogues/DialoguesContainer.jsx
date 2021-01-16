import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";

const DialoguesContainer = (props) => {

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyActionCreator(body)
        props.store.dispatch(action)
    }


    return (<Dialogues updateNewMessageBody={onNewMessageChange}
                       sendMessage={onSendMessageClick}
                       dialoguesPage={props.store.getState().dialoguesPage}/>);
}

export default DialoguesContainer;