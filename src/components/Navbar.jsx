import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date and time every second
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link1"
                  href="https://ripbook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rip Book
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link1" to="/contact">
                  Advertisements
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ color:'red', fontweight:"bold", textAlign: "Left", padding: "15px" }}>
        {currentDateTime.toLocaleString()}
      </div>
    </div>
  );
}

export default Navbar;
