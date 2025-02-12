import loginBackgroundImage from '../../assets/log in/log in page.png'
import LogInBox from './log in box ';

import './style/login section.css'
function LogInSection(){

    return(
        <>
            <div className="login-section" style={{backgroundImage:`url(${loginBackgroundImage})`}}>
                <LogInBox/>
            </div>
        </>
    )
}
export default LogInSection;