import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return(
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.bakerylogo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magnam vitae voluptatem commodi assumenda distinctio fugit id iusto rerum animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae hic voluptatibus ab odit, deleniti sunt. Reprehenderit, molestias at. Saepe laboriosam consectetur repellat et corrupti dolores? Tempore earum iusto ratione? Vitae!</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-45556788</li>
                    <li>contact@daisydelights.com</li>
                </ul>
            </div>
        </div>
<hr/>
<p className="footer-copyright">Copyright 2024 @ DaisyDelights.com - All Right Reserved.</p>
    </div>
    )
}

export default Footer