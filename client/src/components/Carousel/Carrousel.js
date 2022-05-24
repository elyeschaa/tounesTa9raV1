import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carrousel = () => {
  return (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div>
        <img
          src="https://i.pinimg.com/736x/6d/2a/58/6d2a581393792e13c6a8e46d2ef36c6e.jpg"
          height="450px"
        />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img
          src="https://lesinguliersete.fr/wp-content/uploads/2021/07/Frontignan-Lope%CC%81ration-22Lire-a%CC%80-la-mer22-facilite-lacce%CC%80s-a%CC%80-la-lecture.jpg"
          height="450px"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img
          src="https://citapropo.net/wp-content/uploads/2021/07/citalect1.jpg"
          height="450px"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Carrousel;
