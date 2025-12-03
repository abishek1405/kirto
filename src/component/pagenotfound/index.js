import Navbar from "../navbar";
import "./index.css";
import Footer from "../footer";
import page from '../../static/pagenotfound.jpg'

const Pagenotfound = () => {
  return (
    <div>
      <Navbar/>
       <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <img src={page} alt="asdf" />
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Pagenotfound;
