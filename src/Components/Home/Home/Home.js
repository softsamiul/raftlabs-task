import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AddPeople from '../AddPeople/AddPeople';

const Home = () => {
    return (
        <div>
            <Navigation />
            <h2>Home</h2>
            <AddPeople></AddPeople>
        </div>
    );
};

export default Home;