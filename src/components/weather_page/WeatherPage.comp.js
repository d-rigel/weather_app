import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./weatherPage.css";

export const WeatherPage = ({
  cityName,
  tempCelsius,
  temp_max,
  temp_min,
  description,
}) => {
  return (
    <div className="weather-Page__container">
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="weather-page__city">{cityName}</h1>
            <h5 className="py-5">
              <i className="wi wi-day-fog display-1"></i>
            </h5>

            {/* Get temperature */}
            <h1 className="py-3">{tempCelsius}&deg;</h1>
            {/* show min and max temp */}

            <h1 className="py-3">
              {temp_min}&deg;, {temp_max}&deg;
            </h1>
            {/* weather desc */}
            <h4 className="py-3">{description}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
