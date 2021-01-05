import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, post: 'Hi, how are you?', likesCount: 12},
    {id: 2, post: 'Boring post about something boring', likesCount: 3},
    {id: 2, post: 'A lot of work today', likesCount: 7},
    {id: 2, post: 'My first post', likesCount: 11},

]

let dialogues = [
    {id: 1, name: 'Ben'},
    {id: 2, name: 'George'},
    {id: 3, name: 'Paul'},
    {id: 4, name: 'Ivan'},
    {id: 5, name: 'Mary'},
    {id: 6, name: 'Diana'}
]

let messages = [
    {id: 1, message: 'Hi there!!!'},
    {id: 2, message: 'What\'s up'},
    {id: 3, message: 'I\'m tired :=(((('},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Is anyone here??'},
    {id: 6, message: 'cool man, I didn\'t see it\'s coming'},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogues={dialogues} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
