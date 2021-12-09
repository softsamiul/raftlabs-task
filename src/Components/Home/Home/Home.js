import React from 'react';
import AddPeople from '../AddPeople/AddPeople';
import RaftLabsLogo from '../../../assets/images/raftlabs-logo.png';
import './Home.css'

const Home = () => {
    const getingData = localStorage.getItem('users')
    const users = JSON.parse(getingData);
    return (
        <div>
            <div className="top-section d-flex justify-content-center align-items-center mt-4">
                <img style={{'width':'45px','height':'45px' }} src={RaftLabsLogo} alt="RaftLabs Logo" />
                <h2 className='="mt-5'>
                    <span className='logo-text'>RaftLabs</span>
                </h2>
            </div>
            <h2 className='mt-2'>ReactJS Developer Test</h2>
            
            <AddPeople></AddPeople>
        </div>
    );
};

export default Home;