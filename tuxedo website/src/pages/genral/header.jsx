import './style/header.css'
import './style/header 1340px.css'
import './style/header 1100.css'
import './style/header 920px.css'

import React from 'react'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header({textColor}){
  let [width,setWidth]=useState(window.outerWidth)
  let color
  textColor==undefined?color="white":color=textColor;

  useEffect(()=>{
    const handelResize=()=>{
        setWidth(window.outerWidth)
    }
    window.addEventListener("resize", handelResize)
    return()=>{
        window.removeEventListener("resize",handelResize)
    }
},[])
let  [opened,setOpened]=useState(false)
const changeTheOpened = () => {
    setOpened(prev => {
        const newState = !prev; 

        if (newState) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = ''; 
        }

        return newState;
    });
};

    return(
        <>
        <div className='header-container'> 
        <div className='header-logo-container'>
         <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4176 2.23047L24.6108 4.72999L29.4176 6.46043V2.23047Z" fill="#3C442B" stroke="#3C442B" stroke-width="2"/>
            <path d="M16.9198 2.23047L21.7266 4.72999L16.9198 6.46043V2.23047Z" fill="#3C442B" stroke="#3C442B" stroke-width="2"/>
            <path d="M38.0598 16.418L37.1961 17.0441L37.8768 17.8656L42.8538 23.8723C42.8047 23.9202 42.7532 23.9708 42.6994 24.024C42.1529 24.5644 41.3631 25.3789 40.3753 26.4887C38.3997 28.7082 35.6321 32.1084 32.4338 36.8574C30.5383 39.6719 29.0974 42.4843 28.0073 45.0547C28.1598 43.7072 28.3212 42.2941 28.4885 40.8475C29.4509 32.5226 30.6012 23.1329 31.3644 18.7448C32.12 14.4 33.4942 9.9402 34.6871 6.55218C35.2824 4.86159 35.8299 3.44516 36.2282 2.45257C36.2464 2.40706 36.2644 2.36245 36.282 2.31874L44.8354 11.5057L38.0598 16.418Z" stroke="#3C442B" stroke-width="2"/>
            <path d="M8.27757 16.418L9.14126 17.0441L8.46063 17.8656L3.48362 23.8723C3.53269 23.9202 3.58416 23.9708 3.63799 24.024C4.18452 24.5644 4.97427 25.3789 5.96208 26.4887C7.93774 28.7082 10.7053 32.1084 13.9036 36.8574C15.7991 39.6719 17.24 42.4843 18.3301 45.0547C18.1776 43.7072 18.0162 42.2941 17.8489 40.8475C16.8865 32.5226 15.7362 23.1329 14.973 18.7448C14.2174 14.4 12.8432 9.9402 11.6503 6.55218C11.055 4.86159 10.5075 3.44516 10.1092 2.45257C10.091 2.40706 10.073 2.36245 10.0554 2.31874L1.50204 11.5057L8.27757 16.418Z" stroke="#3C442B" stroke-width="2"/>
         </svg>
        </div>

         <div className='header-links-container'
        style={{
            display: width>920 ? 'flex' :'none',
         }}
         >
                <ul>
                    <a className='header-link' href="/"><p style={{color:textColor}} className='header-link-text'> Home</p></a>
                    <a className='header-link' href="/store"><p style={{color:textColor}} className='header-link-text'>Store</p></a>
                    <a className='header-link' href="/"><p  style={{color:textColor}} className='header-link-text'>Contact us</p></a>
                    <a className='header-link' href="/"><p style={{color:textColor}} className='header-link-text'>Login</p></a>
                    
                </ul>
         </div>

         <div className='header-bag-container'
          style={{
            display: width>920 ? 'flex' :'none',
         }}
         >
         <svg width="47" height="47" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_21_86)">
                <path d="M22.0727 4.71094H28.4069L29.5 31.3224H4.5L5.59326 4.71094H11.9274" stroke={color} stroke-width="2.13" stroke-miterlimit="10"/>
                <path d="M22.073 1.43616V3.97248C22.0695 4.64408 21.8012 5.28717 21.3263 5.76207C20.8514 6.23697 20.2083 6.50531 19.5367 6.5088H14.4641C13.7925 6.50531 13.1494 6.23697 12.6745 5.76207C12.1996 5.28717 11.9312 4.64408 11.9277 3.97248V1.43616H22.073Z" stroke={color} stroke-width="2.13" stroke-miterlimit="10"/>
                </g>
                <defs>
                <clipPath id="clip0_21_86">
                <rect width="34" height="34" fill={color} transform="translate(0 0.379272)"/>
                </clipPath>
                </defs>
         </svg>
         </div>

         <div className='header-bag-container'
         style={{
            display: width<920 ? 'flex' :'none',
         }}
         onClick={()=>changeTheOpened()}
         >
         <svg 
         
         style={{
            visibility:opened?'hidden':'visible',
            position:'absolute'
         }}
         width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 0.75H29M29 11.25H1.5M1.5 22.25H29" stroke="#3C442B" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <svg
        
        style={{
            visibility:opened?'visible':'hidden',
        }}
         width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.37946C0.447715 8.37946 0 8.82717 0 9.37946C0 9.93174 0.447715 10.3795 1 10.3795V8.37946ZM26 9.37946L26.7236 10.0697L27.3921 9.36881L26.713 8.67826L26 9.37946ZM17.6456 16.6892C17.2644 17.0889 17.2794 17.7219 17.679 18.1031C18.0787 18.4843 18.7116 18.4693 19.0928 18.0697L17.6456 16.6892ZM19.0822 0.919408C18.6949 0.525647 18.0618 0.520378 17.668 0.907638C17.2743 1.2949 17.269 1.92804 17.6563 2.3218L19.0822 0.919408ZM25.2764 8.68924L17.6456 16.6892L19.0928 18.0697L26.7236 10.0697L25.2764 8.68924ZM26.713 8.67826L19.0822 0.919408L17.6563 2.3218L25.287 10.0807L26.713 8.67826ZM1 10.3795H13.5V8.37946H1V10.3795ZM13.5 10.3795H26V8.37946H13.5V10.3795Z" fill="#3C442B"/>
        </svg>

         </div>

         <div className="header-menue"
         style={{
            display: opened? 'flex' : 'none',
           
         }}
         >
            <ul className='header-menue-list'>
                <div className='header-link-phone-container'>
                    <a className='header-link-phone'  to="/store"><p className='header-link-text-phone'> Home</p></a>
                </div>
                <div className='header-link-phone-container'>
                    <Link className='header-link-phone' to="/store" onClick={()=>console.log("clicked")}> <p className='header-link-text-phone'>Store</p></Link>
                </div>
                <div className='header-link-phone-container'>
                    <a className='header-link-phone' href="/"><p className='header-link-text-phone'>Contact us</p></a>
                </div>
                <div className='header-link-phone-container'>
                    <a className='header-link-phone' href="/"><p className='header-link-text-phone'>Login</p></a>
                </div>
                <div className='header-link-phone-container'>
                    <a className='header-link-phone' href="/"><p className='header-link-text-phone'>Bag</p></a>
                </div>
            </ul>
         </div>


        </div>
        </>
    )
}
export default Header