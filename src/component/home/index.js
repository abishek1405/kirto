import Navbar from "../navbar";
import "./index.css";
import hero from "../../static/hero.webp"
import { FaGlobe, FaPersonChalkboard , FaUsers, FaClipboardList, FaDatabase, FaHammer } from "react-icons/fa6";
import {
  FaShield,
  FaHandsHoldingChild, // trust / care
  FaClock,
  FaHeadset,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa6";
import aboutImg from "../../static/about.webp";
import Footer from "../footer";



const services = [
  {
    id: 1,
    icon: <FaGlobe />,
    title: "College Website",
    text: "Responsive, SEO-friendly websites: Home, Departments, Courses, Gallery, Events and Online Admission.",
  },
  {
    id: 2,
    icon: <FaPersonChalkboard  />,
    title: "Faculty Portal",
    text: "Local/Cloud faculty portal for attendance, assignments, internal marks and department controls.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Student Portal",
    text: "Student login, assignments submission, project tracking, timetable, and result access.",
  },
  {
    id: 4,
    icon: <FaClipboardList />,
    title: "Admission & Forms",
    text: "Online admission forms, automated notifications, and document upload workflows.",
  },
  {
    id: 5,
    icon: <FaDatabase />,
    title: "ERP & Database",
    text: "Custom modules: fees management, library, transport, hostel & secure centralized DB.",
  },
  {
    id: 6,
    icon: <FaHammer />,
    title: "Maintenance & Hosting",
    text: "Hosting setup, SSL, backups, uptime monitoring and on-demand feature development.",
  },
];



const reasons = [
  {
    id: 1,
    icon: <FaCertificate />,
    title: "ISO Registered",
    text: "We are an ISO-registered company formal processes and reliable delivery.",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: "Expert Developers",
    text: "Skilled in Django, MERN and modern frontend tech we build stable, maintainable systems.",
  },
  {
    id: 3,
    icon: <FaShield />,
    title: "Secure & Private",
    text: "Secure data storage and local-hosted faculty portals when colleges want data on-premise.",
  },
  {
    id: 4,
    icon: <FaClock />,
    title: "Fast Delivery",
    text: "Clear timelines and fast turnarounds get a working website or portal in weeks, not months.",
  },
  {
    id: 5,
    icon: <FaHandsHoldingChild />,
    title: "College-first Approach",
    text: "We design features that actually make administrative work easier for colleges and faculty.",
  },
  {
    id: 6,
    icon: <FaHeadset />,
    title: "Support & Training",
    text: "Onboarding for staff, continued support and maintenance packages available.",
  },
];


export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* ----hero---- */}
       <div className="hero-section d-flex justify-content-center align-items-center text-center"style={{ backgroundImage: `url(${hero})` }}>
          <div className="hero-content">
            <h1 className="hero-title">Build Your College Future With Us</h1>
            <p className="hero-subtitle">
              We create professional, modern & responsive college websites with
              portals, dashboards & digital tools.
            </p>
          </div>
        </div>

      {/* ----Services---- */}


        <section className="services-section" id="services">
            <div className="container">
              <div className="services-header text-center">
                <h2 id="services">What We Do</h2>
                <p className="lead">Complete digital solutions tailored for colleges and school educational institutes.</p>
              </div>

              <div className="services-grid">
                {services.map((s) => (
                  <article className="service-card" key={s.id}>
                    <div className="service-icon" aria-hidden="true">{s.icon}</div>
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-text">{s.text}</p>
                    <div className="service-actions">
                      <a href="#contact"><button className="btn-primary-small">Request Demo</button></a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section> 

          {/* ----Why choose us---- */}
          <section className="why-section" id="why">
            <div className="why-container">
              <div className="why-intro">
                <h2>Why Choose Us</h2>
                <p className="why-sub">
                  We build focused digital solutions for colleges secure, easy to use,
                  and built to scale with your needs.
                </p>
              </div>

              <div className="why-grid">
                {reasons.map((r) => (
                  <article className="why-card" key={r.id}>
                    <div className="why-icon" aria-hidden="true">{r.icon}</div>
                    <h3 className="why-title">{r.title}</h3>
                    <p className="why-text">{r.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>


        {/* ----contact form---- */}
        <section className="about-section py-5">
          <div className="container">
            <div className="row align-items-center">

              {/* Left side image */}
              <div className="col-md-6 mb-4">
                <img
                  src={aboutImg}
                  alt="About us"
                  className="img-fluid rounded shadow"
                />
              </div>

              {/* Right side text */}
              <div className="col-md-6" id="about">
                <h2 className="fw-bold mb-3">About Us</h2>
                <p className="text-white about-p fs-5">
                  We are a dedicated web development team focused on creating fast,
                  secure, and user-friendly websites for colleges.
                </p>

                <p className="text-white about-p fs-5">
                  With expertise in modern technologies and a passion for
                  problem-solving, we deliver high-quality digital solutions that
                  help organizations grow online.
                </p>

                <p className="text-white about-p fs-5">
                  Our work is defined by transparency, timely delivery, and a
                  commitment to long-term support for every client.
                </p>

                <p className="text-white about-p fs-5">
                  This specialised college web-development service is brought to you through 
                  the collaboration of <strong className="com-name">Kritohub Technologies Pvt. Ltd.</strong> and 
                  <strong className="com-name"> LearnTEK Innovations</strong>. Together, we combine our skills, 
                  experience, and passion to deliver modern, reliable and future-ready 
                  digital solutions. This partnership marks a major milestone in our journey, 
                  as we step confidently into the industry to provide meaningful value to 
                  educational institutions.
                </p>

              </div>

            </div>
          </div>
        </section>
        <Footer/>
    </div>
  );
}





