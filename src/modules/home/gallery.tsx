import styled from 'styled-components'
import Slider from 'react-slick'
import '@/css/carousel.css'
import wd1 from '@/assets/images/wd1.jpg'
import wd2 from '@/assets/images/wd2.jpg'
import wd3 from '@/assets/images/wd3.jpg'
import wd4 from '@/assets/images/wd4.jpg'
import wd5 from '@/assets/images/wd5.jpg'
import wd6 from '@/assets/images/wd6.jpg'
import wd7 from '@/assets/images/wd7.jpg'
import wd8 from '@/assets/images/wd8.jpg'
import wd9 from '@/assets/images/wd9.jpg'
import wd10 from '@/assets/images/wd10.jpg'

const images = [wd1, wd2, wd3, wd4, wd5, wd6, wd7, wd8, wd9, wd10]
export function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Wrap>
      <ImageSection>
        <Slider {...settings}>
          {images.map((imgSrc, idx) => {
            return <ItemImage src={imgSrc} alt="sorry." key={idx} />
          })}
        </Slider>
      </ImageSection>
    </Wrap>
  )
}

const Wrap = styled.section`
  padding: 0rem 1.5rem;
  padding: 1rem 0;

  border-bottom: var(--border-S);
`

const ImageSection = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 600px;
  background: transparent;
  div {
    height: inherit;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    flex: 1.3;
    height: 100%;
  }
`

const ItemImage = styled.img`
  height: 100%;
  object-fit: cover;
`
