import './style/header.css'
function Header(){
    
    return(
        <>
        <div className='header-container'> 
        <div className='header-logo-container'>
         <svg width="47" height="57" viewBox="0 0 47 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4176 2.23047L24.6108 4.72999L29.4176 6.46043V2.23047Z" fill="#3C442B" stroke="#3C442B" stroke-width="2"/>
            <path d="M16.9198 2.23047L21.7266 4.72999L16.9198 6.46043V2.23047Z" fill="#3C442B" stroke="#3C442B" stroke-width="2"/>
            <path d="M38.0598 16.418L37.1961 17.0441L37.8768 17.8656L42.8538 23.8723C42.8047 23.9202 42.7532 23.9708 42.6994 24.024C42.1529 24.5644 41.3631 25.3789 40.3753 26.4887C38.3997 28.7082 35.6321 32.1084 32.4338 36.8574C30.5383 39.6719 29.0974 42.4843 28.0073 45.0547C28.1598 43.7072 28.3212 42.2941 28.4885 40.8475C29.4509 32.5226 30.6012 23.1329 31.3644 18.7448C32.12 14.4 33.4942 9.9402 34.6871 6.55218C35.2824 4.86159 35.8299 3.44516 36.2282 2.45257C36.2464 2.40706 36.2644 2.36245 36.282 2.31874L44.8354 11.5057L38.0598 16.418Z" stroke="#3C442B" stroke-width="2"/>
            <path d="M8.27757 16.418L9.14126 17.0441L8.46063 17.8656L3.48362 23.8723C3.53269 23.9202 3.58416 23.9708 3.63799 24.024C4.18452 24.5644 4.97427 25.3789 5.96208 26.4887C7.93774 28.7082 10.7053 32.1084 13.9036 36.8574C15.7991 39.6719 17.24 42.4843 18.3301 45.0547C18.1776 43.7072 18.0162 42.2941 17.8489 40.8475C16.8865 32.5226 15.7362 23.1329 14.973 18.7448C14.2174 14.4 12.8432 9.9402 11.6503 6.55218C11.055 4.86159 10.5075 3.44516 10.1092 2.45257C10.091 2.40706 10.073 2.36245 10.0554 2.31874L1.50204 11.5057L8.27757 16.418Z" stroke="#3C442B" stroke-width="2"/>
         </svg>
        </div>

         <div className='header-links-container'>
                <ul>
                    <a className='header-link' href="/">Home</a>
                    <a className='header-link' href="/">Store</a>
                    <a className='header-link' href="/">Contact Us</a>
                    <a className='header-link' href="/">Login</a>
                    
                </ul>
         </div>

         <div className='header-bag-container'>
         <svg width="47" height="47" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_21_86)">
                <path d="M22.0727 4.71094H28.4069L29.5 31.3224H4.5L5.59326 4.71094H11.9274" stroke="white" stroke-width="2.13" stroke-miterlimit="10"/>
                <path d="M22.073 1.43616V3.97248C22.0695 4.64408 21.8012 5.28717 21.3263 5.76207C20.8514 6.23697 20.2083 6.50531 19.5367 6.5088H14.4641C13.7925 6.50531 13.1494 6.23697 12.6745 5.76207C12.1996 5.28717 11.9312 4.64408 11.9277 3.97248V1.43616H22.073Z" stroke="white" stroke-width="2.13" stroke-miterlimit="10"/>
                </g>
                <defs>
                <clipPath id="clip0_21_86">
                <rect width="34" height="34" fill="white" transform="translate(0 0.379272)"/>
                </clipPath>
                </defs>
         </svg>
         </div>

        </div>
        </>
    )
}
export default Header