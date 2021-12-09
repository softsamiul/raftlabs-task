import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';



const SelectUser = ({users}) => {

    const [connectedData, setConnectedData] = useState([]);
    console.log(connectedData)
    const {register, handleSubmit} = useForm();
    const onSubmit = connectedData => {
        setConnectedData(connectedData)

        if(connectedData){
            Swal.fire(`${connectedData.user1} and ${connectedData.user2} are ${connectedData.relationshipType} now`)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    };

    const newUsers = users[0];

    const task1 = newUsers?.find(element => element.fullName === connectedData.user1);
    const task2 = newUsers?.find(element => element.fullName === connectedData.user2);

    if(task1){

        if(task1?.friend){
            const newFriends =  [...task1?.friend, connectedData?.user2]
            task1.friend = newFriends;
        }else{
            task1.friend = [connectedData?.user2];
        }

        localStorage.setItem( 'users', JSON.stringify(users[0]))
    }
    
    if(task2){
        if(task2?.friend){
            const newFriends =  [...task2?.friend, connectedData?.user1]
            task2.friend = newFriends;
        }else{
            task2.friend = [connectedData?.user1];
        }

        localStorage.setItem( 'users', JSON.stringify(users[0]))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} >  
            <div className='d-flex justify-content-center'>
                <div>
                    <label htmlFor="user1" className="fw-bold">Select user 1:</label><br />
                    <select id="user1" name="user1" {...register('user1')} className='px-2 py-1 select-option-width'>
                        <option value="select">Select</option>
                        {users[0]?.map(user => <option key={user.fullName} value={user.fullName}>{user.fullName}</option>)}
                    </select>
                </div>
                <div className='mx-3'>
                    <label htmlFor="relationshipType" className="fw-bold">Relation:</label> <br />
                    <select id="relationshipType" name="relationshipType" {...register('relationshipType')} className='px-2 py-1 select-option-width'>
                        <option value="friend">Friend</option>
                    </select>
                </div>

                <div className=''>
                    <label htmlFor="user1" className="fw-bold">Select user 2:</label> <br />
                    <select id="user1" name="user2" {...register('user2')} className='px-2 py-1 select-option-width'>
                        <option value="select">Select</option>
                        {users[0]?.map(user => <option key={user.fullName} value={user.fullName}>{user.fullName}</option>)}
                    </select>
                </div>
            </div>
            <input type="submit" value="Connect" className='my-3' />
        </form> 
    );
};

export default SelectUser;