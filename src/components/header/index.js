import React from "react";
import {Navbar, NavbarBrand} from 'reactstrap';

const Header = () => {
  return(
      <div className="header">
          <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
              </div>
          </Navbar>
      </div>
  );
};

export default Header;