import React from 'react';
import {Link} from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

const Header = () => {
    return (
        <MDBNavbar className='navBar' dark expand="md">
          <MDBNavbarBrand>
          <MDBIcon icon="hotdog" /><strong className="white-text"> Hotdog Spaceship</strong> <MDBIcon icon="space-shuttle" />
          </MDBNavbarBrand>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="games">Games</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="profile">Profile</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
        );
      }

    // return <div>
    //     <header>
    //         <h1>Hotdog Spaceship</h1>
    //         <nav>
    //       <Link to={`/games`} >Games </Link> |
    //       <Link to={`/Profile`} > Profile</Link>
    //     </nav>
    //     </header>
    // </div>


export default Header