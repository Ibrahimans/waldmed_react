import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" > The Waldorf Medical Clinic </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar style={{ marginLeft: 'auto' }}>
                        <NavItem>
                            <NavLink href="/services/">Services</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>Office Policy & Info</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/office_policies/">
                                    Office Policies
                                </DropdownItem>
                                <DropdownItem href="/privacy_policies/">
                                    Privacy Policies
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/insurance/">
                                    Insurance
                                </DropdownItem>
                                {/* <DropdownItem href="/patient_education/">
                                    Patient Education
                                </DropdownItem> */}
                                <DropdownItem href="/patient_forms/">
                                    Patient Forms
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/telehealth/">Telehealth & Patient Portal</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about_us/">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact/">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;