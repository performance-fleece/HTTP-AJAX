import React from 'react';

const Friend = props => {
    console.log(props.data)
    return(
        <li>{props.friend.name}</li>
    )
}

export default Friend;