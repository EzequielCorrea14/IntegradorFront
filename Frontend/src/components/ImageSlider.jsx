import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const ImageSlider = () => {

const CarouselData = [
  {
    headerText: null,
    subText: null,
    image: 'https://imgur.com/a/mWwOsVk',
  },
  {
    headerText: null,
    subText: null,
    image: 'https://imgur.com/a/fSuEGFE',
  },
  {
    headerText: null,
    subText: null,
    image: 'https://imgur.com/a/fSuEGFE',
  },
  
]
  return    <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
}

export default ImageSlider