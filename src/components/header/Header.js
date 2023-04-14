import React, { useState } from 'react';

import background from '../../images/header.jpg'
import logo from '../../images/logo.png'
import pin from '../../images/icon-ionic-ios-pin.svg'
import phone from '../../images/icon-awesome-phone-alt.svg'
import mail from '../../images/icon-zocial-email.svg'
import twit from '../../images/icon-ionic-twitter.svg'
import fb from '../../images/icon-zocial-facebook.svg'
import ln from '../../images/icon-zocial-linkedin.svg'
import guide from '../../images/icon-guide.svg'

import cham from '../../images/menu-chamber.jpg'
import mem from '../../images/menu-membership.jpg'
import prog from '../../images/menu-programs.jpg'
import event from '../../images/menu-events.jpg'
import adv from '../../images/menu-advocacy.jpg'
import res from '../../images/menu-resources.jpg'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    return (
      <div style={{backgroundImage: `url(${background})`}} className="Header">
        <div className='redBar'></div>
        <div className='headerTop'>
            <div className='topWrap'>
                <div className='infoLeft'>
                    <div className='infoTop'>
                        <img src={`${pin}`} alt="" />
                        <p>315 S. Cedar Street, Owasso, OK 74055</p>
                    </div>
                    <div className='infoBottom'>
                        <div className='infoBottomLeft'>
                            <img src={`${phone}`} alt="" />
                            <p>918.272.2141</p>
                        </div>
                        <div className='infoBottomRight'>
                            <img src={`${mail}`} alt="" />
                            <p>info@owassochamber.com</p>
                        </div>
                    </div>
                </div>
                <div className='col-center'>
                    <div className='logo'>
                        <a href='https://owassochamber.com'>
                            <img src={`${logo}`} alt="Owasso Chambbe of Commerce Logo" />
                        </a>
                    </div>
                </div>
                <div className='col-right'>
                    <div className='rightTop'>
                        <div className='socialBlock'>
                            <a href="" target="_blank">
                                <img src={`${twit}`} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={`${fb}`} alt="" />
                            </a>
                            <a href="" target="_blank">
                                <img src={`${ln}`} alt="" />
                            </a>
                        </div>
                        <a href=''>
                            <div className='joinButt'>
                                <p>JOIN NOW</p>
                            </div>
                        </a>
                        <a href=''>
                            <div className='logButt'>
                                <p>Member Log-In</p>
                            </div>
                        </a>
                    </div>
                    <div className='rightBottom'>
                        <a href="" target="_blank">
                            <div className='rightBottomWrap'>
                                <img src={`${guide}`} alt="" />
                                <p>Relocation Guide</p> 
                            </div>
                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='menuWrap'>
            <div className='bubbleBar'>
                <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} id="img1" className='imgBox'>
                    <img src={`${cham}`} alt="" />
                    <p>Our Chamber</p>
                </div>
                <div onMouseEnter={() => setIsOpen2(true)} onMouseLeave={() => setIsOpen2(false)} id="img2" className='imgBox hov2'>
                    <img src={`${mem}`} alt="" />
                    <p>Membership</p>
                </div>
                <div onMouseEnter={() => setIsOpen3(true)} onMouseLeave={() => setIsOpen3(false)} id="img3" className='imgBox hov3'>
                    <img src={`${prog}`} alt="" />
                    <p>Programs</p>
                </div>
                <div onMouseEnter={() => setIsOpen4(true)} onMouseLeave={() => setIsOpen4(false)} id="img4" className='imgBox hov4'>
                    <img src={`${event}`} alt="" />
                    <p>Events</p>
                </div>
                <div onMouseEnter={() => setIsOpen5(false)} onMouseLeave={() => setIsOpen5(false)} id="img5" className='imgBox hov5'>
                    <img src={`${adv}`} alt="" />
                    <p>Advocacy</p>
                </div>
                <div onMouseEnter={() => setIsOpen6(true)} onMouseLeave={() => setIsOpen6(false)} id="img6" className='imgBox hov6'>
                    <img src={`${res}`} alt="" />
                    <p>Resources</p>
                </div>
            </div>
            <div className='popBar'>
                <div className='popHold'>
                  {isOpen && <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className='popBox'>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Staff & Board</a></li>
                            <li><a href="">Ambassadors</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>}  
                </div>
                <div className='popHold'>
                  {isOpen2 && <div onMouseEnter={() => setIsOpen2(true)} onMouseLeave={() => setIsOpen2(false)} className='popBox'>
                  <ul>
                            <li><a href="">Member Benefits</a></li>
                            <li><a href="">Get Involved</a></li>
                            <li><a href="">Member Directory</a></li>
                            <li><a href="">Job Opportunities</a></li>
                            <li><a href="">Submit an Event</a></li>
                            <li><a href="">Member Login</a></li>
                            <li><a href="">Investment Opportunities</a></li>
                        </ul>
                    </div>}  
                </div>
                <div className='popHold'>
                  {isOpen3 && <div onMouseEnter={() => setIsOpen3(true)} onMouseLeave={() => setIsOpen3(false)} className='popBox'>
                  <ul>
                            <li><a href="">Leadership Owasso</a></li>
                            <li><a href="">Ambassadors Program</a></li>
                        </ul>
                    </div>}  
                </div>
                <div className='popHold'>
                  {isOpen4 && <div onMouseEnter={() => setIsOpen4(true)} onMouseLeave={() => setIsOpen4(false)} className='popBox'>
                  <ul>
                            <li><a href="">Events Calendar</a></li>
                            <li><a href="">Annual Events</a></li>
                        </ul>
                    </div>}  
                </div>
                <div className='popHold'>
                  {isOpen5 && <div className='popBox'></div>}  
                </div>
                <div className='popHold'>
                  {isOpen6 && <div onMouseEnter={() => setIsOpen6(true)} onMouseLeave={() => setIsOpen6(false)} className='popBox'>
                  <ul>
                            <li><a href="">Helpful Numbers</a></li>
                            <li><a href="">Relocation Guide</a></li>
                            <li><a href="">Subscribe</a></li>
                        </ul>
                    </div>}  
                </div>
            </div>
            
        </div>
      </div>
    );
  }
  
  export default Header;