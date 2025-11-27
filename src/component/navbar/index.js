import "./index.css";
import logo from '../../static/logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">

            {/* LEFT SIDE → Logo + Title */}
            <div className="d-flex align-items-center">
            <img src={logo} width={50} alt="logo" />
            <a className="navbar-brand ms-2 text-white" href="/"><span className="text-org">K</span>ritohub <span className="text-green">T</span>echnologies PvtLtd.</a>
            </div>

           <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>


            {/* RIGHT SIDE → Menu Items */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">   {/* ms-auto = pushes to right */}

                <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
                </li>

                <li className="nav-item">
                <a className="nav-link text-white" href="#services">Services</a>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/careers">Careers</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
                </li>

            </ul>
            </div>
        </div>
    </nav>
  );
}
