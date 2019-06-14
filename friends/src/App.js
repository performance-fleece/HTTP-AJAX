import React from "react";
import { Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import "./App.css";
import FriendsList from "./components/FriendsList";
import FriendInput from './components/FriendInput';
import Friend from "./components/Friend";

class App extends React.Component {
  

  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="list-wrapper">
            <Route exact path="/" component={FriendsList} />
            <Link to="/add">
              <button>Add Friend</button>
            </Link>
            <Route exact path="/add" component={FriendInput} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
