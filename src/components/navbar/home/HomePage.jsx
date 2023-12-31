import React from 'react'
import HeroSection from './HeroSection'
import iphone from '../../../assets/iphone-14-pro.webp'
import mac from '../../../assets/mac-system-cut.jfif'
import FeaturedProducts from './FeaturedProducts';

const HomePage = () => {
  return (
    <div>
      <HeroSection image={iphone} title="Buy iPhone 14 Pro"
      subtitle="Experience the power of the latest iPhone 14 with a 
      powerful camera."  link="/" />
      
      <FeaturedProducts />
      
      <HeroSection image={mac} title="Build the Ultimate Setup"
      subtitle="You can add Studio Display and color-matched Magic
      accessories to your bag after you configure your Mac mini."  link="/" />
    </div>
  )
}

export default HomePage
