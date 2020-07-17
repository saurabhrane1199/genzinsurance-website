import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg2.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title"><b>GenZ Insurance</b></h1>
              <h3 className="description">
                Peer-to-Peer Crop Insurance<br/>Secure your crops with Technology.
              </h3>
              <br />
              <Button
                className="btn-round mr-1"
                color="neutral"
                href="https://drive.google.com/file/d/1I3_DUOoO9t1FOmuQmXpU198Fkau9FQet/view?usp=sharing"
                target="_blank"
              >
                <i className="fa fa-play" />
                Watch video
              </Button>
              <Button
                className="btn-round"
                color="neutral"
                href ="https://drive.google.com/file/d/1pfxlIRvKygEalhpD3n0_rWDgwpJxLs9V/view?usp=sharing"
                type="button"
                target="_blank"
                outline
              >
                Download
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
