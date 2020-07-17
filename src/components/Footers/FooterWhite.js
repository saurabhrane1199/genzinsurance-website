/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-white">
        <Container style={{textAlign:"center"}}>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> by GenZ Insurance
              </span>
            </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
