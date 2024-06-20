import React from 'react';
import './common.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="content-area clearfix">
        <div className="contact-info-col">
          <div className="contact-info">
            <ul>
              <li>
                <i className="fi flaticon-home-3"></i>
                <h4>Head Office</h4>
                <p>54, Dahs udin sorok, Melborn Austria</p>
              </li>
              <li>
                <i className="fi flaticon-email"></i>
                <h4>Email Address</h4>
                <p>demo@example.com</p>
              </li>
              <li>
                <i className="fi flaticon-support"></i>
                <h4>Telephone</h4>
                <p>654756175+5474</p>
              </li>
              <li>
                <i className="fi flaticon-clock"></i>
                <h4>Office Hour</h4>
                <p>Mon-Sun: 10am – 7pm</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form-col">
          <div className="section-title-s2">
            <div className="icon">
              <i className="fi flaticon-balance"></i>
            </div>
            <span>Contact form</span>
            <h2>
              Need Consultancy,
              <br />
              Request A Free Quote
            </h2>
            <p>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum. Nam quam nuncIt
              showed a lady fitted out with a fur hat and fur boa who sat
              upright, raising a heavy
            </p>
          </div>
          <div className="contact-form">
            <form method="post" className="contact-validation-active" id="contact-form-main">
              <div className="form-field">
                <input type="text" name="name" className="form-control" placeholder="Name*" value="" />
              </div>
              <div className="form-field">
                <input type="email" name="email" className="form-control" placeholder="Email*" value="" />
              </div>
              <div className="form-field">
                <input type="phone" name="phone" className="form-control" placeholder="Your phone" value="" />
              </div>
              <div className="form-field">
                <select className="form-control" name="subject">
                  <option disabled>Contact subject</option>
                  <option>Family Law</option>
                  <option>Personal Injury</option>
                  <option>Criminal Law</option>
                  <option>Education Law</option>
                  <option>Business Law</option>
                </select>
              </div>
              <div className="form-field fullwidth">
                <textarea name="message" className="form-control" placeholder="Case Description..."></textarea>
              </div>
              <div className="submit-area">
                <button type="submit" className="theme-btn-s3">Submit It Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
