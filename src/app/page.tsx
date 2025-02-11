"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
// import AuraEffect from "./components/AuraEffect"
import GlitchText from "./components/GlitchText"

const ParticleText = dynamic(() => import("./components/ParticleText"), { ssr: false })

export default function Home() {
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)

  const slides = [
    { id: 1, image: "/placeholder.svg?height=400&width=600", title: "Slide 1" },
    { id: 2, image: "/placeholder.svg?height=400&width=600", title: "Slide 2" },
    { id: 3, image: "/placeholder.svg?height=400&width=600", title: "Slide 3" },
  ]

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center"><GlitchText text="Interactive Carousel"/></h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-auto" />
            <div
              className="absolute inset-0"
              onMouseEnter={() => setHoveredSlide(index)}
              onMouseLeave={() => setHoveredSlide(null)}
            >
              {/* {hoveredSlide === index && <AuraEffect />} */}
            </div>
            {/* <GlitchText text={slide.title} className="absolute bottom-4 left-4 text-2xl" /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-16">
        <ParticleText text="Hover Me" />
      </div>

      {/* <GlitchText text="booy"/> */}
    </main>
  )
}

