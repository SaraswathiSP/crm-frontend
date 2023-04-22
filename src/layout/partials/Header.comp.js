import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Header = () => {
    const history = useHistory();
    const logMeOut = () =>{
        history.push("/")
    }

  return (
   <Navbar collapseOnSelect variant='dark' bg="info"  expand="md"><Navbar.Brand>
        <img src={logo} alt="logo" width="50px" className='m-1'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
            {/* <Link to="/dashboard">Dashboard</Link>
            <Link to="/tickets">Tickets</Link>
            <Link to="/dashboard">Logout</Link> */}

            <Nav.Link  as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link  as={Link} to="/tickets">Tickets</Nav.Link>
            <Nav.Link  as={Link} onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
    </Navbar.Collapse>
   </Navbar>
  )
}

export default Header

