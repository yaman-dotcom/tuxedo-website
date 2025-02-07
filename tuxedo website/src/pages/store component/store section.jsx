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

function StoreSection(){
    let [onSale,setOnSale]=useState(null)
    let toggleSale=(value)=>{
        setOnSale(value)
    }
    // fetch datat________________{sale, price, colors, name, sizes, image}
    let tuxedo=[
        {
            id:1,
            name:"The Midnight Badron",
            colors:["black", "marone", "blue"],
            slae:false,
            price:940,
            size:[31,32,34],
            image:tuxedo1,
        },
        {
            id:2,
            name:"The sunday Badron",
            colors:["black", "blue"],
            slae:true,
            price:1400,
            size:[32,34],
            image:tuxedo2,
        },
        {
            id:3,
            name:"The sunday Badron",
            colors:["black", "blue"],
            slae:true,
            price:1400,
            size:[32,34],
            image:tuxedo4,
        }, 
        {
            id:4,
            name:"The sunday Badron",
            colors:["black", "blue"],
            slae:true,
            price:1400,
            size:[32,34],
            image:tuxedo3,
        }
    ]
    let loafer=[
        {
            id:1,
            name:"Nocturne Slip",
            price:160,
            size:[40,42,43],
            color:["black","maron"],
            img:loafer1,
            sale:true,
        },
        {
            id:2,
            name:"Nocturne Slip",
            price:160,
            size:[40,42,43],
            color:["black","maron"],
            img:loafer4,
            sale:false,
        },
        {
            id:3,
            name:"Nocturne Slip",
            price:140,
            size:[40,42,43],
            color:["black","maron"],
            img:loafer2,
            sale:false,
        },
        {
            id:4,
            name:"Nocturne Slip",
            price:90,
            size:[40,42,43],
            color:["black","maron"],
            img:loafer3,
            sale:false,
        },

    ]
    let tie=[
        {
            id:1,
            name:'Silk Symphony',
            price:90,
            img:tie3,
            color:['brown'],
            cut:"classic",
            sale:false,
        },
        {
            id:2,
            name:'Silk Symphony',
            price:90,
            img:tie1,
            color:['brown'],
            cut:"classic",
            sale:false,
        },
        {
            id:3,
            name:'Silk Symphony',
            price:90,
            img:tie2,
            color:['brown'],
            cut:"classic",
            sale:false,
        },
        {
            id:4,
            name:'Silk Symphony',
            price:90,
            img:tie4,
            color:['brown'],
            cut:"classic",
            sale:false,
        }
    ]

    return(
        <>
            <div className="store-section">
                <div className='store-card-container'>
                {tuxedo.map(tuxedo=>(
                    <TuxedoCard  
                    key={tuxedo.id}
                    img={tuxedo.image} 
                    tuxedoName={tuxedo.name} 
                    tuxedoPrice={tuxedo.price}
                    />
                ))}
                </div>
                <div className="store-card-container">
                    {loafer.map(loafer=>(
                        <LoaferCard
                            key={loafer.id}
                            loaferName={loafer.name}
                            loaferPrice={loafer.price}
                            img={loafer.img}
                        />
                    ))}

                    
                </div>
                <div className="store-card-container">
                    {tie.map(tie=>(
                        <TieCard
                            key={tie.id}
                            img={tie.img}
                            tieName={tie.name}
                            tiePrice={tie.price}
                        />
                    ))}
                </div>
                <div className="store-card-container">
                    {loafer.map(loafer=>(
                        <LoaferCard
                            key={loafer.id}
                            loaferName={loafer.name}
                            loaferPrice={loafer.price}
                            img={loafer.img}
                        />
                    ))}

                    
                </div>
                <div className="store-card-container">
                    {loafer.map(loafer=>(
                        <LoaferCard
                            key={loafer.id}
                            loaferName={loafer.name}
                            loaferPrice={loafer.price}
                            img={loafer.img}
                        />
                    ))}

                    
                </div>
                <div className='store-card-container'>
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