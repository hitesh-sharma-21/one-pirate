import React from 'react'
import './HeroSection.css';
import HeadingComponent from '../reUsableComponents/HeadingComponent';
import ArrowPic from '../../assests/arrow.png'
function HeroSection(props) {
    return (
        <>      <div className="hero-section ">
            {/* <div className="hero-title text-white">
                <h1>UPGRADE YOUR SUNDAYS</h1>
                <div className="line"></div>
            </div> */}
            <HeadingComponent title="UPGRADE YOUR SUNDAYS" color='white'/>

            <div className="hero-content text-white">
                <p >Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</p>
                <button className='btn bg-red text-white'>Register</button>
                <p >Discover the experience</p>
                <img src={ArrowPic} alt="" />
            </div>

        </div>
        </>
    )
}

export default HeroSection