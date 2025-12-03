import { FaCode, FaMobileAlt, FaPenNib } from "react-icons/fa";
import Navbar from "../navbar";
import "./index.css";
import Footer from "../footer";
import abi from '../../static/abi.jpeg'
import rajesh from '../../static/rajesh.png'
import umaar  from '../../static/umaan.jpg'
import Sangami from '../../static/sangami.jpg'
import ashok from '../../static/ashok.png'

const Ourteam = () => {
  return (
    <div>
      <Navbar/>
      <section className="team-section py-5">
      <div className="container text-center">

        <h1 className="fw-bold career-title mb-3">Our Team</h1>
        <p className="lead mb-5 text-light">
          Join our growing team and build digital solutions that make an impact.
        </p>

        <div className="row justify-content-center">

          <div className="col-md-4 mb-4">
            <div className="career-card p-4 shadow-lg">
              <img src={abi} alt="asdf" className="profile-pic" />
              <h3 className="fw-semibold mt-3">Abishek A</h3>
              

              <p className="small text-muted">
                Expert in Dango, React, Node.js, Laravel and building responsive web apps & applications.
              </p>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="career-card p-4 shadow-lg">
              <img src={rajesh} alt="asdf" className="profile-pic" />
              <h3 className="fw-semibold mt-3">Rajeshwaran S</h3>
              

              <p className="small text-muted">
                Expert in React building responsive web apps & applications.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="career-card p-4 shadow-lg">
              <img src={umaar} alt="asdf" className="profile-pic" />
              <h3 className="fw-semibold mt-3">Umar AN</h3>
              

              <p className="small text-muted">
                Expert in Spring boot, ASP.NET and building responsive web apps & applications.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="career-card p-4 shadow-lg">
              <img src={Sangami} alt="asdf" className="profile-pic" />
              <h3 className="fw-semibold mt-3">Sangamithra R</h3>
              

              <p className="small text-muted">
                Expert in Dango, React, Node.js and building responsive web apps & applications.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="career-card p-4 shadow-lg">
              <img src={ashok} alt="asdf" className="profile-pic" />
              <h3 className="fw-semibold mt-3">Ashok A</h3>
              

              <p className="small text-muted">
                Expert in React and building responsive web apps & applications.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Ourteam;
