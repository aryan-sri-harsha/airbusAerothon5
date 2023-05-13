import React, { useState, useEffect,useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import {Protected} from './data';

function Dashboard() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const [logged,Setlogged]= useContext(Protected);
  const variable = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/aircraftParts/Condition/Used");
    const data = await response.json();
    setData(data);
  };
  function logout(){
    history.push("/");
    Setlogged(false);
}
  return (
    <div className="dashboard-container">
        <Navbar bg="light" expand="lg">
<Navbar.Brand href="#">SKY CYCLE</Navbar.Brand>
    <Nav> 
    <Button onClick={logout} variant="success">Logout </Button>
    </Nav>
    
    <Nav>
    {/* {variable.userName} */}
    </Nav>
</Navbar>
      {data.map((item) => (
        <Card key={item._id} className="card-container">
          {/* <Card.Img variant="top" src={item.image} /> */}
          <Card.Body>
            <Card.Title>{item.PartName}</Card.Title>
            <Card.Text>{item.MaterialComposition}</Card.Text>
            <Link to={`/product/${item._id}`}>
              <Button variant="primary">View Parts</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Dashboard;