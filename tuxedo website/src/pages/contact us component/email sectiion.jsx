import {  useState } from 'react'
import backgroundImage from '../../assets/contact us page/emailing container.png'

import './style/email section.css'
import './style/email section 1340px.css'
import './style/email section 1100px.css'

function EmailSection (){
    let [IsVailedEmail,setIsVailedEmail]=useState(true)

    let [outLineColor1,setOutLineColor1]=useState()
    let emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let emailCheck=(value)=>{
        if(emailpattern.test(value)){
            setIsVailedEmail(true)
            setOutLineColor1('transparent')
        }
        else{
        setIsVailedEmail(false)
        setOutLineColor1('#910808')}
        console.log(IsVailedEmail, outLineColor1)
    }
    // let [EmailValue,setEmailValue]=useState('')
    
    return(
        <>
            <div className="email-section-container" style={{backgroundImage:`url(${backgroundImage})`}}>
                <div className="email-container">
                <div className='cu-name-input-contaienr'>
                    <p className='cu-title'>Name</p>
                    <input type="text" className='cu-name' />
                </div>
                <div className='cu-Email-input-contaienr'>
                    <p className='cu-title'>E-mail</p>
                    <input type="email" className='cu-Email'   
                    onChange={(e)=>(
                        emailCheck( e.target.value))}
                    style={{borderColor:outLineColor1}}
                     />
                </div>
                <div className='cu-message-input-container'>
                    <p className='cu-title'>Message</p>
                    <textarea type="message" className='cu-message' />
                </div>
                <div className="cu-button-contaienr">
                    <button className="main-button">
                        <p className='main-button-paragraph'>
                            submit
                        </p>
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}
export default EmailSection