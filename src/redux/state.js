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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

window.store = store;

export default store;