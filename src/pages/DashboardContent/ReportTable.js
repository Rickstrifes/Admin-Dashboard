import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const ReportTable = () => {
  const [orders, setOrders] = useState([]); // deklarasi state untuk menyimpan data order

  useEffect(() => {
    const url = 'https://bootcamp-rent-cars.herokuapp.com';
    const config = {
      headers: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
      },
    };
    axios
      .get(`${url}/admin/v2/order`, config)
      .then((res) => {
        setOrders(res.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section style={{ height: 800, marginBottom: 100 }}>
      <Table striped bordered style={{ width: 800, marginTop: 200, position: 'absolute' }} className="mb-3">
        <thead>
          <tr>
            <th>No</th>
            <th>User Email</th>
            <th>Car</th>
            <th>Start Rent</th>
            <th>Finish Rent</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.User.email}</td>
              <td>{order.Car !== null ? order.Car.name : 'Car telah dihapus'}</td>
              <td>{order.start_rent_at.substring(0, 10)}</td>
              <td>{order.finish_rent_at.substring(0, 10)}</td>
              <td>{order.total_price}</td>
              <td>{order.Car !== null ? order.Car.category : 'Car telah dihapus'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default ReportTable;
