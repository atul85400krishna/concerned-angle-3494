import React from 'react'
import navBarStyles from "./Navbar.modules.css"
export default function Navbar() {
  return (
    <div className='top'>
        <div className='why'>Why Licious?  .</div>
        
        <div className='down'>Dwonload</div>
        
        <div className='apple'>
            <img src="https://www.licious.in/img/rebranding/ios_app_icon.svg" alt="" />
        </div>
        <div className='playstore'>
            <img src="https://www.licious.in/img/rebranding/android_app_icon.svg" alt="" />
      
        
       <div className='left'>
       <div className='fssc'>
            FSSC22000Certification  .
        </div>
        <div className='about'>
            About Us .
        </div>

        <div className='carrer'>
            Careers@Licious . 
        </div>
          
          <div className='contact'>
            <select name="" id="">Contact Us
            <option value="">1800-4190-786</option>
            <option value="">Talkous@licious</option>
            </select>
          </div>
       </div>
       </div>

       <div className='bottom'>
        <div className='pic_licious'>
          <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="" />
        </div>
        <div className='Location'>
          <button>search</button>
        </div>

        <div className='left2'>
        <div className='categories'>
         <img src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" alt="" />

        </div>
        <div className='cate'>
        <h3>Categories</h3>
        </div>
        <div className='login_pic'>
     <img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="" /> 
        </div>
        <div className='login'>
          login
        </div>
        <div className='cart'>
         
          <img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="" />
        </div>
        <div className='cartw'>
          <h3>Cart</h3>
        </div>
       </div>
       </div>
    </div>
  )
}

 


