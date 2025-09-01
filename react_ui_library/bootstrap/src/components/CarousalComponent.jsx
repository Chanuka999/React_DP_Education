import { Carousel, Image } from "react-bootstrap";

const CarousalComponent = () => {
  return (
    <Carousel fade slide={true}>
      <Carousel.Item>
        <Image
          style={{ height: "500px" }}
          src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg"
        />
        <Carousel.Caption>
          <h2 style={{ color: "#000", fontSize: "48px" }}>Chanuka</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          style={{ height: "500px" }}
          src="https://images.pexels.com/photos/12249454/pexels-photo-12249454.jpeg"
        />
        <Carousel.Caption>
          <h2 style={{ color: "#000", fontSize: "48px" }}>Chanuka</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          style={{ height: "500px" }}
          src="https://images.pexels.com/photos/7813161/pexels-photo-7813161.jpeg"
        />
        <Carousel.Caption>
          <h2 style={{ color: "#000", fontSize: "48px" }}>Chanuka</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          style={{ height: "500px" }}
          src="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg"
        />
        <Carousel.Caption>
          <h2 style={{ color: "#000", fontSize: "48px" }}>Chanuka</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarousalComponent;
