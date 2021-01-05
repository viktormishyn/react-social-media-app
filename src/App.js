import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogues from "./components/Dialogues/Dialogues";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {

    let posts = [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: 'Boring post about something boring', likesCount: 3},
        {id: 2, post: 'A lot of work today', likesCount: 7},
        {id: 2, post: 'My first post', likesCount: 11},

    ]

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogues" render={() => <Dialogues/>}/>
                    <Route path="/profile" render={() => <Profile posts={posts}/>}/>

                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
