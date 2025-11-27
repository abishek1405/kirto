import { FaCode, FaMobileAlt, FaPenNib } from "react-icons/fa";
import Navbar from "../navbar";
import "./index.css";
import Footer from "../footer";

const Career = () => {
  return (
    <div>
      <Navbar/>
      <section className="career-section py-5">
      <div className="container text-center">

        <h1 className="fw-bold career-title mb-3">We Are Hiring</h1>
        <p className="lead mb-5 text-light">
          Join our growing team and build digital solutions that make an impact.
        </p>

        <div className="row justify-content-center">

          {/* Web Development */}
          <div className="col-md-4 mb-4">
            <div className="career-card p-4 shadow-lg">
              <FaCode className="career-icon" />
              <h3 className="fw-semibold mt-3">Web Developer</h3>
              <p className="text-muted">
                Build modern, responsive, and powerful web applications.
              </p>

              <a
                href="mailto:abishek@gmail.com?subject=Web Developer Application"
                className="btn btn-apply px-4 py-2 mt-2"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Mobile App Developer */}
          <div className="col-md-4 mb-4">
            <div className="career-card p-4 shadow-lg">
              <FaMobileAlt className="career-icon" />
              <h3 className="fw-semibold mt-3">Mobile App Developer</h3>
              <p className="text-muted">
                Create Android and iOS applications with high performance.
              </p>

              <a
                href="mailto:abishek@gmail.com?subject=Mobile App Developer Application"
                className="btn btn-apply px-4 py-2 mt-2"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* UI/UX Designer */}
          <div className="col-md-4 mb-4">
            <div className="career-card p-4 shadow-lg">
              <FaPenNib className="career-icon" />
              <h3 className="fw-semibold mt-3">UI/UX Designer</h3>
              <p className="text-muted">
                Design beautiful, smooth, and user-centered digital experiences.
              </p>

              <a
                href="mailto:abishek@gmail.com?subject=UI UX Designer Application"
                className="btn btn-apply px-4 py-2 mt-2"
              >
                Apply Now
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

export default Career;
