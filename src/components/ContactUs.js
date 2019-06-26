import React from 'react';
import config from '../../config';
export default function ContactUs() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider my-4" />
            <p className="text-muted mb-5">
              Ready to start your next project with us? Give us a call or send
              us an email and we will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
            <a className="d-block" href="/#">
              {config.phone}
            </a>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
            <a className="d-block" href={`mailto:${config.email}`}>
              {config.email}
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mt-5 mb-lg-0">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} className={`mx-2`}>
                  <i className={`fab fa-3x mb-3 ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
