
import './Footer.css'
const Footer=()=>{
    return(
        <section id="footer-sec">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="swiggy">
                            <h1>Swiggy</h1>
                            <p>© 2023 Bundl Technologies Pvt. Ltd</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="company">
                            <h1>Company</h1>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Team</li>
                                <li>Swiggy One</li>
                                <li>Swiggy Instamart</li>
                                <li>Swiggy Genie</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="Contact">
                            <h1>Contact us</h1>
                            <ul>
                                <li>Help & Support</li>
                                <li>Partner with us</li>
                                <li>Ride with us</li>
                            </ul>
                        </div>
                        <div className="legal">
                            <h1>Legal</h1>
                            <ul>
                                <li>Terms & Condition</li>
                                <li>Cookie Policy</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-4'>
                    <div className="deliver">
                        <h1>We deliver to</h1>
                        <ul>
                            <li>Banglore</li>
                            <li>Gurgaon</li>
                            <li>Hyderabad</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Pune</li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Footer;