const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    dialogues: [
        {id: 1, name: 'Ben'},
        {id: 2, name: 'George'},
        {id: 3, name: 'Paul'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Mary'},
        {id: 6, name: 'Diana'}
    ],
    messages: [
        {id: 1, message: 'Hi there!!!'},
        {id: 2, message: 'What\'s up'},
        {id: 3, message: 'I\'m tired :=(((('},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Is anyone here??'},
        {id: 6, message: 'cool man, I didn\'t see it\'s coming'},
    ],
    newMessageBody: ""
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialoguesReducer;