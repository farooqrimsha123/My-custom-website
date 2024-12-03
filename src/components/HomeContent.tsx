import React from 'react'
import Image from 'next/image'
const HomeContent = () => {
  return (
    <div>
      <section className='hero' style={{backgroundImage: "url('/cosmetic 2.jpg')"}}>
      <Image 
         src="/cosmetic 2.jpg" 
        alt="Cosmetic Product" 
        width={500} 
        height={500} 
        />

    <div>
        <h1 className='fade-in'> Welcome To Cosmetic World</h1>
        <p>Your one-stop shop for the best cosmetic</p>
        <button>Shop Now</button>
    </div>
    </section>   
    </div>
  )
}

export default HomeContent