import './style/footer.css'
import './style/footer 1340px.css'
import './style/footer 1100px.css'
import './style/footer 920px.css'


function Footer(){

    return(
        <>
            <div className="footer-container">
                <div className="footer-contact-us-container">
                    <div className='footer-title-container'>
                        <h3 className='footer-title'>
                            Contect Us
                        </h3>
                    </div>
                    <ul className='footer-list'>
                            <a  className='footer-link' href="">phone number</a>
                            <a className='footer-link'  href="">email</a>
                            <a  className='footer-link' href="">what's up</a>
                    </ul>
                </div>
                <div className="footer-navigation-container">
                    <div className='footer-title-container'>
                        <h3 className='footer-title'>
                            Navigation
                        </h3>
                    </div>
                    <ul className='footer-list'>
                            <a  className='footer-link' href="">home</a>
                            <a className='footer-link'  href="">stroe</a>
                            <a  className='footer-link' href="">contact us</a>
                            <a  className='footer-link' href="">login</a>
                    </ul>
                </div>
                <div className="footer-cloth-container">
                <div className='footer-title-container'>
                        <h3 className='footer-title'>
                            Cloth
                        </h3>
                    </div>
                    <ul className='footer-list'>
                            <a  className='footer-link' href="">tuxedo</a>
                            <a className='footer-link'  href="">loafer</a>
                            <a  className='footer-link' href="">ties</a>
                            <a  className='footer-link' href="">bowtie</a>
                    </ul>
                </div>
                <div className='footer-svg-container'>
                    <svg width="248" height="298" viewBox="0 0 248 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M156.104 9.7749L130.52 23.079L156.104 32.2896V9.7749Z" stroke="#3C442B" stroke-width="4"/>
                    <path d="M103.272 9.7749L128.856 23.079L103.272 32.2896V9.7749Z" stroke="#3C442B" stroke-width="4"/>
                    <path d="M206.426 89.5997L236.104 125.418C236.104 125.418 211.543 146.91 177.771 197.056C143.999 247.202 137.858 297.349 137.858 297.349C137.858 297.349 154.233 143.84 162.42 96.7635C170.607 49.6874 192.098 0.564453 192.098 0.564453L247.362 59.9213L206.426 89.5997Z" fill="#3C442B"/>
                    <path d="M41.6582 89.5997L11.9798 125.418C11.9798 125.418 36.5412 146.91 70.3132 197.056C104.085 247.202 110.226 297.349 110.226 297.349C110.226 297.349 93.8513 143.84 85.6641 96.7635C77.477 49.6874 55.9857 0.564453 55.9857 0.564453L0.722458 59.9213L41.6582 89.5997Z" fill="#3C442B"/>
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Footer