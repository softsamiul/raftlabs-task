import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AddPeople from '../AddPeople/AddPeople';
import SetRelationship from '../SetRelationship/SetRelationship';

const Home = () => {
    const getingData = localStorage.getItem('users')
    const users = JSON.parse(getingData);
    console.log(users[0])
    return (
        <div>
            <h2>Home</h2>

            <AddPeople></AddPeople>


            {/* <SetRelationship></SetRelationship> */}
        </div>
    );
};

export default Home;