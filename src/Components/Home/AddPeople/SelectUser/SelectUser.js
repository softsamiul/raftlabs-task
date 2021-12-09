import React, { useState } from 'react';
import { useForm } from "react-hook-form";



const SelectUser = ({users}) => {

    const [selectUsers, setSelectUsers] = useState([]);
    console.log(selectUsers)
    const {register, handleSubmit} = useForm();
    const onSubmit = d => setSelectUsers(d);

    const newUsers = users[0];

    const task1 = newUsers?.find(element => element.fullName === selectUsers.user1);
    const task2 = newUsers?.find(element => element.fullName === selectUsers.user2);

    if(task1){

        if(task1?.friend){
            const newFriends =  [...task1?.friend, selectUsers?.user2]
            task1.friend = newFriends;
        }else{
            task1.friend = [selectUsers?.user2];
        }

        localStorage.setItem( 'users', JSON.stringify(users[0]))
    }
    
    if(task2){
        if(task2?.friend){
            const newFriends =  [...task2?.friend, selectUsers?.user1]
            task2.friend = newFriends;
        }else{
            task2.friend = [selectUsers?.user1];
        }

        localStorage.setItem( 'users', JSON.stringify(users[0]))
    }


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

export default SelectUser;