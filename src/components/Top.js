import React from 'react';
import './common.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row pp">
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
                <li className='col-3'><a href="/"><img src='../assets/img/facebook.png'></img></a></li>
                <li className='col-3'><a href="/"><img src='../assets/img/twitter.png'></img></a></li>
                <li className='col-3'><a href="/"><img src='../assets/img/skype.png'></img></a></li>
                <li className='col-3'><a href="/"><img src='../assets/img/linkedin.png'></img></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
