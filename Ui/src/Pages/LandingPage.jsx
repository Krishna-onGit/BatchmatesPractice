import BigCard from '@/Components/BigCard'
import Features from '@/Components/Features'
import Herosection from '@/Components/Herosection'
import Navbar from '@/Components/Navbar'
import { Spotlight } from '@/Components/ui/spotlight'
import React from 'react'

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full  antialiased bg-black">
      {/* GRID background (absolute, behind content) */}
      <div
        className="pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]
          bg-size-[40px_40px] bg-repeat"
      />

      {/* OPTIONAL dark overlay to get the same immersive darkness */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Spotlight — make sure Spotlight accepts className */}
      <div className='opacity-40'>

      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60 z-20 " fill="white" />
      </div>

      {/* Page content — above the background and overlay */}
      <div className="relative z-30 ">
        <header className="sticky top-0 z-40 w-full px-[25px] backdrop-blur-md bg-black/30">
          <Navbar />
        </header>

        <main>
          <section className="z-10 w-full">
            <Herosection />
          </section>

          <section className="mt-20 z-10 w-full pb-24 px-6">
            <BigCard />
          </section>

          <section className='mt-20 z-10 w-full pb-26 px-6'>
            <Features />
          </section>
        </main>
      </div>
    </div>
  )
}

export default LandingPage
