import './style/product card hover.css'

function ProductCardHover ({productName, producColor, producImage, productPrice }){

    return (
        <>
            <div className="product-card-hover-contaienr">
                <img src={producImage} alt=""  className="pch-image"/>
                <div className="pch-info-container">
                    <p className="pch-name">
                        {productName}
                    </p>
                    <p className="pch-color">
                        {producColor}
                    </p>
                    <p className="pch-price">
                        {productPrice+"$"}
                    </p>
                </div>
            </div>
        </>
    )
}
export default ProductCardHover;