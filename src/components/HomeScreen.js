import React from 'react';
import vector from '../vector-min.jpg'

import {Row, Col, Container, Image} from 'react-bootstrap'

function HomeScreen() {
    return (
        <Container>
            <Row className="homeScreen">
                <Col className="col-1" xs={12} md={12} sm={12} lg={6} xl={6}>
                    <h1 className='line anim-typewriter'>I'm Aakash.</h1>
                    <p className="name">I make elegantly professional <strong>web apps</strong> and <strong>websites</strong>. If you
                    want me to do any one of these for you,  get  in touch with me here. </p>
                    <button type='button' className="btn btn-primary mr-2">Learn more</button>
                    <button type="button" className="btn btn-outline-primary">Contact</button>
                </Col>
                <Col className="col-2" xs={12} md={12} sm={12} lg={6} xl={6}>
                    <Image src='https://image.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg' alt='vector' width="100%" />
                </Col>
            </Row>
            
        </Container>
    )
}

export default HomeScreen
