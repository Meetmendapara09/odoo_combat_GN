import React from 'react';

export default function Cart() {
  return (
    <>
      <div className="d-none d-lg-flex justify-content-end col-lg-4">
        <div className="mt-3">
          <div className="d-flex justify-content-start align-items-center gap-3 mb-4">
            <img
              className="o_portal_contact_img rounded o_object_fit_cover"
              alt="Contact"
              width="50"
              src="data:image/png;base64,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"
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
                <hr>
                <div class="user-info">
                    <div class="user-data">
                        <div class="user-icon">
                            <i class="ri-user-line"></i>
                        </div>
                        <div id="user-name">
                            <!--Username-->John
                        </div>
                        <div id="user-company">
                            <!--Username company-->
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
                                <!--Username-->
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
