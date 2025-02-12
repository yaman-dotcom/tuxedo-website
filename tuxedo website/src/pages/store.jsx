import StoreSection from "./store component/store section"
import Filter from "./store component/filter"
import Footer from "../pages/genral/footer"
import Header from "./genral/header"

import tuxedo1 from '../assets/store page sources/13d37d8be91f1e6f1d446b36b33a6b42.png'
import tuxedo2 from '../assets/store page sources/288113e222413a4bca60f066b54e6281.png'
import tuxedo3 from '../assets/store page sources/e91a103801caf15db922844fe0f7469a.png'
import tuxedo4 from '../assets/store page sources/ecf895802ef047dd2ef6e4861fbd9977.png'

import loafer1 from '../assets/store page sources/Frame 54.png'
import loafer2 from '../assets/store page sources/Frame 55.png'
import loafer3 from '../assets/store page sources/Frame 56.png'
import loafer4 from '../assets/store page sources/Frame 57.png'

import tie1 from '../assets/store page sources/Frame 50.png'
import tie2 from '../assets/store page sources/Frame 51.png'
import tie3 from '../assets/store page sources/Frame 52.png'
import tie4 from '../assets/store page sources/Frame 53.png'

import './store component/store styling/store page.css'
import React, { useState } from "react"
function StorePage(){
    let tuxedoColors={
        name:["black","marone", "blue"],
        code:['#000000','#642C39','#1B2033']
    }
    let loaferColors={
        name:["brown", "white", "black"],
        code:['#7D614B', '#D0D3D8', '#0D0B18']
    }
    let tieColor={
        name:["marone", "blue", 'bage'],
        code:["#5A2434","#896C54","#896C54"]
    }

  
    let [products,setProduct] =useState([
         {
            id:1,
            name:'Silk Symphony',
            price:90,
            img:tie3,
            color:['brown'],
            cut:"classic",
            sale:false,
            display:true,
            kind:"tie",
        },
        {
            id:2,
            name:'Silk Symphony',
            price:90,
            img:tie1,
            color:['brown'],
            cut:"classic",
            sale:false,
            display:true,
            kind:"tie",
        },
        {
            id:3,
            name:'Silk Symphony',
            price:90,
            img:tie2,
            color:['brown'],
            cut:"classic",
            sale:false,
            display:true,
            kind:"tie",
        },
        {
            id:4,
            name:'Silk Symphony',
            price:90,
            img:tie4,
            color:['brown'],
            cut:"classic",
            sale:false,
            display:true,
            kind:"tie",
        },
        {
            id:5,
            name:"Nocturne Slip",
            price:160,
            size:[40,42,43],
            color:["black","maron"],
            img:loafer1,
            sale:true,
            display:true,
            kind:"loafer",
        },
        {
            id:6,
            name:"Nocturne Slip",
            price:160,
            size:[40,42,43],
            color:["black","maron"],
            img:loafer4,
            sale:false,
            display:true,
            kind:"loafer",
        },
        {
            id:7,
            name:"Nocturne Slip",
            price:140,
            size:[40,42,43],
            color:["black","maron"],
            img:loafer2,
            sale:false,
            display:true,
            kind:"loafer",
        },
        {
            id:8,
            name:"Nocturne Slip",
            price:90,
            size:[40,42,43],
            color:["black","maron"],
            img:loafer3,
            sale:false,
            display:true,
            kind:"loafer",
        },
        {
            id:9,
            name:"Midnight Badron",
            colors:["black", "marone", "blue"],
            sale:false,
            price:940,
            size:[31,32,34],
            image:tuxedo1,
            display:true,
            kind:"tuxedo",
        },
        {
            id:10,
            name:"sunday Badron",
            colors:["black", "blue"],
            sale:true,
            price:1400,
            size:[32,34],
            image:tuxedo2,
            display:true,
            kind:"tuxedo",
        },
        {
            id:12,
            name:"sunday Badron",
            colors:["black", "blue"],
            sale:true,
            price:1400,
            size:[32,34],
            image:tuxedo4,
            display:true,
            kind:"tuxedo",
        }, 
        {
            id:13,
            name:"sunday Badron",
            colors:["black", "blue"],
            sale:true,
            price:1400,
            size:[32,34],
            image:tuxedo3,
            display:true,
            kind:"tuxedo",
        }
    ])
    const resetDisplayIfAllFalse = () => {
        setProduct(prevProducts => {
            // Check if all products have display: false
            const allFalse = prevProducts.every(product => !product.display);
    
            // If all are false, set all to true
            return allFalse
                ? prevProducts.map(product => ({ ...product, display: true }))
                : prevProducts;
        });
    };

    let [visibility,setVisibility]=useState({
         tuxedo:true,
        loafer:true,
        tie:true,
    }
    )

    let [isFiltered,setIsFiltered]=useState(false)

    const filtered = (selectedItem) => {
        
        if(isFiltered){
            Object.keys(visibility).forEach((key)=>{
                if(key==selectedItem){
                    // if(visibility[key])
                    setVisibility((pre)=>({
                        ...pre,
                        [key]:!pre[key]
                    }))
                    
                }
            })
        }
        else{
            Object.keys(visibility).forEach((key)=>{
                if(key!=selectedItem){
                    setVisibility((pre)=>({
                        ...pre,
                        [key]:false
                    }))
                }
            })
        }
        setIsFiltered(true)
        // console.log(visibility,isFiltered,selectedItem)
       
    }
    // let unCheckedStatus=()=>{
    //      for (let key in visibility) {
    //         if (visibility[key] === false) {
    //             visibility[key] = true;  // Set `false` values to `true`
    //         }
    //     }
    // }
        
        let [filterIsVisible,setfilterIsVisible]=useState(false)
        
        let toggleShowFilter=()=>{
            setfilterIsVisible((pre)=>!pre)
            // console.log(filterIsVisible)
        }

        let wahtToShow=(category,subCategory)=>{
            subCategory=subCategory?subCategory:"all"
            return category
        }
        
        let OnlyFunction=(category)=>{
            let value=[]
            switch(category){
                case "tu":
                    
                    for(let i=0;i<products.length;i++){
                        if(products[i].kind=="tuxedo"&&products[i].display)
                        value.push(products[i])
                    }
                    // console.log(value)
                    return value
                    break;

                case "lo":
                    
                    for(let i=0;i<products.length;i++){
                        if(products[i].kind=="loafer"&&products[i].display)
                        value.push(products[i])
                    }
                    return value
                    break;

                case "tie":
                    ;
                    for(let i=0;i<products.length;i++){
                        if(products[i].kind=="tie"&&products[i].display)
                        value.push(products[i])
                    }
                    return value
                    break;            
            }
        }
        let [isFirstTime,setIsFirstTime]=useState(true)

        let resetFilter=()=>{
            for(let i=0;i<products.length;i++){
                setProduct((pre)=>
                pre.map(prod=>
                    ({...prod,
                    display:false})
                )
                )
            }
            setIsFirstTime(false)
            console.log(isFirstTime)

        }

    
        let showOnly =(category)=>{
            console.log(isFirstTime)
            if(isFirstTime){
                resetFilter()
                products.forEach(product => console.log(`${product.kind}: ${product.display}`));
            }
            setProduct(prevProducts =>
                prevProducts.map(product =>
                    product.kind === category
                        ? { ...product, display: !product.display } // Toggle visibility for selected category
                        : product // Keep other products unchanged
                )
            );
            resetDisplayIfAllFalse()
            console.log("the first time "+ isFirstTime)
            products.forEach(product => console.log(`${product.kind}: ${product.display}`));
        }
        const resetDisplayByKind = (kind) => {
            setProduct(prevProducts => {
                // Filter products by kind and check if all are false
                const allFalse = prevProducts
                .filter(product => product.kind === kind)
                .every(product => !product.display);
                
                // If all of that kind are false, update only those products
                return allFalse
                ? prevProducts.map(product => 
                    product.kind === kind ? { ...product, display: true } : product
                )
                : prevProducts;
            });
        };

    return(
        <>
        <Header textColor={"#3C442B"}/>
        <div className="store-page">
            <Filter 
                tuxedoSizes={[31,32,33,34]}
                tuxedoColors={tuxedoColors}
                loaferSizes={[41,42,43,44]}
                loaferColors={loaferColors}
                tieColor={tieColor}
                tieCuts={["classic", "skinny","wide"]}
                filtered={showOnly}
                FilterIsvisible={filterIsVisible}
                filtertoggle={toggleShowFilter}

                />
            <StoreSection 
                tuVisibilty={visibility.tuxedo}
                tiVisibilty={visibility.tie}   
                loVisibilty={visibility.loafer} 
                filterVisibilty={()=>toggleShowFilter()}
                loaferItem={OnlyFunction("lo")}
                tuxedoItem={OnlyFunction('tu')}
                tieItem={OnlyFunction('tie')}
                resetDisplayByKind={resetDisplayByKind}
            />
        </div>
           <Footer/>

 
        </>
    )
}
export default StorePage