import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function InfoPage() {
  const [data, setData] = useState([]);
  const variable = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/aircraftParts/_id/${variable.id}`);
    const data = await response.json();
    setData(data);
  };

  return (
    <Container>
      <h1>Information Page</h1>
      <Row>
        {data.map((item) => (
          <Col key={item._id}>
            <div className="info-card">
              {/* <img src={item.image} alt={item.title} /> */}
              <h2>{item.PartName}</h2>
              <p>{item.MaterialComposition}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default InfoPage;