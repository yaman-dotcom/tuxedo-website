import heroImage from '../../assets/home page sources/hero image edited 1.png'
import './home styling/hero section.css'

import './home styling/hero section 1100px.css'
import './home styling/hero section 1340px.css'


function HeroSection(){

    return(
        <>
        <div className='hero-section'>
            <img className='hero-image' src={heroImage}/>
            <div className='hero-info-container'>
            <h1 className='hero-title'>
                Get What You Deserve
            </h1>
            <p className='hero-paragraph'>
            with white you will get the best suits  
            </p>
            <div className='hero-buttons-container'>
                <button className='main-button'>
                    <p className='main-button-paragraph'>
                        Shop Now
                    </p>
                </button>
                <button className='secondary-button'>
                    <p className='secondary-button-paragraph'>
                        Sign up                                                                                                                                                            
                    </p>
                </button>
            </div>
            </div>
        </div>
        
        </>
    )
}
export default HeroSection 