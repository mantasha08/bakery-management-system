import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p><b>Step into <i>Daisy Delights Bakery</i>, where every bite is a delight. Our passionate bakers craft artisanal bread, pastries, cakes, and desserts using only the finest ingredients. Discover our daily specials, custom orders, and catering services. Treat yourself, share with loved ones, or celebrate life's moments with our sweet creations."
        </b></p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
