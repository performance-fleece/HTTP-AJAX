import React from 'react';

const FriendInput = props => {
    return (
        <div className="friend-input">
            <div>Add Friend</div>
            <form>
                <input type="text" name="name" placeholder="Name..." />
                <input type="number" name="age" placeholder="Age..." />
                <input type="text" name="email" placeholder="Email..." />
            </form>
        </div>
    )
}

export default FriendInput;