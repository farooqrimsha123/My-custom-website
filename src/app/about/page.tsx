import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <section className='hero' style={{backgroundImage: "url('/cosmetic 3.jpg')"}}>
      <Image 
        src="/cosmetic 3.jpg" 
        alt="Cosmetic Product" 
        width={500} 
        height={500} 
        />
      
    

            <div className='about-content'>
                <h2 className='fade-in'>About Us</h2>
                <p>The best cosmetic products are those that combine high-quality ingredients with effective performance. Leading skincare brands like La Mer and Estée Lauder offer luxurious moisturizers and serums that hydrate and rejuvenate the skin, while makeup products from Fenty Beauty and Charlotte Tilbury enhance natural beauty with long-lasting, versatile formulations. For hair care, brands like Olaplex and Kerastase provide transformative treatments that restore and nourish. These products not only deliver visible results but also prioritize skin health, ensuring that beauty routines are both indulgent and effective. </p>
            </div>
        </section>
      
    </div>
  )
}

export default About
