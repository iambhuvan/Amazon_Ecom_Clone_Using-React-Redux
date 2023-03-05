import React from 'react';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel'
function Carouseli() {
  return <div>
      <Carousel>
                <Carousel.Item interval={2000}>
                    <img  className="pic d-block w-100" src="https://m.media-amazon.com/images/I/61yYX4j5gtL._SX3000_.jpg" alt='' />
                </Carousel.Item >
                <Carousel.Item interval={1500}>
                    <img  className="pic d-block w-100" src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"alt='' />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img  className="pic d-block w-100" src="https://m.media-amazon.com/images/I/617pSVtbf3L._SX3000_.jpg"alt='' />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img  className="pic d-block w-100" src="https://m.media-amazon.com/images/I/817akQ-Qq+L._SX3000_.jpg"alt='' />
                </Carousel.Item>
            </Carousel>
  </div>;
}

export default Carouseli;