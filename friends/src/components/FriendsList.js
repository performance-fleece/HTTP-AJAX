import React from 'react';
import Friend from './Friend';
import FriendInput from './FriendInput';

const FriendsList = props => {
    return (
        <div className='friends-container'>
                    {props.friends.map((friend, i) => 
                        <Friend key={i} friend={friend} />
                    )}

            <FriendInput />

        </div>
    )
};

export default FriendsList;