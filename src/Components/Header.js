import React from 'react'
import { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Nav,
    Collapse
} from 'reactstrap'

const Header= (props) => {

    const [isOpen, setIsOpen]=useState(false);
    const toggle = () => setIsOpen(!isOpen);

return(
<div>
  <Navbar
    color="success"
    expand="md"
    light>
    <NavbarBrand href="/">
      QuizZyup
    </NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/quiz"> Play Quiz </NavLink>
        </NavItem>
       </Nav>
    </Collapse>
  </Navbar>
</div>
);
};
export default Header 