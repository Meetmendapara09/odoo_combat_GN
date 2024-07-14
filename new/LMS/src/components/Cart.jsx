import React from "react";

export default function Cart() {
  return (
    <>
<<<<<<< HEAD
      <div className="w-full p-4 flex justify-between overflow-hidden gap-5">
        <div className="w-full h-40 mt-3 p-2 bg-slate-500 flex items-center">
          <div>
            <div className="flex items-center gap-4">
              <img
                className="w-20"
                src="https://www.theindianbookstore.in/cdn/shop/products/rich_dad_poor_dad_by_robert_t__1607410877_44fb96ac-768x1024.jpg?v=1659004008&width=1445"
                alt="Rich dad poor dad"
              />
              <div className="">
                <h3 className="">Heading</h3>
                <p>Description</p>
                <button className="w-40 p-1 bg-slate-400 rounded">
                  Read Now
                </button>
              </div>
=======
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
>>>>>>> b5552d2ca03f92836509fe662643fb1f183245fd
            </div>
          </div>
        </div>



        <div className=" w-25 d-lg-flex justify-content-end col-lg-4">
          <div className="mt-3 ">
            <div className="d-flex justify-content-start align-items-center gap-3 mb-4">
              <img
                className="o_portal_contact_img rounded o_object_fit_cover"
                alt="Contact"
                width="50"
                src=""
                loading="lazy"
              />
              <div className="d-flex flex-column justify-content-center">
                <h5 className="mb-0">Meet Mendapara</h5>
              </div>
            </div>
            <div className="o_portal_my_details">
              <div>
                <address
                  className="o_portal_address mb-0"
                  itemscope
                  itemtype="http://schema.org/Organization"
                >
                  <div
                    className="gap-2"
                    itemprop="address"
                    itemscope
                    itemtype="http://schema.org/PostalAddress"
                  >
                    <div className="d-flex align-items-baseline gap-1">
                      <i
                        className="fa fa-map-marker fa-fw"
                        role="img"
                        aria-label="Address"
                        title="Address"
                      ></i>
                      <span
                        className="d-block w-100 lh-sm"
                        itemprop="streetAddress"
                      >
                        112, Sector-2, Chankyapuri,
                        <br/>
                         Beside Devnandan Complex,
                         <br/>
                        Somnath Chowk
                        <br />
                        Ahmedabad, Gujarat 380061
                        <br />
                        Gujarat GJ
                        <br />
                        India
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i
                        className="fa fa-phone fa-fw"
                        role="img"
                        aria-label="Phone"
                        title="Phone"
                      ></i>
                      <span className="o_force_ltr" itemprop="telephone">
                        +918200624659
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <i
                        className="fa fa-envelope fa-fw"
                        role="img"
                        aria-label="Email"
                        title="Email"
                      ></i>
                      <span className="text-break" itemprop="email">
                        meetmendapara09@gmail.com
                      </span>
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
                <h6 className="mb-1">
                  <b>Ansari Mahamadasif (maan)</b>
                </h6>
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
      </div>
    </>
  );
}
