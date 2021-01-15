import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 12},
                {id: 2, post: 'Boring post about something boring', likesCount: 3},
                {id: 2, post: 'A lot of work today', likesCount: 7},
                {id: 2, post: 'My first post', likesCount: 11},
            ],
            newPostText: ''
        },
        dialoguesPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

window.store = store;

export default store;