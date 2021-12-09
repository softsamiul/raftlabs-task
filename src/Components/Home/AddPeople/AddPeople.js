import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useUsers from '../../../hooks/useUsers';
import SetRelationship from '../SetRelationship/SetRelationship';
import './AddPeople.css'
import CheckRelatonship from './CheckRelationship/CheckRelatonship';
import SelectUser from './SelectUser/SelectUser';
import SingleUser from './SingleUser/SingleUser';

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
    
    const getingData = localStorage.getItem('users')
    const users = JSON.parse(getingData);

    // const {users} = useUsers()
    console.log(users[0])


    return (
        <div>
            <h2>Add People</h2>
            {/* People adding form start */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("fullName", { required: true, maxLength: 50 })} placeholder="Enter name" />
                <input {...register("role", { maxLength: 50 })} placeholder="Enter name" defaultValue={users[0]} />
                <input type="submit" />
            </form>

            {/* Added People Showing here */}
            <Row xs={1} md={4} className="g-4 w-75 mx-auto my-3">
                {
                users[0]?.map(user => <SingleUser user={user} key={user.fullName}></SingleUser> )
                }
            </Row>

            {/* Set Relationshio start here */}
            <h2>Set Relationship</h2>
            <Row xs={1} md={3} className="g-4 w-50 mx-auto my-3" >
                <Col>
                    <SelectUser users={users}></SelectUser>
                </Col>
            </Row>


            {/* Check Relationshio start here */}
            <h2>Check Relationship</h2>
            <Row xs={1} md={3} className="g-4 w-50 mx-auto my-3" >
                <Col>
                    <CheckRelatonship users={users}></CheckRelatonship>
                </Col>
            </Row>



            
        </div>
    );
};

export default AddPeople;