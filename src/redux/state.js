import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: 12},
            {id: 2, post: 'Boring post about something boring', likesCount: 3},
            {id: 2, post: 'A lot of work today', likesCount: 7},
            {id: 2, post: 'My first post', likesCount: 11},

        ]
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state;