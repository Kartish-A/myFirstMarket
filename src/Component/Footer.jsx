import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrraper'>
                <ul className='categories'>
                    <h4> Categories</h4>
                    <li>About us</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul className='partners'>
                    <h4>Partners</h4>
                    <li>Support</li>
                    <li>Shipping & returns</li>
                    <li>Size Guide</li>
                    <li>Product Care</li>
                </ul>
                <ul className='adress'>
                    <h4>Contact us</h4>
                    <li>Marketplace Str. 28</li>
                    <li>65698 Berlin</li>
                    <li>Germany</li>
                </ul>
                {/* SUBSCRIBTION AND SOCIAL MEDIA ICONS */}
            
                <div className='subscribtion'>
                    <h4>Subscribe to Newsletter</h4>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="ENTER YOUR E-MAIL"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="basic-addon2">Subscribe</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    
                    <img src={require('../css/icons/png/facebook.png')} alt=''/>
                    <img src={require('../css/icons/png/twitter.png')} alt=""/>
                    <img src={require('../css/icons/png/instagram.png')} alt=""/>
                </div>
            </div>
            <h6><span>&#xa9;</span>Copyright Made With Passion 2020</h6>            
        </div>
    )
}
