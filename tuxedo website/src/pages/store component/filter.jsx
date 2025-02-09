


// 3.	Create a reusable component for filter sections (FilterCategory).
// •	This reduces redundant JSX and keeps your code modular.
// 4.	Fix incorrect HTML attributes (stroke-width → strokeWidth, marginbottom → marginBottom).

import './store styling/store filter.css'
import './store styling/store filter 1340px.css'
import './store styling/store filter 1100px.css'

import SizeBox from '../genral/size box'
import ColorBox from '../genral/color box'
import CutBox from '../genral/cut box'

import { useEffect, useState } from 'react'

function Filter({tuxedoSizes, tuxedoColors, loaferSizes, loaferColors, tieCuts, tieColor, filtered ,FilterIsvisible ,filtertoggle}){
   let tuxedoAvailbleSizes=tuxedoSizes
   let tuxedoAvailble={
    color:tuxedoColors.name,
    code:tuxedoColors.code,
   }

   let loaferAvailbleSizes=loaferSizes
   let loaferAvailble={
    color:loaferColors.name,
    code:loaferColors.code,
   }

   let tieAvailbleCuts=tieCuts
   let tieAvailble={
    color:tieColor.name,
    code:tieColor.code,
   }

    
//    let [isClose,setIsClose]=useState(true)
//    let [height,setHight]=useState('0px')

    let [section,setSection]=useState({
        tuxedoSize:false,
        tuxedoColor:false,
        loaferColor:false,
        loaferSize:false,
        tieColor:false,
        tieCut:false,
    })
    let toggleSection =(sectionName)=>{
        console.log(section)
        setSection((prev)=>({
            ...prev,
            [sectionName]:!prev[sectionName]
        }))
     
    }
    let uncheckedBoxCount=0

 
    console.log(FilterIsvisible)
    

    return(
        <>
            <div className='filter-empty-space' style={{display:FilterIsvisible?'flex':'none'}} onClick={()=>filtertoggle()}>

            </div>
            <div className="filter-section" style={{left:FilterIsvisible?"0px":"-250px"}}>
                
                <div className="filter-tuxedo">
                    <div className="filter-title-container">
                        <label htmlFor="tuxedo-filter" ><p className='filter-title'>Tuxedo</p></label>
                        <input className='filter-check-box'  type="checkbox" id="tuxedo-filter" 
                        onChange={()=>{filtered("tuxedo");
                        }}
                        />

                    </div>
                    
                    <div className='filter-tuxedo-content' style={{gap:section.tuxedoSize&&section.tuxedoColor?"6px":"0px"}}>
                         <div className='filter-sub-title-container' onClick={()=>toggleSection("tuxedoSize")}>
                             <p className="filter-sub-title">
                                 Size
                             </p>
                             <svg  width="17" height="8" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 1L5.91183 4.57224C6.26248 4.82726 6.73752 4.82726 7.08817 4.57224L12 1" stroke="#3C442B" stroke-width="1.3" stroke-linecap="round"/>
                             </svg>
                         </div>
                        <div className="filter-size-content" style={{ 'max-height': section.tuxedoSize ? "fit-content" : "0px" }}>
                            {
                                tuxedoAvailbleSizes.map((size,index)=>(
                                    <SizeBox key={index} size={size}/>
                                ))
                            }
                            data
                        </div> 
                        
                    </div> <div className='filter-tuxedo-content'>
                         <div className='filter-sub-title-container' onClick={()=>toggleSection("tuxedoColor")}>
                             <p className="filter-sub-title">
                                 Color
                             </p>
                             <svg width="17" height="8" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 1L5.91183 4.57224C6.26248 4.82726 6.73752 4.82726 7.08817 4.57224L12 1" stroke="#3C442B" stroke-width="1.3" stroke-linecap="round"/>
                             </svg>
                         </div>
                        <div className="filter-color-content" style={{maxHeight:section.tuxedoColor?"fit-content":0}}>
                        {
                            tuxedoAvailble.color.map((color,index)=>(
                                <ColorBox key={index} color={color} colorCode={tuxedoAvailble.code[index]}/>
                            ))
                        }
                            {/* <SizeBox size={tuxedoAvailbleColors[3]}/> */}
                        </div> 
                        
                    </div>    
                </div>
                <div className="filter-tuxedo">
                    <div className="filter-title-container">
                        <label htmlFor="tuxedo-filter" ><p className='filter-title'>Loafer</p></label>
                        <input className='filter-check-box'  type="checkbox" id="tuxedo-filter"
                         onChange={()=>{
                            filtered("loafer");
                            }}/>
                    </div>
                    
                    <div className='filter-loafer-content' style={{gap:section.loaferSize&&section.loaferColor?"6px":0}}>
                         <div className='filter-sub-title-container' onClick={()=>toggleSection("loaferSize")}>
                             <p className="filter-sub-title">
                                 Size
                             </p>
                             <svg width="17" height="8" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 1L5.91183 4.57224C6.26248 4.82726 6.73752 4.82726 7.08817 4.57224L12 1" stroke="#3C442B" stroke-width="1.3" stroke-linecap="round"/>
                             </svg>
                         </div>
                        <div className="filter-size-content" style={{maxHeight:section.loaferSize?"fit-content":0}}>
                        {
                            loaferAvailbleSizes.map((size,index)=>(
                                <SizeBox key={index} size={size}/>
                            ))
                        }
                        </div>
                        <div className='filter-tuxedo-content'>
                         <div className='filter-sub-title-container' onClick={()=>toggleSection("loaferColor")}>
                             <p className="filter-sub-title">
                                 Color
                             </p>
                             <svg width="17" height="8" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 1L5.91183 4.57224C6.26248 4.82726 6.73752 4.82726 7.08817 4.57224L12 1" stroke="#3C442B" stroke-width="1.3" stroke-linecap="round"/>
                             </svg>
                         </div>
                        <div className="filter-color-content" style={{maxHeight:section.loaferColor?"fit-content":0}}>
                        {
                            loaferAvailble.color.map((color,index)=>(
                                <ColorBox key={index} color={color} colorCode={loaferAvailble.code[index]}/>
                            ))
                        }
                            {/* <SizeBox size={tuxedoAvailbleColors[3]}/> */}
                        </div>
                        </div> 
                        
                    </div>    
                </div>
                <div className="filter-tuxedo">
                    <div className="filter-title-container">
                        <label htmlFor="tuxedo-filter" ><p className='filter-title'>Tie</p></label>
                        <input className='filter-check-box'  type="checkbox" id="tuxedo-filter" onChange={()=>{filtered("tie");}}/>
                    </div>
                    
                    <div className='filter-tie-content' style={{gap:section.tieColor&&section.tieCut?"6px":0}}>
                         <div className='filter-sub-title-container' onClick={()=>toggleSection("tieCut")}>
                             <p className="filter-sub-title">
                                 Cut
                             </p>
                             <svg width="17" height="8" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 1L5.91183 4.57224C6.26248 4.82726 6.73752 4.82726 7.08817 4.57224L12 1" stroke="#3C442B" stroke-width="1.3" stroke-linecap="round"/>
                             </svg>
                         </div>
                        <div className="filter-cut-content" style={{maxHeight:section.tieCut?"fit-content":0}}>
                        {
                            tieAvailbleCuts.map((cut,index)=>(
                                <CutBox key={index} cutName={cut}/>
                            ))
                        }
                            {/* <SizeBox size={tieAvailbleCuts[3]}/> */}
                        </div>
                        <div className='filter-tuxedo-content'>
                         <div className='filter-sub-title-container' onClick={()=>toggleSection("tieColor")}>
                             <p className="filter-sub-title" >
                                 Color
                             </p>
                             <svg width="17" height="8" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 1L5.91183 4.57224C6.26248 4.82726 6.73752 4.82726 7.08817 4.57224L12 1" stroke="#3C442B" stroke-width="1.3" stroke-linecap="round"/>
                             </svg>
                         </div>
                        <div className="filter-color-content" style={{maxHeight:section.tieColor?"fit-content":0}}>
                            {
                                tieAvailble.color.map((color,index)=>(
                                    <ColorBox key={index} color={color} colorCode={tieAvailble.code[index]} />
                                ))
                            }
                            {/* <SizeBox size={tuxedoAvailbleColors[3]}/> */}
                        </div>
                        </div> 
                        
                    </div>    
                </div>
                <div className="filter-title-container">
                    <label htmlFor="tuxedo-filter" ><p className='filter-title'>Sale</p></label>
                    <input className='filter-check-box'  type="checkbox" id="tuxedo-filter" />
                </div>
                <div className="filter-title-container-double">
                    <label htmlFor="tuxedo-filter" ><p className='filter-title'>new collection</p></label>
                    <input className='filter-check-box' style={{'margin-bottom':'6px'}} type="checkbox" id="tuxedo-filter" />
                </div>
            </div>
        </>
    )
} 
export default Filter