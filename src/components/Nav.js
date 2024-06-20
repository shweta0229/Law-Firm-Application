import React, { useEffect, useState } from 'react';
import './common.css'; // Assuming you create and import a separate CSS file

const Nav = () => {
  const [navbarClass, setNavbarClass] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarClass('fixed-top bg-dark');
    } else {
      setNavbarClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col col-lg-10 col-12">
                <div className="contact">
                  <ul className="clearfix row">
                    <li className='col-3'><span>Call Us:</span> 548978478</li>
                    <li className='col-3'><span>Email us:</span> demo@example.com</li>
                    <li className='col-3'><span>Our address:</span> 45 Dreem street Austria</li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-2 col-12">
                <div className="social">
                  <ul className="sociallink row">
                    <li className='col-3'><a href="/"><img src='../assets/img/facebook.png' alt="facebook"></img></a></li>
                    <li className='col-3'><a href="/"><img src='../assets/img/twitter.png' alt="twitter"></img></a></li>
                    <li className='col-3'><a href="/"><img src='../assets/img/skype.png' alt="skype"></img></a></li>
                    <li className='col-3'><a href="/"><img src='../assets/img/linkedin.png' alt="linkedin"></img></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={navbarClass}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div className='navabr-heading col-2'>
                <a className="navbar-brand " href="#">
                  <img src='../assets/img/logo.png' alt="logo"></img>
                </a>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Home
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Pages
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Service
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Project
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Blog
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className='cart-search-content row'>
                <div className='nav-img col-2 ab'><img src='../assets/img/search.png' alt="search"></img></div>
                <div className='nav-img col-2'><img src='../assets/img/basket.png' alt="basket"></img></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;
