import TuxedoCard from './tuxedo card'
import LoaferCard from './loafer card'
import TieCard from './tie card'

import tuxedo1 from '../../assets/store page sources/13d37d8be91f1e6f1d446b36b33a6b42.png'
import tuxedo2 from '../../assets/store page sources/288113e222413a4bca60f066b54e6281.png'
import tuxedo3 from '../../assets/store page sources/e91a103801caf15db922844fe0f7469a.png'
import tuxedo4 from '../../assets/store page sources/ecf895802ef047dd2ef6e4861fbd9977.png'
import tuxedo5 from '../../assets/store page sources/new.png'

import loafer1 from '../../assets/store page sources/Frame 54.png'
import loafer2 from '../../assets/store page sources/Frame 55.png'
import loafer3 from '../../assets/store page sources/Frame 56.png'
import loafer4 from '../../assets/store page sources/Frame 57.png'

import tie1 from '../../assets/store page sources/Frame 50.png'
import tie2 from '../../assets/store page sources/Frame 51.png'
import tie3 from '../../assets/store page sources/Frame 52.png'
import tie4 from '../../assets/store page sources/Frame 53.png'

import { useEffect, useState } from 'react'

import './store styling/store section .css'
import './store styling/store section 1340px.css'
import './store styling/store section 1100px .css'
import './store styling/store section 920px.css'

function StoreSection({tuVisibilty, loVisibilty, tiVisibilty ,filterVisibilty ,tuxedoItem ,loaferItem ,tieItem}){
    let categoryVisibilty={
        tuxedo:tuVisibilty,
        loafer:loVisibilty,
        tie:tiVisibilty,
    }
    let [onSale,setOnSale]=useState(null)
    let toggleSale=(value)=>{
        setOnSale(value)
    }
    // console.log(categoryVisibilty)
  
    // fetch datat________________{sale, price, colors, name, sizes, image}
    let tuxedo=tuxedoItem
    let loafer=loaferItem
    let tie=tieItem


    return(
        <>
            <div className="store-section">
            <div className="store-filter-button-contaienr">
            <button className='store-filter-button' onClick={()=>filterVisibilty()}>
                    <svg width="26" height="17" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19103 3.57526C1.19103 3.57526 4.8745 3.57526 7.2347 3.57526M7.2347 3.57526C7.33901 4.82695 8.43826 5.75709 9.68995 5.65278C10.8334 5.55749 11.6722 4.71868 11.7675 3.57526M7.2347 3.57526C7.23017 2.27039 8.3896 1.20015 9.68995 1.30889C10.8864 1.40894 11.7716 2.37461 11.7675 3.57526M11.7675 3.57526C14.0539 3.57526 17.6223 3.57526 17.6223 3.57526M4.96832 9.61894C5.02048 10.7142 4.1749 11.6443 3.07968 11.6965C1.9336 11.751 0.947588 10.765 1.00216 9.61894C1.05432 8.52372 1.98445 7.67814 3.07968 7.73029C4.12157 7.77991 4.91871 8.57705 4.96832 9.61894ZM4.96832 9.61894C9.98375 9.61894 17.8111 9.61894 17.8111 9.61894" stroke="black" stroke-opacity="0.8"/>
                </svg>

                    <p className='filter-button-text'>filter</p>
                </button>
            </div>
                
                <div className='store-card-container' style={{display:categoryVisibilty.tuxedo?"flex":"none"}}>
                {tuxedo.map(tuxedo=>(
                    <TuxedoCard  
                    key={tuxedo.id}
                    img={tuxedo.image} 
                    tuxedoName={tuxedo.name} 
                    tuxedoPrice={tuxedo.price}
                    />
                ))}
                </div>
                <div className="store-card-container" style={{display:categoryVisibilty.loafer?"flex":"none"}}>
                    {loafer.map(loafer=>(
                        <LoaferCard
                            key={loafer.id}
                            loaferName={loafer.name}
                            loaferPrice={loafer.price}
                            img={loafer.img}
                        />
                    ))}

                    
                </div>
                <div className="store-card-container" style={{display:categoryVisibilty.tie?"flex":"none"}}>
                    {tie.map(tie=>(
                        <TieCard
                            key={tie.id}
                            img={tie.img}
                            tieName={tie.name}
                            tiePrice={tie.price}
                        />
                    ))}
                </div>
                <div className="store-card-container" style={{display:categoryVisibilty.loafer?"flex":"none"}}>
                    {loafer.map(loafer=>(
                        <LoaferCard
                            key={loafer.id}
                            loaferName={loafer.name}
                            loaferPrice={loafer.price}
                            img={loafer.img}
                        />
                    ))}

                    
                </div>

                    
               
                <div className='store-card-container' style={{display:categoryVisibilty.tuxedo?"flex":"none"}}>
                {tuxedo.map(tuxedo=>(
                    <TuxedoCard  
                    key={tuxedo.id}
                    img={tuxedo.image} 
                    tuxedoName={tuxedo.name} 
                    tuxedoPrice={tuxedo.price}
                    />
                ))}
                </div>
            </div>
        </>
    )
}
export default StoreSection