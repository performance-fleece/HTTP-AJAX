import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
    console.log(props.data)
    return (
      <div className="friend-wrapper">
        <li>
          Name: {props.friend.name} Age: {props.friend.age} Email:{" "}
          {props.friend.email}
        </li>
        <button>Delete</button>
      </div>
    );
}



export default Friend;