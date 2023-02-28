import React from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import House from '../../Assets/House.png';
import truk from '../../Assets/truk.png';

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
            <NavLink style={{
              backgroundColor: "#CFD4ED",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              margin: "18px auto"
            }}>
            </NavLink>
          </Col>
          <Col className="text-center mt-2">
            <NavLink className="d-flex flex-column align-items-center">
              <img src={House} alt="House" />
              <span className="mt-1 text-white" style={{
                fontFamily: "Arial",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: 12,
                textAlign: "center"
              }}>Dashboard</span>
            </NavLink>
          </Col>
          <Col className="text-center mt-3">
            <NavLink className="d-flex flex-column align-items-center">
              <img src={truk} alt="truk" />
              <span className="mt-1 text-white" style={{
                fontFamily: "Arial",
                fontSize: 12,
                textAlign: "center",
                fontWeight: 600
              }}>Cars</span>
            </NavLink>
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