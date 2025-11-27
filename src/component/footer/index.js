import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import './index.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">

        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Kritohub Technologies Pvt Ltd</h5>
            <p className="small">
              We build modern, secure, high-performance websites and mobile apps.
              Partnered with <strong><a className="link-foot" href="https://learntek-innovations.web.app/">LearnTEK Innovations</a></strong> to deliver
              top-quality digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#why" className="text-light text-decoration-none">Why Choose Us</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
              <li><Link to="/careers" className="text-light text-decoration-none">Careers</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small mb-1">📞 <strong>+91 63824 22474</strong></p>
            <p className="small mb-1">📞 <strong>+91 63747 62751</strong></p>
            <p className="small mb-1">📧 learntekin@gmail.com</p>
            <p className="small mb-1">📧 kritohubtechnologies@gmail.com</p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3 fs-4">
              <a href="/" className="text-light"><FaFacebook /></a>
              <a href="/" className="text-light"><FaInstagram /></a>
              <a href="/" className="text-light"><FaLinkedin /></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Kritohub Technologies Pvt Ltd. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
