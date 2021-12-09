import React from 'react';
import { Card, Col } from 'react-bootstrap';
const SingleUser = ({user}) => {
    const {fullName, role} = user;
    return (
        <Col>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title>{fullName}</Card.Title>
                    <Card.Text>
                        {role}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleUser;