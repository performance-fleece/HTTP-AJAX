import React from 'react';
import { Link } from 'react-router-dom';



const Friend = props => {
  const { id, age, name, email } = props.friend;
    return (
      <div className="friend-wrapper">
        <Link>
        <button onClick={() => props.deleteFriend(id)}>Delete</button>

        </Link>
        <Link to={{
          pathname: "/update",
          state: { 
            updateType: "update",
            age: age,
            name: name,
            email: email,
            id: id
          }
        }}
          >
          <button>Update</button>
        </Link>
        
        <li>
          Name: {props.friend.name} Age: {props.friend.age} Email:{" "}
          {props.friend.email}
        </li>
        
      </div>
    );
}



export default Friend;