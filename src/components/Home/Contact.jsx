import React from 'react';
import './styles/Contact.css';
const Contact = () => {
  return (
    <div className="bg-info contact4 overflow-hidden position-relative">
      <div className="row no-gutters">
        <div className="container">
          <div className="col-lg-6 contact-box mb-4 mb-md-0">
            <div>
              <h1 className="title font-weight-light text-white mt-2" style={{fontFamily:"Edwardian Script",fontWeight:"bold",fontSize:"60px"}}>Contact Us</h1>
              <form className="mt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control text-white" type="text" placeholder="name" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input className="form-control text-white" type="email" placeholder="email address" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea className="form-control text-white" rows="3" placeholder="message"></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-center mt-2">
                    <button type="submit" className="btn bg-white text-inverse px-3 py-2"><span>Submit</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 right-image p-r-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
            width="100%" height="538" frameBorder="0" style={{ border: 0 }} allowFullScreen data-aos="fade-left" data-aos-duration="3000"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

