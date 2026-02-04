import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container mt-5 pt-5 pb-4 text-secondary small">
      <div className="container">
        <div className="row gy-4">
          {/* Left Section */}
          <div className="col-lg-4 col-md-6">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              className="mb-3"
              style={{ width: "130px", height: "auto" }}
            />
            <p className="mb-2">
              &copy; 2010 - present, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="social-icons mt-3">
              <a href="https://www.instagram.com/zerodhaonline/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://x.com/zerodhaonline">
                <i className="fa-brands fa-threads"></i>
              </a>
              <a href="https://www.linkedin.com/company/zerodha/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/zerodha.social">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <hr className="my-2 w-50" />
              <a href="https://www.youtube.com/@zerodhaonline">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://t.me/zerodhain">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-dark mb-3 fw-semibold">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Philosophy</a>
              </li>
              <li>
                <a href="">Press & media</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Zerodha Cares (CSR)</a>
              </li>
              <li>
                <a href="">Zerodha.tech</a>
              </li>
              <li>
                <a href="">Open source</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-dark mb-3 fw-semibold">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Support portal</a>
              </li>
              <li>
                <a href="">How to file a complaint?</a>
              </li>
              <li>
                <a href="">Status of your complaints</a>
              </li>
              <li>
                <a href="">Bulletin</a>
              </li>
              <li>
                <a href="">Circular</a>
              </li>
              <li>
                <a href="">Z-Connect blog</a>
              </li>
              <li>
                <a href="">Downloads</a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-dark mb-3 fw-semibold">Account</h6>
            <ul className="list-unstyled">
              <li>
                <a href="">Open demat account</a>
              </li>
              <li>
                <a href="">Minor demat account</a>
              </li>
              <li>
                <a href="">NRI demat account</a>
              </li>
              <li>
                <a href="">Commodity</a>
              </li>
              <li>
                <a href="">Dematerialisation</a>
              </li>
              <li>
                <a href="">Fund transfer</a>
              </li>
              <li>
                <a href="">MTF</a>
              </li>
              <li>
                <a href="">Referral program</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal / Disclosure Section */}
        <div className="footer-legal mt-5 pt-3 border-top small text-muted">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633. Depository services through Zerodha Broking Ltd.
            – SEBI no.: IN-DP-431-2019. Registered Address: #153/154, 4th Cross,
            Dollars Colony, J.P Nagar 4th Phase, Bengaluru - 560078, India.
          </p>
          <p>
            For complaints, write to <a href="">complaints@zerodha.com</a> or{" "}
            <a href="">dp@zerodha.com</a>. Read Risk Disclosure Document as
            prescribed by SEBI | ICF.
          </p>
          <p>
            Procedure to file a complaint on <a href="">SEBI SCORES</a>:
            Register with mandatory details such as Name, PAN, Address, and
            Email ID for speedy redressal.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>
          <p>
            Attention investors: Update your contact details with your broker /
            DP. Receive OTP directly from the depository when pledging
            securities.
          </p>
          <p>
            India’s largest broker based on net worth as per{" "}
            <a href="">NSE broker factsheet</a>.
          </p>
          <p className="mt-3">
            “Prevent unauthorized transactions in your account. Update your
            mobile/email with your broker. Receive transaction details directly
            from Exchange. KYC is one-time — no need to repeat when you approach
            another intermediary. If anyone claims to trade on behalf of
            Zerodha, please <a href="">create a ticket here</a>.”
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
