import React from 'react';

export default function Cart() {
  return (
    <>
      <div className="d-none d-lg-flex justify-content-end col-lg-4">
        <div className="mt-3 ">
          <div className="d-flex justify-content-start align-items-center gap-3 mb-4">
            <img
              className="o_portal_contact_img rounded o_object_fit_cover"
              alt="Contact"
              width="50"
              loading="lazy"
            />
            <div className="d-flex flex-column justify-content-center">
              <h5 className="mb-0">Meet Mendapara</h5>
            </div>
          </div>
          <div className="o_portal_my_details">
            <div>
              <address className="o_portal_address mb-0" itemscope itemtype="http://schema.org/Organization">
                <div className="gap-2" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                  <div className="d-flex align-items-baseline gap-1">
                    <i className="fa fa-map-marker fa-fw" role="img" aria-label="Address" title="Address"></i>
                    <span className="d-block w-100 lh-sm" itemprop="streetAddress">
                      112, Sector-2, Chankyapuri, Beside Devnandan Complex, Somnath Chowk
                      <br />
                      Ahmedabad, Gujarat 380061
                      <br />
                      Gujarat GJ
                      <br />
                      India
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <i className="fa fa-phone fa-fw" role="img" aria-label="Phone" title="Phone"></i>
                    <span className="o_force_ltr" itemprop="telephone">+918200624659</span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <i className="fa fa-envelope fa-fw" role="img" aria-label="Email" title="Email"></i>
                    <span className="text-break" itemprop="email">meetmendapara09@gmail.com</span>
                  </div>
                </div>
              </address>
            </div>
          </div>

          <hr />
          <div className="o_my_contact">
            <div className="o_portal_contact_details mb-5">
              <h4>Your contact</h4>
              <hr className="mt-1 mb-0" />
              <h6 className="mb-1"><b>Ansari Mahamadasif (maan)</b></h6>
              <div className="d-flex align-items-center mb-1">
                <div className="fa fa-envelope fa-fw me-1"></div>
                <a href="mailto:maan@odoo.com">maan@odoo.com</a>
              </div>
              <div className="d-flex flex-nowrap align-items-center mb-1">
                <div className="fa fa-phone fa-fw me-1"></div>
                {/* Phone number can be added here */}
              </div>
              <div className="d-flex flex-nowrap align-items-center mb-1">
                <div className="fa fa-map-marker fa-fw me-1"></div>
                {/* Address can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
       <div>
            <div id="user-profile">
                <h3>User Profile</h3>
                <hr/>
                <div class="user-info">
                    <div class="user-data">
                        <div class="user-icon">
                            <i class="ri-user-line"></i>
                        </div>
                        <div id="user-name">
                            {/* <!--Username-->John */}
                        </div>
                        <div id="user-company">
                            {/* <!--Username company--> */}
                        </div>
                    </div>

                    <div class="user-detail">
                        <div class="Address-detail">
                            <i class="ri-map-pin-line"></i>
                            <div id="Address">Ahmedabad</div>
                        </div>
                        <div id="number">
                            <i class="ri-phone-line"></i>
                            <div id="number">
                                91506
                            </div>
                        </div>
                        <div id="Email">
                            <i class="ri-mail-line"></i>
                            <div id="email">
                                h@gmail.com
                            </div>
                        </div>
                        <div id="edit">
                            <i class="ri-pencil-line"></i>
                            <div id="Edit-Profile">
                                <p>Edit-Profile</p>
                            </div>
                        </div>
                    </div>
                    <div class="Your-contact">
                        <h3>Your Contact</h3>
                        <div class="contact-detail">
                            <div id="user-name">
                                {/* <!--Username--> */}
                                John
                            </div>
                            <div id="Email">
                                <i class="ri-mail-line"></i>
                                <div id="email">
                                    +9012
                                </div>
                            </div>
                            <div id="number">
                                <i class="ri-phone-line"></i>
                                <div id="number">
                                    +912
                                </div>
                            </div>
                            <div class="Address-detail">
                                <i class="ri-map-pin-line"></i>
                                <div id="Address">Ahmedabad</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}
