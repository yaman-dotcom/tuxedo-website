import newCollectionImage from '../../assets/home page sources/new collection.png'

import './home styling/new collection section.css'
import './home styling/new collection section 1340px.css'
import './home styling/new collection section 1100px.css'
import './home styling/new collection section 920px.css'

function NewCollectionSection(){

    return(
        <>
            <div className='new-collection-section'>
                <img src={newCollectionImage} className='new-collection-image'  />
                <div className='new-collection-info-container'>
                    <h2 className='new-collection-title'>
                        Winter Collection 
                    </h2>
                    <p className='new-collection-info-paragraph'>
                        The new tuxedo collection blends timeless sophistication with modern elegance, featuring sleek cuts, luxurious fabrics, and bold, contemporary details
                    </p>
                    <div className='new-collection-button-container'>
                        <button className='main-button'>
                        <p className='main-button-paragraph'>
                            shop now
                        </p></button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default NewCollectionSection;