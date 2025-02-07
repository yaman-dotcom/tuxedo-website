import './store styling/loafer card.css'

function LoaferCard ({img,loaferName, loaferPrice}){

    return(
        <>
            <div className="loafer-card" style={{backgroundImage:`url(${img})`}}>
                <div className="lc-sale-tag">

                </div>
                <div className="lc-info-container">
                    <p className="lc-name">{loaferName}</p>
                    <p className="lc-price">{loaferPrice+"$"}</p>
                </div>
            </div>
        </>
    )
}
export default LoaferCard;