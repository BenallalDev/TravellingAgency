import Carousel from '@/components/Carousel/Carousel'
import Hero from '@/components/Hero/Hero'
import PopularDestinations from '@/components/PopularDestination/PopularDestination'
import Offers from '@/components/SpecialOffers/Offers'
import Blog from '@/components/Blog/Blog'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <PopularDestinations />
      <Offers />
      <Blog />
    </main>
  )
}
