import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import House from '../../Assets/House.png';
import truk from '../../Assets/truk.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{
      position: "fixed",
      zIndex: 11,
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: "#0D28A6",
      width: 70,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <Container fluid>
        <Row xs={1}>
          <Col className="text-center">
            <Link style={{
              backgroundColor: "#CFD4ED",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              margin: "18px auto"
            }}>
            </Link>
          </Col>
          <Col className="text-center mt-2">
            <Link to="/" className="d-flex flex-column align-items-center"
              style={{ textDecoration: "none" }}>
              <img src={House} alt="House" />
              <span className="mt-1 text-white" style={{
                fontFamily: "Arial",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: 12,
                textAlign: "center",
              }}>Dashboard</span>
            </Link>
          </Col>
          <Col className="text-center mt-3">
            <Link to="/list" className="d-flex flex-column align-items-center"
              style={{ textDecoration: "none" }}>
              <img src={truk} alt="truk" />
              <span className="mt-1 text-white" style={{
                fontFamily: "Arial",
                fontSize: 12,
                textAlign: "center",
                fontWeight: 600
              }}>Cars</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </aside>
  )
}

export default Sidebar;






// <Col>
//             <React.Fragment>
//               <NavLink style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: 10
//               }}>
//                 <img src={House} alt="House" style={{ width: 20, height: 20 }} />
//               </NavLink>
//               <NavLink />
//             </React.Fragment>
//           </Col>