import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    console.log('CDM start')
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log("fetch error", err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            PlaceHolder

          </p>

          <div className='list-wrapper'>
             <FriendsList friends={this.state.friends} />
            

          </div>
        </header>
      </div>
    );
  }
}



export default App;
