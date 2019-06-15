import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';
import FriendInput from './FriendInput';
import axios from "axios";


class FriendsList extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      friends: [],
      
      }
    };
  

  componentDidMount() {
    console.log("CDM start");
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log("fetch error", err));
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
        .then(response => {
          console.log(response);
          this.setState({ friends: response.data})
          this.props.history.push('/');
        })
        .catch(err => { console.log(err);
        });
  };


  render() {
    return (
      <div className="friends-container">
        {this.state.friends.map(friend => (
          <Friend key={friend.id} friend={friend} deleteFriend={this.deleteFriend} />
        ))}
        <Link to="/add">
          <button>Add Friend</button>
        </Link>
      </div>
    );
  }
}




export default FriendsList;