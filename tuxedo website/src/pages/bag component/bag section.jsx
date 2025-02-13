import './style/bag section .css'

import tie from '../../assets/store page sources/Frame 50.png'

import Swiper from 'swiper'

import BagSelectedProduct from './bag selected product'
import { useEffect, useState } from 'react'
function BagSection(){
    let choosedProduct=[
        {
            id:1,
            kind:"tie",
            name:"The Sovereign Edge",
            price:1900,
            img:tie,
            sale:true,
            color:"black",
            size:41,

        },
        {
            id:2,
            kind:"tie",
            name:"The Sovereign Edge",
            price:1900,
            img:tie,
            sale:true,
            color:"black",
            size:41,

        },
        {
            id:3,
            kind:"tie",
            name:"The Sovereign Edge",
            price:1900,
            img:tie,
            sale:true,
            color:"black",
            size:41,

        },
        {
            id:4,
            kind:"tie",
            name:"The Sovereign Edge",
            price:1900,
            img:tie,
            sale:true,
            color:"black",
            size:41,

        },
        {
            id:5,
            kind:"tie",
            name:"The Sovereign Edge",
            price:1900,
            img:tie,
            sale:true,
            color:"black",
            size:41,

        },
        
    ]
    let [total,setTotal]=useState(0)

    
    // choosedProduct.forEach((product)=>setTotal(pre=>pre+=product.price))
    // useEffect(()=>{
    // },choosedProduct)

    return(
        <>
  
            <div className="bag-section">
                <div className="bag-svg-container">
                    <svg width="340" height="452" viewBox="0 0 340 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M237.436 57.5858H310.126C316.562 57.5858 321.852 62.6629 322.116 69.0933L335.662 398.869C335.942 405.684 330.493 411.362 323.672 411.362H16.3254C9.50472 411.362 4.05552 405.684 4.33549 398.869L17.8835 69.0932C18.1476 62.6629 23.4375 57.5858 29.8733 57.5858H102.563" stroke="#3C442B" stroke-width="7.13" stroke-miterlimit="10"/>
                        <path d="M237.435 14.0502V47.7683C237.389 56.6966 233.821 65.246 227.508 71.5594C221.195 77.8727 212.645 81.4401 203.717 81.4865H136.281C127.352 81.4401 118.803 77.8727 112.49 71.5594C106.176 65.246 102.609 56.6966 102.562 47.7683V14.0502H237.435Z" stroke="#3C442B" stroke-width="7.13" stroke-miterlimit="10"/>
                    </svg>

                </div>
                <div className='bag-right-container'>
                    <div className="bag-goods-contaienr">
                        {
                            choosedProduct.map((pro)=>(
                                <BagSelectedProduct
                                    key={pro.id}
                                    productSize={pro.size}
                                    productColor={pro.color}
                                    productPrice={pro.price}
                                    productName={pro.name}
                                    sale={pro.sale}
                                    poductImage={pro.img}
                                />
                            ))
                        }
                    </div>
                    <div className='bag-total-contaienr'>
                        <p className='bag-total-contaienr-text'>total</p>
                        <p className='bag-total-contaienr-text'>{total}$</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default BagSection