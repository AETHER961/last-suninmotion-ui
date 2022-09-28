import React from "react";
import { useNavigate } from "react-router-dom";
import useMobileType from "../hooks/useMobileType";
import FadingSlider from "./FadingSlider";
import solim from "../assets/insects/solim.png";

const Welcome = () => {
  const { isMobile } = useMobileType();
  const navigate = useNavigate();

  return (
    <section className="welcomeSection px-2 position-relative">
      {!isMobile ? (
        <div className="row m-0">
          <div className="col-6 p-0">
            <h1 className="hello-text">
              Hello
              <br />
              World
            </h1>
            <button
              onClick={() => navigate("/minting")}
              className="d-flex align-items-center justify-content-center mintyourown gap-3"
            >
              <p className="m-0">MINT YOUR OWN</p>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0544 1.38796C6.92943 1.51191 6.83024 1.65937 6.76255 1.82185C6.69485 1.98433 6.66 2.15861 6.66 2.33462C6.66 2.51064 6.69485 2.68491 6.76255 2.84739C6.83024 3.00987 6.92943 3.15734 7.0544 3.28129L11.4544 7.66796L1.3344 7.66796C0.980779 7.66796 0.641641 7.80843 0.391592 8.05848C0.141544 8.30853 0.00106775 8.64767 0.00106777 9.00129C0.00106778 9.35491 0.141544 9.69405 0.391592 9.9441C0.641641 10.1941 0.980779 10.3346 1.3344 10.3346L11.4544 10.3346L7.0544 14.7213C6.80333 14.9724 6.66228 15.3129 6.66228 15.668C6.66228 16.023 6.80333 16.3636 7.0544 16.6146C7.30547 16.8657 7.646 17.0067 8.00107 17.0067C8.35614 17.0067 8.69666 16.8657 8.94773 16.6146L15.6144 9.94796C15.7358 9.82115 15.8309 9.67162 15.8944 9.50796C15.9649 9.34835 16.0014 9.17578 16.0014 9.00129C16.0014 8.82679 15.9649 8.65422 15.8944 8.49462C15.8309 8.33095 15.7358 8.18143 15.6144 8.05462L8.94773 1.38796C8.82378 1.26299 8.67632 1.16379 8.51384 1.0961C8.35136 1.02841 8.17708 0.993559 8.00107 0.993559C7.82505 0.993559 7.65078 1.02841 7.4883 1.0961C7.32582 1.16379 7.17835 1.26299 7.0544 1.38796Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="col-6 p-0">
            <FadingSlider />
          </div>
        </div>
      ) : (
        <div className="row m-0 px-2">
          <div className="col-12 p-0  ">
            <h1 className="hello-text">
              Hello
              <br />
              World
            </h1>
            <button
              onClick={() => navigate("/minting")}
              className="d-flex align-items-center justify-content-center mintyourown gap-3"
            >
              <p className="m-0">MINT YOUR OWN</p>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.0544 1.38796C6.92943 1.51191 6.83024 1.65937 6.76255 1.82185C6.69485 1.98433 6.66 2.15861 6.66 2.33462C6.66 2.51064 6.69485 2.68491 6.76255 2.84739C6.83024 3.00987 6.92943 3.15734 7.0544 3.28129L11.4544 7.66796L1.3344 7.66796C0.980779 7.66796 0.641641 7.80843 0.391592 8.05848C0.141544 8.30853 0.00106775 8.64767 0.00106777 9.00129C0.00106778 9.35491 0.141544 9.69405 0.391592 9.9441C0.641641 10.1941 0.980779 10.3346 1.3344 10.3346L11.4544 10.3346L7.0544 14.7213C6.80333 14.9724 6.66228 15.3129 6.66228 15.668C6.66228 16.023 6.80333 16.3636 7.0544 16.6146C7.30547 16.8657 7.646 17.0067 8.00107 17.0067C8.35614 17.0067 8.69666 16.8657 8.94773 16.6146L15.6144 9.94796C15.7358 9.82115 15.8309 9.67162 15.8944 9.50796C15.9649 9.34835 16.0014 9.17578 16.0014 9.00129C16.0014 8.82679 15.9649 8.65422 15.8944 8.49462C15.8309 8.33095 15.7358 8.18143 15.6144 8.05462L8.94773 1.38796C8.82378 1.26299 8.67632 1.16379 8.51384 1.0961C8.35136 1.02841 8.17708 0.993559 8.00107 0.993559C7.82505 0.993559 7.65078 1.02841 7.4883 1.0961C7.32582 1.16379 7.17835 1.26299 7.0544 1.38796Z"
                  fill="white"
                />
              </svg>
            </button>
            <img src={solim} alt="solim" className="mobileWelcomeInsect" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Welcome;
