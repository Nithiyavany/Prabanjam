import React from 'react'; 
import { Link } from 'react-router-dom';

function Homebar() {
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarText");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">PRABANJAM NEWS</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarText" 
          aria-controls="navbarText" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={closeNavbar}>Home</Link> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://tamilwin.com/canada" target="_blank" rel="noopener noreferrer" onClick={closeNavbar}>News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://cineulagam.com/" target="_blank" rel="noopener noreferrer" onClick={closeNavbar}>Cinema</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://manithan.com/" target="_blank" rel="noopener noreferrer" onClick={closeNavbar}>Manithan</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://ibcbakthi.com/" target="_blank" rel="noopener noreferrer" onClick={closeNavbar}>Devotional</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Homebar;
