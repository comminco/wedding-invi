import ViewContainer from '@/modules/common/viewContainer'
import { MainImage } from '@/modules/home/mainImage'
import { Intro } from '@/modules/home/intro'
import { Map } from '@/modules/home/map'
import { Parking } from '@/modules/home/parking'
import { Dining } from '@/modules/home/dining'
import { Money } from '@/modules/home/money'
import { Dangbu } from '@/modules/home/dangbu'
import { Gallery } from '@/modules/home/gallery'

function Home() {
  return (
    <ViewContainer>
      <MainImage />
      <Intro />
      <Map />
      {/* <Parking /> */}
      <Dining />
      <Dangbu />
      <Money />
      <Gallery />
    </ViewContainer>
  )
}

export default Home
