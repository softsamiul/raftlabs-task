import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useUsers from '../../../hooks/useUsers';
import SetRelationship from '../SetRelationship/SetRelationship';
import './AddPeople.css'
import CheckRelatonship from './CheckRelationship/CheckRelatonship';
import SelectUser from './SelectUser/SelectUser';
import SingleUser from './SingleUser/SingleUser';

const AddPeople = () => {

    const [usersData, setUsersData] = useState([]);
    const [data, setData] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = d => {
        const newData = [...data, d];
        setData(newData);

        if(newData){
            Swal.fire(`${d.fullName} added successfully!`)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        }
        return newData;
    };
    
    localStorage.setItem( 'users', JSON.stringify([data]))
   
    // const newUsers = {...data, }
    
    const getingData = localStorage.getItem('users')
    const users = JSON.parse(getingData);

    // const {users} = useUsers()
    console.log(users[0])


    return (
        <div className="container">
            {/* Main area start */}
            <Row className="mt-5">
                <Col className='col-md-12'>
                    <h2 className='mb-3'><i className="fas fa-user-plus me-2"></i>Add Users</h2>
                    {/* People adding form start */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("fullName", { required: true, maxLength: 50 })} placeholder="Enter name"  />
                        {/* <p className='text-danger'>{errors.fullName?.type === 'required' && "Full Name is required"}</p> */}
                        <input {...register("role", {required: true, maxLength: 50 })} placeholder="Enter developer role" defaultValue={users[0]} className='mx-2'/>
                        {/* <p>{errors.role?.type === 'required' && "Role is required"}</p> */}
                        <input type="submit" value="Add User"/>
                    </form>
                    <p className='text-danger fw-bold'>{errors.fullName?.type === 'required' && "Full Name is required"}</p>

                    <p className='text-danger fw-bold'>{errors.role?.type === 'required' && "Role is required"}</p>

                    {/* Added People Showing here */}
                    <Row xs={1} md={4} className="g-4 mx-auto my-3">
                        {
                        users[0]?.map(user => <SingleUser user={user} key={user.fullName}></SingleUser> )
                        }
                    </Row>
                </Col>
                {/* Set Relationshio start here */}
                <Col className='="col-md-12 mt-5'>
                    <h2 className='mb-3'><i className="fas fa-people-arrows me-2"></i>Set Relationship</h2>
                    <Row md={12} className="" >
                        <Col>
                            <SelectUser users={users}></SelectUser>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Check Relationshio start here */}
            <div className="mt-5">
                <h2 className='mb-3'><i className="fas fa-check-double me-2"></i>Check Relationship</h2>
                <Row md={12}  className="" >
                    <Col className=''>
                        <CheckRelatonship users={users}></CheckRelatonship>
                    </Col>
                </Row>
            </div>


            
        </div>
    );
};

export default AddPeople;