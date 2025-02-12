import './style/login box .css'
function LogInBox (){

    return(
        <>
            <div className="login-box-container">
                <h3 className='loing-box-title'>Create a New Acounte</h3>
                <div className="login-using-container">
                    <h4 className='login-title'>using:</h4>
                    <div className="lib-using-button-contaienr">
                        <button className='lib-using-button'>
                            <p className='lib-using-button-title'>Google</p>

                            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.0593 15.3223C29.0593 23.1854 23.6747 28.7812 15.7227 28.7812C8.09851 28.7812 1.94141 22.6241 1.94141 15C1.94141 7.37585 8.09851 1.21875 15.7227 1.21875C19.4347 1.21875 22.5577 2.5802 24.9639 4.82522L21.2129 8.43168C16.3061 3.69715 7.18161 7.2536 7.18161 15C7.18161 19.8068 11.0215 23.7022 15.7227 23.7022C21.1796 23.7022 23.2245 19.7901 23.5468 17.7618H15.7227V13.0217H28.8426C28.9704 13.7275 29.0593 14.4054 29.0593 15.3223Z" fill="black" fill-opacity="0.7"/>
                            </svg>

                        </button>
                        <button className='lib-using-button'>
                            <p className='lib-using-button-title'>Apple</p>

                            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.2839 14.784C20.2716 12.5257 21.2931 10.8212 23.3606 9.56586C22.2038 7.91058 20.4562 6.99986 18.1486 6.82142C15.9642 6.64912 13.5766 8.09519 12.7028 8.09519C11.7798 8.09519 9.66302 6.88295 8.00158 6.88295C4.56795 6.93833 0.918945 9.62124 0.918945 15.0794C0.918945 16.6916 1.21431 18.3571 1.80504 20.076C2.59269 22.3343 5.43559 27.8724 8.40156 27.7801C9.95223 27.7432 11.0475 26.6786 13.0659 26.6786C15.0227 26.6786 16.038 27.7801 17.7671 27.7801C20.7577 27.737 23.3299 22.7035 24.0806 20.439C20.0685 18.5499 20.2839 14.9009 20.2839 14.784ZM16.801 4.68001C18.4809 2.68629 18.3271 0.871016 18.2779 0.21875C16.7949 0.304897 15.0781 1.22792 14.0997 2.36631C13.0228 3.5847 12.389 5.09229 12.5244 6.79065C14.1304 6.91372 15.595 6.08916 16.801 4.68001Z" fill="black" fill-opacity="0.7"/>
                            </svg>

                        </button>
                    </div>
               
                </div>
                    <div className="lib-email-signup-container">
                        
                    <div className="lib-email-container">
                        <h4 className='login-title'>E-mail:</h4>
                        <input type="E-mail"  className='lib-Email-input'/>
                    </div>
                    <div className="lib-email-container">
                        <h4 className='login-title'>password:</h4>
                        <input type="E-mail"  className='lib-Email-input' ></input>
                    </div>
                </div>
                <div className='lib-conditions-text'>
                    <p className='login-title'>By creating this account you are submiting to our <a href="" className='lib-conditions'> roles and conditions</a> </p>
                </div>
                <div className="lib-button-container">
                    <button className='main-button' style={{width:'100%'}}>
                        <p className='main-button-paragraph'>submit</p>
                    </button>
                </div>
            </div>
        </>
    )
}
export default LogInBox