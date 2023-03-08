import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

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
  DropdownToggle,
} from "reactstrap";

const WALDMED_ADMIN_GROUP = "Admin";

const NavigationBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const signOut = async () => {
    try {
      await Auth.signOut();
      window.location.replace("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  const fetchAdminStatus = async (user) => {
    if (!user) return;

    const session = await Auth.currentSession();
    const _isAdmin = session.idToken.payload["cognito:groups"]
      ? session.idToken.payload["cognito:groups"].includes(WALDMED_ADMIN_GROUP)
      : false;
    setIsAdmin(_isAdmin);
  };

  useEffect(() => {
    fetchAdminStatus(user);
  }, [user]);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{ paddingLeft: "1vw" }}>
          {" "}
          The Waldorf Medical Clinic{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar style={{ marginLeft: "auto" }}>
            <NavItem style={{ paddingLeft: "1vw" }}>
              <NavLink href="/services/">Services</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ paddingLeft: "1vw" }}>
                Office Policy & Info
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/office_policies/">
                  Office Policies
                </DropdownItem>
                <DropdownItem href="/privacy_policies/">
                  Privacy Policies
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/insurance/">Insurance</DropdownItem>
                <DropdownItem href="/patient_forms/">
                  Patient Forms
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem style={{ paddingLeft: "1vw" }}>
              <NavLink href="/telehealth/">Telehealth & Patient Portal</NavLink>
            </NavItem>
            <NavItem style={{ paddingLeft: "1vw" }}>
              <NavLink href="/about_us/">About Us</NavLink>
            </NavItem>
            <NavItem style={{ paddingLeft: "1vw" }}>
              <NavLink href="/contact/">Contact Us</NavLink>
            </NavItem>
            {/* {Boolean(user) && (
              <NavItem style={{ paddingLeft: "1vw" }}>
                <NavLink href="/bloodpressure/">
                  Blood Pressure Monitoring
                </NavLink>
              </NavItem>
            )} */}
            {isAdmin && (
              <NavItem style={{ paddingLeft: "1vw" }}>
                <NavLink href="/referrals">
                  Referrals
                </NavLink>
              </NavItem>
            )}
            {!Boolean(user) && (
              <NavItem style={{ paddingLeft: "1vw" }}>
                <NavLink href="/sign-in">Sign In</NavLink>
              </NavItem>
            )}
            {isAdmin && (
              <NavItem style={{ paddingLeft: "1vw" }}>
                <NavLink href="/bloodpressure/admin">Admin BP</NavLink>
              </NavItem>
            )}
            {isAdmin && (
              <NavItem style={{ paddingLeft: "1vw" }}>
                <NavLink href="/sms">SMS Tool</NavLink>
              </NavItem>
            )}
            {Boolean(user) && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ paddingLeft: "1vw" }}>
                  {user.attributes.email}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
