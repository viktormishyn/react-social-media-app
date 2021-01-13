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
            ]
        }
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

    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}


window.store = store;

export default store;