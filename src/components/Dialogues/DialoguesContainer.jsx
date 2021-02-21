import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => dispatch(updateNewMessageBodyActionCreator(body)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogues)
