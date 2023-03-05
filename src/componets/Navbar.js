import React from 'react';
import './Navbar.css';
import 'react-bootstrap'
import Logo from  '../images/1.png'
import Logo1 from '../images/2.png'
import Logo2 from '../images/3.png'
import Modal from '@mui/material/Modal';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart, faUserCircle,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
function Navbar() {
        let wish=useSelector(state=>state.wish)
        let cart=useSelector(state=>state.cart)
        let price=useSelector(state=>state.price)

        const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };
  
  return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
       <img className="navbar-brand img1" src={Logo} alt=''></img> 
      
      <FontAwesomeIcon icon={faLocationDot} className='add' size='2x' />  
        <div className="input-group mb-3 search" >
    <input type="text" className="form-control" placeholder="Search Amazon.in..." aria-label="Recipient's username" aria-describedby="basic-addon2" style={{"height":"2.2rem"}}/>
    <span className="input-group-text bg-warning" id="basic-addon2" style={{"height":"2.2rem"}}>
      <FontAwesomeIcon icon={faSearch} size="2x"></FontAwesomeIcon></span>
    </div>
    <img className="navbar-brand img1" src={Logo1} alt=''></img>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <FontAwesomeIcon icon={faUserCircle} size="1x" style={{"color":"whitesmoke","display":"inline"}}/> 
          <a className="nav-link active" aria-current="page" href="#" style={{"fontSize":"1.1rem","display":"inline"}}>
            Account
          </a>
        </li>
        <li className="nav-item">
            <div>
          <a className="nav-link active" href="#"  style={{"display":"inline"}}><FontAwesomeIcon icon={faHeart} size="2x" style={{"color":"white"}}/></a>
          <h5 className="text-center text-light" style={{"display":"inline"}}>{wish?.length}</h5></div>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  style={{"display":"inline"}} aria-disabled="true" onClick={handleOpen} >
            <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{"color":"white"}} /></a>
          <h5 className="text-center text-light" style={{"display":"inline"}}>{cart?.length}</h5>
          <Modal className=" mod" onClose={handleClose} open={open}>
        <div className='row row-col-3'>
        <h2 className='text-center'>Shopping Cart<FontAwesomeIcon icon={faShoppingCart} size='1x'></FontAwesomeIcon></h2>
        <hr/>
            <div className="col-10">{
            cart?.map((item, index)=>(<p className='text-center' key={index}>{item}</p>))
             }
            </div>
            <div className="col">{
            price?.map((item, index)=>(<p className='text-center' key={index}>{item}<br></br></p>))
            }
            </div>
            <Button className='w-25 mx-auto btn-warning'>Checkout</Button>
        </div>
      </Modal>
          
        </li>
      </ul>
  </div>
</nav>
  </div>;
}

export default Navbar;