import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CheckRelatonship = ({users}) => {
    const [selectUsers, setSelectUsers] = useState([]);
    console.log(selectUsers)
    const {register, handleSubmit} = useForm();
    const onSubmit = d => setSelectUsers(d);

    console.log(selectUsers)

    const user1 = selectUsers.user1;
    const user2 = selectUsers.user2;

    console.log(user1, user2)
    const user1Details = users[0].filter(element => element.fullName === user1);
    const user2Details = users[0].filter(element => element.fullName === user2);

    const user1Friend = user1Details[0]?.friend;
    const user2Friend = user2Details[0]?.friend;

    const matchedFriend = user1Friend?.find(element => user2Friend.includes(element));
    console.log(matchedFriend)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>  
            <div>
                <label htmlFor="user1">Select user:</label>
                <select id="user1" name="user1" {...register('user1')}>
                    <option value="select">Select</option>
                    {users[0]?.map(user => <option key={user.fullName} value={user.fullName}>{user.fullName}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="relationshipType">Tyoe Of Relation:</label>
                <select id="relationshipType" name="relationshipType" {...register('relationshipType')}>
                    <option value="friend">Friend</option>
                </select>
            </div>

            <div>
                <label htmlFor="user1">Select user:</label>
                <select id="user1" name="user2" {...register('user2')}>
                    <option value="select">Select</option>
                    {users[0]?.map(user => <option key={user.fullName} value={user.fullName}>{user.fullName}</option>)}
                </select>
            </div>
            <input type="submit" />
        </form> 
    );
};

export default CheckRelatonship;