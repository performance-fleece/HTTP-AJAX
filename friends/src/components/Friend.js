import React from 'react';



const Friend = props => {
  const id = props.friend.id;
    return (
      <div className="friend-wrapper">
        <li>
          Name: {props.friend.name} Age: {props.friend.age} Email:{" "}
          {props.friend.email}
        </li>
        <button onClick={() => props.deleteFriend(id)}>Delete</button>
      </div>
    );
}



export default Friend;