import {useState} from 'react';
import {Navbar, Collapse, NavbarToggler, Nav, NavItem} from 'reactstrap'

const Header = () => {

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <h1>Dress me</h1>
        </Navbar>
    )
}

export default Header