import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

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