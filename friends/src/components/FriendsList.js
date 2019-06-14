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




  render() {
    return (
      <div className="friends-container">
        {this.state.friends.map((friend) => (
          <FriendDetails key={friend.id} friend={friend} />
        ))}

        
      </div>
    );
  }
}

function FriendDetails({ friend }) {
    return (
        <Link to={`/friends/${friend.id}`}>
            <Friend friend={friend} />
        </Link>
    )
}


export default FriendsList;