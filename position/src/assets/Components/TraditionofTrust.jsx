import React from "react";
import { MdCleaningServices } from "react-icons/md";
import Image from "../Images/middle-aged-woman-wearing-apron-rubber-gloves-holding-cleaning-supplies-scrubbing-brush.jpg"



const TraditionofTrust = () => {
  return (
    <div className="TraditionofTrust">
      <div className="TraditionofTrust-wrapper">
        {/* HEADING */}
        <div className="text-center container my-5">
          <div className="mb-2">
            <h6 className="text-uppercase text-primary font-weight-bold">
              Why Choose Us
            </h6>
          </div>
          <h5 className="display-4 font-weight-bold">Tradition of Trust</h5>
          <p className="text-muted mt-3">
            We specialize in intelligence & effective search and believe in the
            power of partnerships to grow businesses.
          </p>
        </div>

        {/* BOXES */}

        <div className="container my-5">
          <div className="row justify-content-center">
            {/* Individual Cart */}
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="cart text-center p-4 shadow-sm border rounded">
                  {/* Icon with Circle Background */}
                  <div
                    className="icon-circle mx-auto mb-3 d-flex justify-content-center align-items-center"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "50%",
                    }}
                  >
                    <MdCleaningServices size={30} color="#007bff" />
                  </div>
                  {/* Heading */}
                  <h3 className="h5 mb-2 font-weight-bold">
                    Professional Team
                  </h3>
                  {/* Paragraph */}
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem libero nostrum provident nihil quas numquam officia
                    quaerat cumque sint voluptatum.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SecondContent */}

      <div className="secondContent">
        {/* IMAGE*/}
        <div>
          <img className="Image" src={Image} />
        </div>

        {/* IMAGE SIDE CONTAINER */}
        <div className="IMAGE-SIDE-CONTAINER">
          <div>
            <p className="text-primary mb-2 font-weight-bold">MAID FOR YOU</p>
            <h4 className="mb-2">A Cleaner Place is a Safer Place</h4>
            <p className="text-muted">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              alias quae deserunt? Optio aspernatur blanditiis assumenda magnam
              veritatis corporis sit?
            </p>
          </div>
          <div className="cart-overall">
            <div className="cart-1">
              <MdCleaningServices size={30} color="#007bff" />
              <h3>Professional Cleaning</h3>
              <p className="text-muted mb-0">
                Housekeeping is responsible for minor security in the hotel.
              </p>
            </div>
            <div className="cart-2">
              <MdCleaningServices size={30} color="#007bff" />
              <h3>Professional Cleaning</h3>
              <p className="text-muted mb-0">
                Both of us take a lot of time getting clean—clean home.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* --------end---------- */}
    </div>
  );
};

export default TraditionofTrust;
