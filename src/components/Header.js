import React from 'react'
import Logo from "../assets/logo.png"
import {PiShoppingBagLight} from 'react-icons/pi'

const Header = () => {
  return (
    <>
      <div>
        <img src={Logo} alt="logo" width={20} />
        <h5>amazon</h5>
      </div> 

      <div>
       <p>Collections</p>
       <p>Brands</p>
       <p>New</p>
       <p>Sales</p>
       <p>ENg</p>
       <input type="search" name="search" id="search" />
       <PiShoppingBagLight/>
      </div>
    </>
  )
}

export default Header