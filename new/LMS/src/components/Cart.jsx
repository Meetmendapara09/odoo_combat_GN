import React from "react";
import BookDetails from "../Books/BookDetails";
import Book from "./Book";

export default function Cart() {
  return (
    <>
    
      <div className="w-full p-4 flex justify-between overflow-hidden gap-5">
        {/* <div className="w-full h-40 mt-3 p-2 bg-slate-500 flex items-center">
          <div>
            <div className="flex items-center gap-4">
              <img
                className="w-20"
                src="https://www.theindianbookstore.in/cdn/shop/products/rich_dad_poor_dad_by_robert_t__1607410877_44fb96ac-768x1024.jpg?v=1659004008&width=1445"
                alt="Rich dad poor dad"
              />
              <div>
                <h3>Heading</h3>
                <p>Description</p>
                <button className="w-40 p-1 bg-slate-400 rounded">
                  Read Now
                </button>
              </div>
            </div>
          </div>
        </div> */}
        
        
        


        <div className="w-25 hidden lg:flex justify-end">
          <div className="mt-3">
            <div className="flex justify-start items-center gap-3 mb-4">
              <img
                className="rounded object-cover"
                alt="Contact"
                width="50"
                src=""
                loading="lazy"
              />
              <div className="flex flex-col justify-center">
                <h5 className="mb-0">Meet Mendapara</h5>
              </div>
            </div>
            <div>
              <address
                className="mb-0"
                itemscope
                itemtype="http://schema.org/Organization"
              >
                <div
                  className="gap-2"
                  itemprop="address"
                  itemscope
                  itemtype="http://schema.org/PostalAddress"
                >
                  <div className="flex items-baseline gap-1">
                    <i
                      className="fa fa-map-marker fa-fw"
                      role="img"
                      aria-label="Address"
                      title="Address"
                    ></i>
                    <span
                      className="block w-full leading-snug"
                      itemprop="streetAddress"
                    >
                      112, Sector-2, Chankyapuri,
                      <br />
                      Beside Devnandan Complex,
                      <br />
                      Somnath Chowk
                      <br />
                      Ahmedabad, Gujarat 380061
                      <br />
                      Gujarat GJ
                      <br />
                      India
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i
                      className="fa fa-phone fa-fw"
                      role="img"
                      aria-label="Phone"
                      title="Phone"
                    ></i>
                    <span className="force-ltr" itemprop="telephone">
                      +918200624659
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i
                      className="fa fa-envelope fa-fw"
                      role="img"
                      aria-label="Email"
                      title="Email"
                    ></i>
                    <span className="break-words" itemprop="email">
                      meetmendapara09@gmail.com
                    </span>
                  </div>
                </div>
              </address>
            </div>
            <hr />
            <div>
              <h4>Your contact</h4>
              <hr className="mt-1 mb-0" />
              <h6 className="mb-1">
                {/* <b>Ansari Mahamadasif (maan)</b> */}
              </h6>
              <div className="flex items-center mb-1">
                <i className="fa fa-envelope fa-fw me-1"></i>
                {/* <a href="mailto:maan@odoo.com">maan@odoo.com</a> */}
              </div>
              <div className="flex flex-nowrap items-center mb-1">
                <i className="fa fa-phone fa-fw me-1"></i>
                {/* Phone number can be added here */}
              </div>
              <div className="flex flex-nowrap items-center mb-1">
                <i className="fa fa-map-marker fa-fw me-1"></i>
                {/* Address can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
