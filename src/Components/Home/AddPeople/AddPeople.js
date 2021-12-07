import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddPeople.css'

const AddPeople = () => {

    const [usersData, setUsersData] = useState([]);
    const [data, setData] = useState([])

    const { register, handleSubmit } = useForm();
    const onSubmit = d => {
        const newData = [...data, d];
        setData(newData);
        return newData;
    };
    
    localStorage.setItem( 'users', JSON.stringify([data]))
   
    // const newUsers = {...data, }
    

    console.log(data)
    const getingData = localStorage.getItem('users')
    const users = JSON.parse(getingData);
    console.log(users[0])
    return (
        <div>
            <h2>Add People</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("fullName", { required: true, maxLength: 50 })} placeholder="First name" />
                <input {...register("desc", { required: true, maxLength: 50 })} placeholder="Describe user" />
                <input type="submit" />
            </form>

            <div className="users-container">
                
                {
                    users[0].map(user => <div key={user.fullName}>
                        <p>{user.fullName}</p>
                        <p>{user.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AddPeople;