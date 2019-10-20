import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section class="colorlib-contact center-contact" data-section="contact">
          <div class="colorlib-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span class="heading-meta-contact">Get in Touch</span>
              <h2 class="colorlib-heading">Contact</h2>
            </div>
          </div>
          <div class="row">
          <div class="col-md-10 col-md-push-1">
            <div class="row contact-form">
              <div class="col-md-12 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                <form action="">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject" />
                  </div>
                  <div class="form-group">
                    <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" class="btn btn-primary btn-send-message" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>

          <div class="row">
                  <div class="col-md-3 col-md-push-1 info">
                    <div class="contact-info">
                        <i class="theme-color ti-location-pin"></i>
                        <h6 class="dark-color">Our Address</h6>
                        <p>Shamad House, Bangalore<br />Karnataka, India.</p>
                    </div>
                  </div>
                  <div class="col-md-4 col-md-push-1 ">
                    <div class="contact-info ">
                      <i class="theme-color ti-mobile"></i>
                      <h6 class="dark-color">Our Phone</h6>
                      <p>Office: +9185-5398-4075</p><br />
                    </div>
                  </div>
                  <div class="col-md-4 col-md-push-1 ">
                    <div class="contact-info">
                        <i class="theme-color ti-email"></i>
                        <h6 class="dark-color ">Our Email</h6>
                        <p>goutamkumarchoudhary26@gmail.com</p><br />
                    </div>
                  </div>
                </div>
          </div>
        </section>
      </div>
    )
  }
} 