import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './common.css'

const Smallcard = () => {
  return (
    <>
      <section className="hero-features-section">
        <div className="container">
          <div className="hero-features-wrap d-flex justify-content-between">
            <div className="hero-features-item text-center">
              <div className="hero-features-icon mb-2">
                <img src='../assets/img/cat.png'></img>
              </div>
              <div className="hero-features-text">
                <span>Family Law plan</span>
                <h4>Family Law</h4>
              </div>
            </div>
            <div className="hero-features-item text-center">
              <div className="hero-features-icon mb-2">
              <img src='../assets/img/cat.png'></img>              
              </div>
              <div className="hero-features-text">
                <span>Personal injury plan</span>
                <h4>Personal injury</h4>
              </div>
            </div>
            <div className="hero-features-item text-center">
              <div className="hero-features-icon mb-2">
              <img src='../assets/img/cat.png'></img>              
              </div>
              <div className="hero-features-text">
                <span>Criminal plan</span>
                <h4>Criminal Law</h4>
              </div>
            </div>
            <div className="hero-features-item text-center">
              <div className="hero-features-icon mb-2">
              <img src='../assets/img/cat.png'></img>              
              </div>
              <div className="hero-features-text">
                <span>Business Law</span>
                <h4>Business law plan</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smallcard;
