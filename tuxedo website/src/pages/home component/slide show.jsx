import { Swiper,SwiperSlide } from "swiper/react";
import {  Mousewheel, FreeMode, Keyboard } from 'swiper/modules';

import './home styling/slide show section.css'
import './home styling/slide show section 1340px.css'
import './home styling/slide show section 1100px.css'
import './home styling/slide show section 920px .css'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import card1 from "../../assets/home page sources/Frame 13.png"
import card2 from '../../assets/home page sources/Frame 14.png'
import card5 from '../../assets/home page sources/Frame 15.png'
import card3 from '../../assets/home page sources/Frame 16.png'
import card4 from '../../assets/home page sources/Frame 17.png'
// import "swiper/c";



function SlideShowSection(){

    return(
        <>
            <div className="sh-slider-section-container">
                <div className="sh-title-container">
                    <h2>
                        Be fashionable
                    </h2>
                </div>
                <div className="sh-slider-container">
                    <Swiper
                    modules={[Mousewheel, FreeMode, Keyboard]}
                    direction="horizontal"
                    slidesPerView={10}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    centeredSlides={true}
                    initialSlide={3}
                    autoHeight={true}
                    loop={true}
                    effect="slide"
                    freeMode={{
                        enabled:true,
                        momentumRatio:1,
                    }}
                    keyboard={{
                        enabled:true,
                        onlyInViewport:true,
                        pageUpDown:true
                    }}
                    mousewheel={{
                        sensitivity:1.3,
                        forceToAxis:true
                    }}
                   
                    style={{width:'4000px', height:'500px'}}
                    >
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card5} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sh-card">
                            <img className="sh-img"src={card5} alt="" />
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </>
    )
}
export default  SlideShowSection;