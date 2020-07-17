import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

// core components

function MultiDropdownNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("bg-info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        id="navbar-main"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
              GenZ Insurance
              <img
                alt="..."
                src={require("assets/img/genz.png")}
                width="50px"
                style = {
                   {
                    float: "left",
                    marginTop: "-15px",
                    marginRight : "20px"
                  }
                }
              /> 
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              GenZ
            </UncontrolledTooltip>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MultiDropdownNavbar;
