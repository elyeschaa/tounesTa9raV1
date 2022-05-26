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
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/283553236_979961486018985_588407395168411562_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=v-_mzLVfjDIAX81nAxz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIAWRV4z7f-g99qohfBI36OtC2wOM7jZ5uirFzKaN46iA&oe=62B524AC"
          height="450px"
        />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/284064103_532692271823334_6046583991958491233_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ftsF1o1-zOkAX9OQ9FI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLCa4K9AjgOEv0PdGiSzK0h1ry5j_v2_MwNxw839r4nGw&oe=62B51A68"
          height="450px"
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/282285055_553478489509665_487695152365221418_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=MkSPolvY9FgAX_NyASH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKtMrqsNAznqCYAnFeCBpjDxGCXscSyInSYko4VpA5Ppg&oe=62B37885"
          height="450px"
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Carrousel;
