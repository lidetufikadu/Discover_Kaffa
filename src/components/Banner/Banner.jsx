import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import sliderImg from "../../assets/images/ctp.png";
import sliderImg1 from "../../assets/images/ac.jpg";
import "../Banner/banner.css";

const Banner = () => {
  return (
    <section className="slider">
      <Carousel variant="dark">
        <Carousel.Item>
          <img src={sliderImg} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <div className="slider_des" >
              <h5 className="heading" >
                KAFFA<span> BIOSPHERE RESERVE</span>
              </h5>
              {/* <p className="sub_text">
                The Kaffa region is located 460 kilometres southwest of Ethiopia's capital Addis Ababa.
              </p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img src={sliderImg1} className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <div className="slider_des">
              <h5 className="heading">
                 BIRTHPLACE OF WILD COFFEA ARABICA
              </h5>
              {/* <p className="sub_text">
                The Kaffa region is located 460 kilometres southwest of Ethiopia's capital Addis Ababa.
              </p> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
