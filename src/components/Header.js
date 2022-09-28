import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [withBg, setWithBg] = useState(false);
  const [showConnect, setShowConnect] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.screen.width < 700 ? setShowConnect(false) : setShowConnect(true);
    window.addEventListener("resize", () => {
      window.screen.width < 700 ? setShowConnect(false) : setShowConnect(true);
    });
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setWithBg(true) : setWithBg(false);
    });
  }, []);

  return (
    <Navbar
      key={false}
      className={`my-navbar ${withBg ? "nav-bg" : ""}`}
      fixed="top"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="alt" />
        </Navbar.Brand>
        <Navbar id={`offcanvasNavbar-expand-sm`}>
          <Nav className=" ms-auto my-lg-0">
            {showConnect && (
              <div className="d-flex nav-connect-btn ms-auto me-3">
                <p className="m-0">Connect Wallet</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 3.99999H1.5V3.49999L12.5 2.61999V3.49999H14V1.99999C14 0.899986 13.109 0.127986 12.021 0.282986L1.98 1.71699C0.891 1.87299 0 2.89999 0 3.99999V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V5.99999C16 5.46955 15.7893 4.96085 15.4142 4.58577C15.0391 4.2107 14.5304 3.99999 14 3.99999V3.99999ZM12.5 11.006C12.303 11.0059 12.1078 10.967 11.9258 10.8916C11.7438 10.8161 11.5784 10.7055 11.4391 10.5661C11.2998 10.4268 11.1894 10.2613 11.114 10.0792C11.0387 9.89717 10.9999 9.70204 11 9.50499C11.0001 9.30794 11.0389 9.11283 11.1144 8.93081C11.1899 8.74879 11.3005 8.58341 11.4398 8.44412C11.5792 8.30483 11.7447 8.19436 11.9267 8.11901C12.1088 8.04367 12.304 8.00492 12.501 8.00499C12.899 8.00512 13.2806 8.16333 13.5619 8.44483C13.8432 8.72632 14.0011 9.10803 14.001 9.50599C14.0009 9.90394 13.8427 10.2856 13.5612 10.5669C13.2797 10.8482 12.898 11.0061 12.5 11.006Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
            <Nav.Link onClick={handleShow} className="align-self-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1.5H24"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 9H24"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 16.5H24"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar>
        {/* backdrop={false}*/}
        <Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-sm`}
              className="offTitle"
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="offcanvasLinksContainer my-2 my-lg-0">
              <Nav.Link href="#action1">Story</Nav.Link>
              <Nav.Link href="#action2">Benefits</Nav.Link>
              <Nav.Link href="#action3">Collection</Nav.Link>
              <Nav.Link href="#action4">Road Map</Nav.Link>
              <Nav.Link href="#action5">Team</Nav.Link>
              <Nav.Link href="#action6">Mint</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
