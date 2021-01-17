import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import StoreContext from "../../StoreContext";
import React from "react";

const DialoguesContainer = (props) => {

    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageActionCreator())
    // }
    //
    // let onNewMessageChange = (body) => {
    //     let action = updateNewMessageBodyActionCreator(body)
    //     props.store.dispatch(action)
    // }


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    let onNewMessageChange = (body) => {
                        let action = updateNewMessageBodyActionCreator(body)
                        store.dispatch(action)
                    }
                    return (<Dialogues updateNewMessageBody={onNewMessageChange}
                                       sendMessage={onSendMessageClick}
                                       dialoguesPage={store.getState().dialoguesPage}/>)
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialoguesContainer;