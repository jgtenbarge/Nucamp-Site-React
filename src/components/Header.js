import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import NucampLogo from '../app/assets/img/logo.png';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import UserLoginForm from "../features/user/UserLoginForm";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/' className="ms-5">
                <img src={NucampLogo} alt='nucamp logo' className="float-start" />
                <h1 className="mt-1">NuCamp</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse navbar isOpen={menuOpen}>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className="nav-link" to='/'>
                            <i className="fa fa-home fa-lg">Home</i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/directory'>
                            <i className="fa fa-list fa-lg">Directory</i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/about'>
                            <i className="fa fa-info fa-lg">About</i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to='/contact'>
                            <i className="fa address-card fa-lg">Contact</i>
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar>
    );
}

export default Header;