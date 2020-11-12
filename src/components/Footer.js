import React from 'react'
import './Footer.css'
import {Container, Row, Col} from 'react-bootstrap';

function Footer() {
    return (
        <Container>
            <Row>
                <Col className="footer">
                    <a href='#'><i class="fab fa-facebook-square fa-2x"></i></a>
                    <a href='#'><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="#"><i class="fab fa-linkedin fa-2x"></i></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
