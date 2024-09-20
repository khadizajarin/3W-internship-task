
import img1 from './../../assets/img1.jpg';
import img2 from './../../assets/img2.jpg';
import img3 from './../../assets/img3.jpg';
import img4 from './../../assets/img4.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
        <div
          style={{
            padding: "20px"
          }}
        >
          <ul style={{ margin: "0px", display: 'flex', justifyContent: 'center' }}> 
            {dots.map((dot, index) => (
              <li key={index} style={{ margin: '0 0px',color:'blue' }}>{dot}</li>
            ))}
          </ul>
        </div>
      ),
      nextArrow: <></>,
      prevArrow: <></>
  };

  return (
    <div className='w-[22rem] m-auto '>
      <Slider {...settings}>
        <div>
          <img src={img1}  alt="Image 1" style={{ borderRadius: '15px' }}/>
        </div>
        <div>
          <img src={img2}  alt="Image 2" style={{ borderRadius: '15px' }}/>
        </div>
        <div>
          <img src={img3} alt="Image 3" style={{ borderRadius: '15px' }}/>
        </div>
        <div>
          <img src={img4} alt="Image 4" style={{ borderRadius: '15px' }}/>
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
