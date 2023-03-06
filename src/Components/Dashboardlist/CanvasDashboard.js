import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReportTable from '../../pages/DashboardContent/ReportTable';
import BarChart from '../Chart/chartComp';
import Rectangle from '../../Assets/Rectangle9.png';
import Pagination from 'react-bootstrap/Pagination';
import Sidebardash from '../../Components/Sibar/Sidebardash';

const Canvas = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: 1500, backgroundColor: '#E5E5E5' }}>
      <span style={{ display: 'flex', position: 'absolute', marginBottom: 1300, marginRight: 480 }}>Dashboard </span>
      <span style={{ display: 'flex', position: 'absolute', marginBottom: 1300, marginRight: 660, fontWeight: 700 }}>Dashboard &gt; </span>
      <p style={{ display: 'flex', position: 'absolute', marginBottom: 1200, marginRight: 510, fontWeight: 700 }}>Rented Car Data Visualization</p>
      <img src={Rectangle} alt="biru" style={{ display: 'flex', position: 'absolute', marginBottom: 1200, marginRight: 745 }} />
      <span style={{ display: 'flex', position: 'absolute', marginBottom: 1150, marginRight: 700 }}>Month</span>
      <Sidebardash />
      <Row style={{ width: '100%', flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <BarChart />
        </Col>
      </Row>
      <Row style={{ width: '100%', flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left', marginRight: 400 }}>
          <ReportTable />
        </Col>
      </Row>
      <Pagination size="sm" style={{ display: 'flex', position: 'absolute', marginTop: 1100, marginLeft: 1070 }}>
        {items}
      </Pagination>
    </Container>
  );
};

export default Canvas;
