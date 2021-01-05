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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
