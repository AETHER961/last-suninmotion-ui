import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";

import redditIcon from "../assets/reddit.svg";
import twitterIcon from "../assets/twitter.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  const [withBg, setWithBg] = useState(false);
  const [showConnect, setShowConnect] = useState(true);
  const [clicked, setClicked] = useState(9);

  const onClick = (index) => {
    setClicked(index);
    setShow(false);
  };

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

  useEffect(() => {
    const sideNavigation = document.querySelector(".sideNavigation");
    let sideLinks = sideNavigation.querySelectorAll("li");
    sideLinks.forEach((item, i) => {
      item.addEventListener("click", function () {
        document.querySelector(".selected").classList.remove("selected");
        switch (i) {
          case 0:
            sideLinks[0].classList.toggle("selected");
            window.location.href = "#welcomeSection";
            break;
          case 1:
            sideLinks[1].classList.toggle("selected");
            window.location.href = "#storySection";
            break;
          case 2:
            sideLinks[2].classList.toggle("selected");
            window.location.href = "#benefitsSection";
            break;
          case 3:
            sideLinks[3].classList.toggle("selected");
            window.location.href = "#collectionSection";
            break;
          case 4:
            sideLinks[4].classList.toggle("selected");
            window.location.href = "#roadmapSection";
            break;
          case 5:
            sideLinks[5].classList.toggle("selected");
            window.location.href = "#teamSection";
            break;
          case 6:
            sideLinks[6].classList.toggle("selected");
            window.location.href = "#footerSection";
            break;
          default:
            window.location.href = "#welcomeSection";
        }
      });
    });
    window.addEventListener("wheel", function () {
      const sections = document.querySelectorAll(".my-page-section");
      let scrollTop = window.scrollY;
      sections.forEach(function (section, i) {
        if (
          section.offsetTop < scrollTop + window.innerHeight / 2 &&
          scrollTop < section.offsetTop + window.innerHeight / 2
        ) {
          document.querySelector(".selected").classList.remove("selected");
          sideLinks[i]?.classList.add("selected");
        }
      });
    });
  }, []);

  return (
    <>
      <ul className="sideNavigation" dir="rtl">
        <li className="selected"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
              <div className="offcanvasLinksContainer my-2 my-lg-0">
                <HashLink
                  smooth
                  to="/#storySection"
                  className={`${clicked === 1 ? "selectedLink" : ""}`}
                  onClick={() => onClick(1)}
                >
                  Story
                </HashLink>
                <HashLink
                  smooth
                  to="/#benefitsSection"
                  className={`${clicked === 2 ? "selectedLink" : ""}`}
                  onClick={() => onClick(2)}
                >
                  Benefits
                </HashLink>
                <HashLink
                  smooth
                  to="/#collectionSection"
                  className={`${clicked === 3 ? "selectedLink" : ""}`}
                  onClick={() => onClick(3)}
                >
                  Collection
                </HashLink>
                <HashLink
                  smooth
                  to="/#roadmapSection"
                  className={`${clicked === 4 ? "selectedLink" : ""}`}
                  onClick={() => onClick(4)}
                >
                  Road Map
                </HashLink>
                <HashLink
                  smooth
                  to="/#teamSection"
                  className={`${clicked === 5 ? "selectedLink" : ""}`}
                  onClick={() => onClick(5)}
                >
                  Team
                </HashLink>
                <HashLink
                  smooth
                  to="/mymints"
                  className={`${clicked === 6 ? "selectedLink" : ""}`}
                  onClick={() => onClick(6)}
                >
                  My Mints
                </HashLink>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
      <div className="position-fixed fixedSocialIcons d-flex justify-content-center align-items-center gap-3">
        <div className="socialContainer p-2 text-center">
          <img src={redditIcon} alt="reddit" />
        </div>
        <div className="socialContainer p-2 text-center">
          <img src={twitterIcon} alt="twitter" />
        </div>
      </div>
    </>
  );
};

export default Header;
