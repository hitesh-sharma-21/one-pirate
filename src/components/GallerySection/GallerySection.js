import React from 'react'
import HeadingComponent from '../reUsableComponents/HeadingComponent';
import swim from '../../assests/swiming.avif';
import msg from '../../assests/msg.avif';
import hiking from '../../assests/hiking.avif';
import tour from '../../assests/tour.avif';
import cooking from '../../assests/cooking.avif';
import shopping from '../../assests/shopping.avif';
import walking from '../../assests/walking.avif';
import fitness from '../../assests/fitness.avif';
import reading from '../../assests/read.avif';
import './GallerySection.css';
function GallerySection() {
  return (
      <>
      <div className="gallery_container">
      <HeadingComponent title='FOR ALL TASTES AND ALL DESIRES'/>
        <div className="gallery">
          <div className="box-gal box1 " style={{backgroundImage:  `url(${swim})`}}>swim</div>

          <div className="box-gal box4 " style={{backgroundImage: `url(${msg})`}}>msg</div>
          <div className="box-gal box3 " style={{backgroundImage: `url(${hiking})`}}>hiking</div>
          <div className="box-gal box2"style={{backgroundImage: `url(${tour})`}}>tour</div>
          <div className="box-gal box6" style={{backgroundImage: `url(${cooking})`}}>cooking</div>
          <div className="box-gal box5" style={{backgroundImage: `url(${shopping})`}}>shopping</div>
          <div className="box-gal box5" style={{backgroundImage: `url(${walking})`}}>walking</div>
          <div className="box-gal box7" style={{backgroundImage: `url(${fitness})`}}>fitness</div>
          <div className="box-gal box7" style={{backgroundImage: `url(${reading})`}}>reading</div>
        </div>
      </div>
      </>
  )
}

export default GallerySection