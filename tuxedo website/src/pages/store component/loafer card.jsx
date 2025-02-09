import './store styling/loafer card.css'
import './store styling/loafer card 1340px.css'
import './store styling/loafer card 1100px.css'

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