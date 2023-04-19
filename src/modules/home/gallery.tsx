import styled from 'styled-components'
import Slider from 'react-slick'
import '@/css/carousel.css'
import wd1 from '@/assets/wedding/wd1.jpg'
import wd2 from '@/assets/wedding/wd2.jpg'
import wd3 from '@/assets/wedding/wd3.jpg'
import wd4 from '@/assets/wedding/wd4.jpg'
import wd5 from '@/assets/wedding/wd5.jpg'
import wd6 from '@/assets/wedding/wd6.jpg'
import wd7 from '@/assets/wedding/wd7.jpg'
import wd8 from '@/assets/wedding/wd8.jpg'
import wd9 from '@/assets/wedding/wd9.jpg'
import wd10 from '@/assets/wedding/wd10.jpg'
import wd11 from '@/assets/wedding/wd11.jpg'
import wd12 from '@/assets/wedding/wd12.jpg'
import wd13 from '@/assets/wedding/wd13.jpg'
import wd14 from '@/assets/wedding/wd14.jpg'
import wd15 from '@/assets/wedding/wd15.jpg'

const images = [
  wd1,
  wd2,
  wd3,
  wd4,
  wd5,
  wd6,
  wd7,
  wd8,
  wd9,
  wd10,
  wd11,
  wd12,
  wd13,
  wd14,
  wd15,
]
export function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <RightArrow />
    </div>
  )
}

function PrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <LeftArrow />
    </div>
  )
}

const LeftArrow = () => {
  return (
    <svg width="24" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#Prev_svg__a)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.113 1 19 2.95 9.035 12 19 21.05 17.113 23 5 12 17.113 1Z"
          fill="#fff"
        ></path>
        <path
          d="m17.292.826-.168-.174-.18.163-12.112 11-.204.185.204.185 12.113 11 .179.163.168-.174 1.888-1.95.18-.186-.192-.173L9.407 12l9.761-8.865.191-.173-.18-.186-1.887-1.95Z"
          stroke="#000"
          stroke-width="0.5"
        ></path>
      </g>
      <defs>
        <filter
          id="Prev_svg__a"
          x="0.256"
          y="0.304"
          width="23.462"
          height="31.392"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3617_40536"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3617_40536"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

const RightArrow = () => {
  return (
    <svg width="24" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#Next_svg__a)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.887 23 5 21.05 14.965 12 5 2.95 6.887 1 19 12 6.887 23Z"
          fill="#fff"
        ></path>
        <path
          d="m6.708 23.174.168.174.18-.163 12.112-11 .204-.185-.204-.185-12.112-11-.18-.163-.168.174-1.888 1.95-.18.186.192.173L14.593 12l-9.761 8.865-.191.173.18.186 1.887 1.95Z"
          stroke="#000"
          stroke-width="0.5"
        ></path>
      </g>
      <defs>
        <filter
          id="Next_svg__a"
          x="0.282"
          y="0.304"
          width="23.462"
          height="31.392"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3617_41384"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_3617_41384"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}

const Wrap = styled.section`
  padding: 0;
  padding-bottom: 2.7rem;
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
  }
`

const ItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  min-height: 500px;
`
