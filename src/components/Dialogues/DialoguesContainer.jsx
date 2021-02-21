import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
        isAuth: state.auth.isAuth
    }
}

let AuthRedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login"/>
    return <Dialogues {...props}/>
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => dispatch(updateNewMessageBodyActionCreator(body)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialoguesContainer;