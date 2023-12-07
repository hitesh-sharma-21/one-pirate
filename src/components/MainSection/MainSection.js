import React from 'react'
import './MainSection.css';
import pro1 from '../../assests/productValues1.svg';
import pro2 from '../../assests/productValues2.svg';
import pro3 from '../../assests/productValues3.svg';
function MainSection() {
  return (
 
    <div className="main-section">
        <div className="box">
            <img src={pro1} alt="" width="60px" height="50" />
            <h3>THE BEST LUXURY HOTELS</h3>
            <p>From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.</p>
                </div>
        <div className="box">
            <img src={pro2} alt="" width="60px" height="50"/>
            <h3>NEW EXPERIENCES</h3>
            <p>Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike..</p>
        </div>
        <div className="box">
            <img src={pro3} alt="" width="60px" height="50"/>
            <h3>EXCLUSIVE RATES</h3>
            <p>By registering, you will access specially negotiated rates that you will not find anywhere else.</p>
        </div>
    </div>
  )
}

export default MainSection