import React from 'react';
import './common.css'
const Casestudy = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-titles text-center">
              <div className="icon mb-3">
              </div>
              <span>Here Our Best Work</span>
              <h2>Recent Case Studies</h2>
              <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sit amet adipiscing</p>
            </div>
          </div>
        </div>
        <div className='photo-row'>
            <div className='container'>
            <div className='rowss'>
                <div>
                <img className='photocourt' src='../assets/img/lowservice.jpg' ></img>
                </div>
                <div>
                <img className='photocourt' src='../assets/img/lowservice.jpg' ></img>
                </div>                
                <div>
                <img className='photocourt' src='../assets/img/lowservice.jpg' ></img>
                </div>
                <div>
                <img className='photocourt' src='../assets/img/lowservice.jpg' ></img>
                </div>
            </div>
            </div>
            
        </div>
      </div>
    </>
  );
}

export default Casestudy;
