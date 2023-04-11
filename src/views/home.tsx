import ViewContainer from '@/modules/common/viewContainer'
import { MainImage } from '@/modules/home/mainImage'
import { Intro } from '@/modules/home/intro'
import { Map } from '@/modules/home/map'
import { Parking } from '@/modules/home/parking'
import { Dining } from '@/modules/home/dining'
import { Order } from '@/modules/home/order'
import { Money } from '@/modules/home/money'

function Home() {
  return (
    <ViewContainer>
      <MainImage />
      <Intro />
      <Map />
      {/* <Parking /> */}
      <Dining />
      <Money />
    </ViewContainer>
  )
}

export default Home
