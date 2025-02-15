import onSale from '../../assets/bag /on sale.png'
import noSale from '../../assets/bag /no sale.png'

import './style/bag selected product .css'

function BagSelectedProduct ({poductImage, productName ,productColor, productSize ,productPrice ,Sale}){
    console.log(Sale)
    return(
        <>
            <div className="bag-selected-product-container">
                <div className="bag-selected-product-image-info-container">
                    <img src={poductImage}  className="bsp-product-image" />
                    <div className="bsd-info-container">
                        <h3 className='bsp-product-title'>
                            {productName}
                        </h3>
                        <p className='bsp-info'>
                           color: {productColor}
                        </p>
                        <p className='bsp-info'>
                            size: {productSize}
                        </p>
                    </div>
                </div>
                <div className="bag-selected-product-price-cancelation">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 1L7.25 7.25M1 13.5L7.25 7.25M7.25 7.25L1 1M7.25 7.25L13.5 13.5" stroke="#3C442B" stroke-opacity="0.52" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <div className="bsp-price-contaienr" style={{backgroundImage:Sale?`url(${onSale})`:`url(${noSale})`}}>
                        <p className='bsp-price'>
                            {productPrice}$
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BagSelectedProduct