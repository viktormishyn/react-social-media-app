import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {dialoguesPage: state.dialoguesPage}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => dispatch(sendMessageActionCreator(body)),
        sendMessage: () => dispatch(updateNewMessageBodyActionCreator())
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer;