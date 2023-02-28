import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Canvas = () => {
    return (
        <Container fluid style={{
            backgroundColor: '#ffffff',
            width: 250,
            height: "100vh",
            alignItems: 'flex-start',
            marginLeft: '70px',
            borderRight: '1px solid grey',
            marginTop: 75
        }}>
            <Row>
                <Col>
                    <span style={{ marginTop: 100, }}>Dashboard</span>
                </Col>
            </Row>
        </Container>
    )
}

export default Canvas;

