import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../styles/Button";
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short"   >
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Krimson Techno...</h3>
            <p>Hello we are here to serve you. contact us for web services</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get more updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />

              <input
                type="submit"
                value="Subscribe"
                autoComplete="off"
                placeholder="Email"
              />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="#">
                  <FaDiscord title="Discord" className="icons" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/krishna_chaudhary10/"
                  target="_blank"
                >
                  <FaInstagram title="follow in instagram" className="icons" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100022713880016"
                  target="_blank"
                >
                  <FaFacebook title="contact in facebook" className="icons" />
                </a>
              </div>

              <div>
                <a href="www.youtube.com">
                  <FaYoutube title="suscribe on youtube" className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>9800768098, 9869456555</h3>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Krimson Techno.. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

        .contact-short-btn {
            text-align: center;
            justify-self: flex-start;
        }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
