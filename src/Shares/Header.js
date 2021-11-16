
import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import UserInfoModal from '../pages/User/UserInfoModal/UserInfoModal';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Logout';
import img from '../images/baby.png'
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { user, logout } = useAuth();
    const headerHome = {
        color: 'rgba(243, 240, 191)',
    }
    const headerHomeHome = {
        color: 'rgba(204, 117, 132)',

    }
    const imglogo = {
        height: '70px',
        width: '70px'
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{
                backgroundColor: 'rgba(204, 117, 132)', color: 'rgba(243, 240, 191)', position: 'sticky',
                top: 0
            }} variant="dark">
                <Container>
                    <Navbar.Brand className="d-flex"><small className="mt-3">IBRAR'S SMILE</small><Link to="/"><div style={imglogo}><img src={img} alt="" /></div></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="no-underline" to="/"><Button style={headerHomeHome} >Home</Button></Link>
                            <Link className="no-underline" to="/explore"><Button style={headerHome} >Explore</Button></Link>
                            <Link className="no-underline" to="/dashboard"><Button style={headerHome} >Dashboard</Button></Link>
                            

                            {
                                user?.email ?
                                    <div className="md:flex justify-center items-center">
                                        <h6 className="text-white ml-4">Hi! {user.displayName}</h6>
                                        {
                                            user.photoURL ?
                                                (<img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full border-2 border-gray-300" src={user?.photoURL} alt="" />)
                                                :
                                                (<img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full border-2 border-gray-300" src="https://www.cccd.edu/_assets/images/Departments/NoProfile.png" alt="" />)
                                        }
                                        <Button style={headerHome} onClick={logout}><LogoutIcon />Log Out</Button>
                                    </div>
                                    : <Link className="no-underline text-white" to="/login"><Button style={headerHome} onClick={logout}><LoginIcon />Log In</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <UserInfoModal toggle={toggle} setToggle={setToggle} />
        </div>
    );
};

export default Header;