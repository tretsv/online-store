import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

// import {setIsAuth} from '../store/UserStore';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <NavLink style={{color:"white"}} to={SHOP_ROUTE}>TretStore</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto">
                    <Button onClick={() => navigate(ADMIN_ROUTE)}>Admin</Button>
                    <Button onClick={() => logOut()}>Log out</Button>    
                </Nav>
                :
                <Nav className="ml-auto">
                    {/* <Button>Log in</Button> */}
                    <Button onClick={() => navigate(LOGIN_ROUTE)}>Sign up</Button>
                </Nav>
            }
            </Container>
        </Navbar>
    );
});

export default NavBar;