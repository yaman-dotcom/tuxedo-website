import './home styling/have a look section.css'
import './home styling/hero section 1340px.css'
import './home styling/have a look section 1100px.css'

import Tuxedo from '../../assets/home page sources/tuxido colored  1.png'
import Tie from '../../assets/home page sources/edited tie 1.png'
import Shoes from '../../assets/home page sources/shoes edited 1.png'

function HaveALookSection(){

    return(
        <>
        <div className='have-a-look-section'>
            <div className='HAL-title-container'>
                <h2>
                Have a look
                </h2>
            </div>
            <div className='HAL-gallery-container'>
                <div className='HAL-tuxedo'>
                    <img className='HAl-gallery-image' src={Tuxedo}  />
                    <div className='HAL-text-container'>
                        <h3 className='HAL-sub-title'>
                            Tuxedo
                        </h3>
                    </div>
                </div>
                <div  className='HAL-tie'>
                    <img className='HAl-gallery-image' src={Tie} alt="" />
                    <div className='HAL-text-container'>
                        <h3 className='HAL-sub-title'>
                            Tie
                        </h3>
                    </div>
                </div>
                <div className='HAL-shoes'>
                    <img className='HAl-gallery-image' src={Shoes} alt="" />
                    <div className='HAL-text-container'>
                        <h3 className='HAL-sub-title'>
                            Shoes
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default HaveALookSection;