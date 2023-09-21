import Carousel from '@/components/PopularDestination/Carousel/Carousel'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'
import PopularDestinations from '@/components/PopularDestination/PopularDestination'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <PopularDestinations />
      
    </main>
  )
}
