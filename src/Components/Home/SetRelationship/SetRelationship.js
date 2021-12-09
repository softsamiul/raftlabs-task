
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useUsers from '../../../hooks/useUsers';

const SetRelationship = () => {
    // const [users, setUsers] = useState([]);

    const [selectUsers, setSelectUsers] = useState([]);
    console.log(selectUsers)
    const {register, handleSubmit} = useForm();
    const onSubmit = d => setSelectUsers(d);

    // const getingData = localStorage.getItem('users')
    // const users = JSON.parse(getingData);

    const {users} = useUsers()

    const newUsers = users[0];

    // console.log(newUsers)

    const task1 = newUsers?.find(element => element.fullName === selectUsers.user1);
    const task2 = newUsers?.find(element => element.fullName === selectUsers.user2);

    if(task1){

        if(task1?.friend){
            const newFriends =  [...task1?.friend, selectUsers?.user2]
            task1.friend = newFriends;
        }else{
            task1.friend = [selectUsers?.user2];
        }
    
        if(task2?.friend){
            const newFriends =  [...task2?.friend, selectUsers?.user1]
            task2.friend = newFriends;
        }else{
            task2.friend = [selectUsers?.user1];
        }

        localStorage.setItem( 'users', JSON.stringify(users[0]))
    }

    // console.log(users)
    return (
        <div>
            <h2>Set Relationship</h2>
            <Row xs={1} md={3} className="g-4 w-50 mx-auto my-3" >
                <Col>
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
                        <input type="submit" value="Connect"/>
                    </form>   
                </Col>
            </Row>
        </div>
    );
};

export default SetRelationship;