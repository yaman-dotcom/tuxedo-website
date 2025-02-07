import StoreSection from "./store component/store section"
import Filter from "./store component/filter"
import Footer from "../pages/genral/footer"

import './store component/store styling/store page.css'
import React from "react"
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
    return(
        <>
        <div className="store-page">
            <Filter 
                tuxedoSizes={[31,32,33,34]}
                tuxedoColors={tuxedoColors}
                loaferSizes={[41,42,43,44]}
                loaferColors={loaferColors}
                tieColor={tieColor}
                tieCuts={["classic", "skinny","wide"]}
                />
            <StoreSection/>
        </div>
           <Footer/>

 
        </>
    )
}
export default StorePage;