import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const sidebarDash = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: '#ffffff',
        width: 200,
        height: '100vh',
        alignItems: 'flex-start',
        marginRight: '1020px',
        marginBottom: 695,
        borderRight: '1px solid grey',
        position: 'fixed',
      }}
    >
      <Row>
        <Col style={{ marginTop: 20, marginLeft: 15 }}>
          <span
            style={{
              color: '#8A8A8A',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Dashboard
          </span>
        </Col>
      </Row>
      <Row style={{ marginTop: 27, marginLeft: 5 }}>
        <Col>
          <span
            style={{
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Dashboard
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default sidebarDash;