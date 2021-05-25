import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'

export default function Header() {
    return (
        <div>
            <Navbar bg="light" variant="light" className='navbar' >
                <Navbar.Brand href="#home" >myMarketPlace</Navbar.Brand>
                    <Nav className="mr-auto" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto" >
                        <Button variant="outline-secondary">Sign up</Button>
                        <Nav.Link href="#Signin">Sign in</Nav.Link>
                        <Nav.Link href="#Search">
                            <img src={require('../css/icons/png/search-symbol.png')} alt='heart-shape'/>
                        </Nav.Link>
                        <Nav.Link href="#favorites">
                            <img src={require('../css/icons/png/heart-shape-outline.png')} alt='heart-shape'/>
                        </Nav.Link>
                        <Nav.Link href="#shoppingCart">
                            <img src={require('../css/icons/png/shopping-cart-empty-side-view.png')} alt='shopping cart'/>
                        </Nav.Link>
                        
                    </Nav>
            </Navbar>
        </div>
    )
}
