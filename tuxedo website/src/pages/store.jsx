import StoreSection from "./store component/store section"
import Filter from "./store component/filter"
import Footer from "../pages/genral/footer"
import Header from "./genral/header"

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


    let [visibility,setVisibility]=useState({
         tuxedo:true,
        loafer:true,
        tie:true,
    }
    )
    // const filtered = (selectedItem) => {
    //     setVisibility((prev) =>
    //         Object.keys(prev).reduce((acc, key) => {
    //             acc[key] = key === selectedItem; 
    //             return acc;
    //         }, {})
    //     );
    //     console.log(visibility)
    // };

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
    let unCheckedStatus=()=>{
         for (let key in visibility) {
            if (visibility[key] === false) {
                visibility[key] = true;  // Set `false` values to `true`
            }
        }
    }
        //    for(let i in visibility){
        //     if(visibility[i]==visibility[selectedItem] ){
        //         newVisibilty[selectedItem]=true
        //        }
        //        else{
        //         newVisibilty[selectedItem]=false
        //        }
        //        console.log(visibility[i])
               
        //    }
        //    for(let i in visibility){
        //     if(visibility[i]==visibility[selectedItem] || visibility[i]){
        //         newVisibilty[selectedItem]=true
        //        }
        //        else{
        //         newVisibilty[selectedItem]=false
        //        }
        //    }


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
                filtered={filtered}
                unchecked={unCheckedStatus}
                />
            <StoreSection 
            tuVisibilty={visibility.tuxedo}
            tiVisibilty={visibility.tie}   
            loVisibilty={visibility.loafer} 

            />
        </div>
           <Footer/>

 
        </>
    )
}
export default StorePage