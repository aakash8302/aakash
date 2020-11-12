import React from 'react';
import vector from '../vector-min.jpg'

import {Row, Col, Container, Image} from 'react-bootstrap'

function HomeScreen() {
    return (
        <Container>
            <Row className="homeScreen">
                <Col md={6}>
                    <h1 className='line anim-typewriter'>I'm Aakash.</h1>
                    <p className="name">I make elegantly professional <strong>web apps</strong> and <strong>websites</strong>. <br/>If you
                    want me to do any one of these for you,  get  in <br /> touch with me here. </p>
                    <button type='button' className="btn btn-primary mr-2">Learn more</button>
                    <button type="button" className="btn btn-outline-primary">Contact</button>
                </Col>
                <Col md={6}>
                    <Image src='https://image.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg' alt='vector' width="100%" />
                </Col>
            </Row>
            
        </Container>
    )
}

export default HomeScreen
