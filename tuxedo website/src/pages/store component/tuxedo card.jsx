import { useState,useEffect } from 'react'

import './store styling/tuxedo card.css'
function TuxedoCard ({img, tuxedoName, sale, tuxedoColor ,tuxedoPrice}){
   
   

    return(
        <>
            <div className="tuxedo-card" style={{backgroundImage:`url(${img}`}}>
                <div className='tc-sale-tag'>

                </div>
                <div className="tc-info-container">
                    <p className="tc-name">{tuxedoName}</p>
                    <p className="tc-price">{tuxedoPrice+"$"}</p>
                </div>
            </div>
        </>
    )
}
export default TuxedoCard