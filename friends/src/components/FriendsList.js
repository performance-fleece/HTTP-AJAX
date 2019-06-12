import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    return (
        <div className='friends-list'>
                    {props.friends.map((friend, i) => 
                        <Friend key={i} friend={friend} />
                    )}

        </div>
    )
};

export default FriendsList;