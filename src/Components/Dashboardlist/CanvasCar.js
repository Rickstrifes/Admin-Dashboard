import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CanvasCar = () => {
    return (

        <Container fluid style={{
            backgroundColor: '#ffffff',
            width: 250,
            height: "100vh",
            alignItems: 'flex-start',
            marginLeft: '70px',
            borderRight: '1px solid grey',
            marginTop: 75,
            position: "fixed"
        }}>
            <Row>
                <Col style={{ marginTop: 20, marginLeft: 15 }}>
                    <span style={{
                        color: "#8A8A8A",
                        fontWeight: 700,
                        fontSize: 14,
                    }}>Cars</span>
                </Col>
            </Row>
            <Row style={{ marginTop: 27, marginLeft: 5 }}>
                <Col>
                    <span style={{
                        fontWeight: 700,
                        fontSize: 14
                    }}>List Car</span>
                </Col>
            </Row>
        </Container>

    )
}

export default CanvasCar