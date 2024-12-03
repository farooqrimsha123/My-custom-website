import React from 'react'


const Cosmetic = () => {
const productData = [
  { id:1 , name: 'Primer', price:'1500', description:'best primer and super-thin , silky and invisible balm', image:'/primer.jpg'},
  { id:2 , name: 'Concealer', price:'1200', description:'best concealer with best result', image:'/concealer 2.jpg'},
  { id:3 , name: 'Eyeshades kit', price:'1200', description:'best color shades for best look', image:'/eye shadows.jpg'},
  { id:4 , name: 'Lipstick', price:'300', description:'creamy texture or a weightless matte finish', image:'/lipsticks.jpg'},
  { id:5 , name: 'Face powder', price:'1000', description:'mattify the skin to a certain degree  ', image:'/F P.jpg'},
  { id:6 , name: 'Nail polish', price:'500', description:'best quality , durability and variety of shades', image:'nail paint.jpg'},

]
  return (
    <div>
      <div className='products'>
      {productData.map((product) => (
        <div key = {product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className='price'>${product.price}</div>
          <button> Add to Cart </button>
        </div>  

      ))}
      </div>
    </div>
  )
}

export default Cosmetic
