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
  weatherIcon,
}) => {
  return (
    <div className="weather-Page__container">
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="weather-page__city">{cityName}</h1>

            <h5 className="py-5">
              <img
                src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                alt=""
              />
            </h5>

            {/* Get temperature */}
            {tempCelsius ? <h1 className="py-3">{tempCelsius}&deg;</h1> : null}

            {/* show min and max temp */}

            {maxminTemp(temp_min, temp_max)}
            {/* weather desc */}
            <h4 className="py-3">{description}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const maxminTemp = (min, max) => {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
};
