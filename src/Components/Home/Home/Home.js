import React from 'react';
import AddPeople from '../AddPeople/AddPeople';
import RaftLabsLogo from '../../../assets/images/raftlabs-logo.png';
import TypeAnimation from 'react-type-animation';
import './Home.css'

const Home = () => {
    // const getingData = localStorage.getItem('users')
    // const users = JSON.parse(getingData);
    return (
        <div className='container bg-light'>
            <div className="top-section pt-5" style={{'height':'50px', 'marginBottom':'50px'}}>
                <div className='d-flex justify-content-center align-items-center'>
                    <img style={{'width':'45px','height':'45px' }} src={RaftLabsLogo} alt="RaftLabs Logo" />
                    <TypeAnimation
                    cursor={false}
                    sequence={['RaftLabs', 5000, '']}
                    wrapper="h2"
                    repeat={Infinity}
                    />
                </div>

                {/* <h2 className='="mt-5'>
                    <span className='logo-text'>RaftLabs</span>
                </h2> */}
            </div>
            {/* <TypeAnimation
                cursor={false}
                sequence={['ReactJS Developer Test', 5000, '']}
                wrapper="h2"
                repeat={Infinity}
             /> */}

             <h2 className='my-2' style={{'color':'orange'}}>ReactJS Developer Test</h2>
            
            <AddPeople></AddPeople>
        </div>
    );
};

export default Home;