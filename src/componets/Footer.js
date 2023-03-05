import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAmazon} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
function Footer() {
  return(
  <div>
    <div className="container bg-dark text-light" style={{"marginTop":"25rem","minWidth":"100%"}}>
    <div className="row">
    <div className="col">
    Get to Know Us<br/>
    <hr></hr>
    About Us<br/>
    Careers<br/>
    Press Releases<br/>
    Amazon Cares<br/>
    Amazon Science<br/>
    </div>
    <div className="col">
    Connect with Us<br/>
    <hr></hr>
    Facebook<br/>
    Twitter<br/>
    Instagram<br/>
    </div>
    <div className="col">
    Make Money with Us<br/>
    <hr></hr>
    Sell on Amazon<br/>
    Sell under Amazon Accelerator<br/>
    Protect and Build Your Brand<br/>
    Amazon Global Selling<br/>
    Become an Affiliate<br/>
    Fulfilment by Amazon<br/>
    Advertise Your Products<br/>
    Amazon Pay on Merchants<br/>
    </div>
    <div className="col">
    Let Us Help You<br/>
    <hr></hr>
    COVID-19 and Amazon<br/>
    Your Account<br/>
    Returns Centre<br/>
    100% Purchase Protection<br/>
    Amazon App Download<br/>
    Amazon Assistant Download<br/>
    Help<br/>
    </div>
  </div>
  <div className='text-center bg-dark text-light'>
      <FontAwesomeIcon icon={faAmazon} size='6x'/> <br/>
      © 1996-2022, Amazon.com, Inc. or its affiliate
  </div>
</div>
  
  </div>
  );
  
}

export default Footer;