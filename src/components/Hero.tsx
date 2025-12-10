'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import '../app/hero.css'
import '../app/animate.css'
import { HighlightButton } from '.'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero hero-slider-layout">
      <div className="hero-slide">
        {/* Background Image */}
        <div className="hero-slider-image">
          <Image
            src="/hero-bg.jpg"
            alt="Modern Corporate Buildings"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        {/* Content Container */}
        <div className="hero-content">
          {/* Main Heading with fadeInUp animation */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-wide ${isLoaded ? 'animated fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}>
            Empowering Your Business with{' '}
            <span className="block">
              AI, Cloud & Digital Transformation
            </span>
          </h1>

          {/* Description with fadeInUp animation and delay */}
          <p className={`text-base md:text-lg lg:text-xl text-white/95 mb-12 max-w-5xl mx-auto leading-relaxed font-normal ${isLoaded ? 'animated fadeInUp' : 'opacity-0'}`}
             style={{ animationDelay: '0.6s' }}>
            Maximize the value of your cloud investment by driving digital engagement and delivering exceptional experiences that set your business apart. Foster innovation, enhance customer interactions, and accelerate growth with cutting-edge cloud solutions.
          </p>

          {/* CTA Button with fadeInUp animation and longer delay */}
          <div className={`flex justify-center ${isLoaded ? 'animated fadeInUp' : 'opacity-0'}`}
               style={{ animationDelay: '0.9s' }}>
            <HighlightButton>Talk To Us</HighlightButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero