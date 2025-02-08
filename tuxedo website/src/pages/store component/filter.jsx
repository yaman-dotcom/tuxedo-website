// 1.	Use .map() instead of manually rendering each SizeBox & ColorBox.
// •	This reduces repeated code and makes adding more sizes/colors easier.
// 2.	Remove unnecessary variables like tuxedoAvailbleSizes and use tuxedoSizes directly.
// 3.	Create a reusable component for filter sections (FilterCategory).
// •	This reduces redundant JSX and keeps your code modular.
// 4.	Fix incorrect HTML attributes (stroke-width → strokeWidth, marginbottom → marginBottom).

import './store styling/store filter.css'
import SizeBox from '../genral/size box'
import ColorBox from '../genral/color box'
import CutBox from '../genral/cut box'

import { useEffect, useState } from 'react'

function Filter({tuxedoSizes, tuxedoColors, loaferSizes, loaferColors, tieCuts, tieColor, filtered ,unchecked}){
   let tuxedoAvailbleSizes=tuxedoSizes
   let tuxedoAvailbleColors=tuxedoColors.name
   let tuxedoAvailbleColorsCode=tuxedoColors.code

   let loaferAvailbleSizes=loaferSizes
   let loaferAvailbleColors=loaferColors.name
   let loaferAvailbleColorsCode=loaferColors.code

   let tieAvailbleCuts=tieCuts
   let tieAvailbleColors=tieColor.name
   let tieAvailbleColorsCode=tieColor.code

    
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

    const [checkedBoxes, setCheckedBoxes] = useState({
        tuxedo: false,
        loafer: false,
        tie: false
    });
    
    const handleChange = (boxName) => {
        setCheckedBoxes((prev) => ({
            ...prev,
            [boxName]: !prev[boxName] 
        }));
    };
    useEffect(()=>{
        Object.keys(checkedBoxes).forEach((key)=>{
            if(!checkedBoxes[key]){
                uncheckedBoxCount++
            }
        })
        if(uncheckedBoxCount==3){
            setCheckedBoxes(prev => 
                Object.keys(prev).reduce((acc, key) => {
                    acc[key] = true;  // Set all to true
                    return acc;
                }, {})
            );
        }
    },[checkedBoxes])
    

    return(
        <>
            <div className="filter-section">
                <div className="filter-tuxedo">
                    <div className="filter-title-container">
                        <label htmlFor="tuxedo-filter" ><p className='filter-title'>Tuxedo</p></label>
                        <input className='filter-check-box'  type="checkbox" id="tuxedo-filter" 
                        onChange={()=>{filtered("tuxedo");
                        handleChange('tuxedo')}
                        }/>

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
                            <SizeBox size={tuxedoAvailbleSizes[0]}/>
                            <SizeBox size={tuxedoAvailbleSizes[1]}/>
                            <SizeBox size={tuxedoAvailbleSizes[2]}/>
                            <SizeBox size={tuxedoAvailbleSizes[3]}/>
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
                            <ColorBox color={tuxedoAvailbleColors[0]} colorCode={tuxedoAvailbleColorsCode[0]}/>
                            <ColorBox color={tuxedoAvailbleColors[1]} colorCode={tuxedoAvailbleColorsCode[1]}/>
                            <ColorBox color={tuxedoAvailbleColors[2]} colorCode={tuxedoAvailbleColorsCode[2]}/>
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
                            handleChange('loafer')}} />
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
                            <SizeBox size={loaferAvailbleSizes[0]}/>
                            <SizeBox size={loaferAvailbleSizes[1]}/>
                            <SizeBox size={loaferAvailbleSizes[2]}/>
                            <SizeBox size={loaferAvailbleSizes[3]}/>
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
                            <ColorBox color={loaferAvailbleColors[0]} colorCode={loaferAvailbleColorsCode[0]}/>
                            <ColorBox color={loaferAvailbleColors[1]} colorCode={loaferAvailbleColorsCode[1]}/>
                            <ColorBox color={loaferAvailbleColors[2]} colorCode={loaferAvailbleColorsCode[2]}/>
                            {/* <SizeBox size={tuxedoAvailbleColors[3]}/> */}
                        </div>
                        </div> 
                        
                    </div>    
                </div>
                <div className="filter-tuxedo">
                    <div className="filter-title-container">
                        <label htmlFor="tuxedo-filter" ><p className='filter-title'>Tie</p></label>
                        <input className='filter-check-box'  type="checkbox" id="tuxedo-filter" onChange={()=>{filtered("tie");handleChange('tie')}}/>
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
                            <CutBox cutName={tieAvailbleCuts[0]}/>
                            <CutBox cutName={tieAvailbleCuts[1]}/>
                            <CutBox cutName={tieAvailbleCuts[2]}/>
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
                            <ColorBox color={tieAvailbleColors[0]} colorCode={tieAvailbleColorsCode[0]}/>
                            <ColorBox color={tieAvailbleColors[1]} colorCode={tieAvailbleColorsCode[1]}/>
                            <ColorBox color={tieAvailbleColors[2]} colorCode={tieAvailbleColorsCode[2]}/>
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