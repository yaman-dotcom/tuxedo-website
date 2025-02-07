import './store styling/tie card.css'
function TieCard({img,tieName ,tiePrice}){

    return(
        <>
        <div className="tie-card" style={{backgroundImage:`url(${img}`}}>
                <div className='tc-sale-tag'>

                </div>
                <div className="tie-info-container">
                    <p className="tie-name">{tieName}</p>
                    <p className="tie-price">{tiePrice+"$"}</p>
                </div>
            </div>        
        </>
    )
}
export default TieCard