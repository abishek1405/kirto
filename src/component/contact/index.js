import Navbar from "../navbar";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import "./index.css";
import Footer from "../footer";

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <section className="contact-section py-5">
            <div className="container">
            <div className="row justify-content-center text-center">

            <div className="col-lg-8">
                <h1 className="fw-bold mb-3 contact-title">Contact Us</h1>
                <p className="lead text-light mb-4">
                We're here to help your college or business go digital.  
                Connect with us anytime. we reply fast and professionally.
                </p>

                {/* Contact Card */}
                <div className="contact-card mx-auto p-4 shadow-lg">

                <h3 className="fw-semibold mb-3">Let's Work Together</h3>

                
                <div className="contact-item d-flex align-items-center mb-3">
                    <FaPhoneAlt className="icon" />
                    <span className="ms-3 fs-5 fw-semibold">+91 63747 62751</span>
                </div>
                <div className="contact-item d-flex align-items-center mb-3">
                    <FaPhoneAlt className="icon" />
                    <span className="ms-3 fs-5 fw-semibold">+91 63824 22474</span>
                </div>
                

                
                <div className="contact-item d-flex align-items-center mb-3">
                    <FaEnvelope className="icon" />
                    <span className="ms-3 fs-5 fw-semibold">learntekin@gmail.com</span>
                </div>

                <div className="contact-item d-flex align-items-center mb-3">
                    <FaEnvelope className="icon" />
                    <span className="ms-3 fs-5 fw-semibold">kritohubtechnologies@gmail.com</span>
                </div>

                <div className="contact-item d-flex align-items-center mb-4">
                    <FaLocationArrow className="icon" />
                    <span className="ms-3 fs-5 fw-semibold">Tamil Nadu, India</span>
                </div>

                {/* Button */}
                <a href="tel:+916374762751" className="btn btn-call-now px-4 py-2">
                    📞 Call Now
                </a>
                </div>

            </div>
            </div>
        </div>
        </section>
    <Footer/>
    </div>
  );
};

export default ContactUs;
