/*import React from 'react'
import './HeroSection.css'
import iphone from '../../../assets/iphone-14-pro.webp'

function HeroSection({title, subtitle, link, image}) {
  return (
    <section className="hero_section">
        <div className="align-center">
            <h2 className="hero-title">
                But iPhone 14 Pro
            </h2>
            <p className="hero-subtitle">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Autem eos quia iusto nostrum quos illum.
            </p>
            <a href="" className="hero_link">Buy Now</a>
        </div>

        <div className="align_center">
            <img src={iphone} alt="" className="hero_image" />
        </div>
    </section>
  )
}

export default HeroSection */



import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, link, image }) => {
    return (
        <section className='hero_section'>
            <div className='align_center'>
                <h2 className='hero_title'>{title}</h2>
                <p className='hero_subtitle'>{subtitle}</p>
                <a href={link} className='hero_link'>
                    Buy Now
                </a>
            </div>

            <div className='align_center'>
                <img src={image} alt='' className='hero_image' />
            </div>
        </section>
    );
};

export default HeroSection;
