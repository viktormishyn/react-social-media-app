import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogues)

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => dispatch(updateNewMessageBodyActionCreator(body)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialoguesContainer;