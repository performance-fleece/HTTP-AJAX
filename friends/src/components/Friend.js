import React from 'react';

const Friend = props => {
    console.log(props.data)
    return(
        <li>Name: {props.friend.name} Age: {props.friend.age} Email: {props.friend.email}</li>
    )
}

export default Friend;