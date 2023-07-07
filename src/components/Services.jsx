import React from "react";
import {ServicesApi} from "./ServicesApi";
const Services = () => {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Special Services</div>
        <div className="card-body">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {ServicesApi.map((val) => {
              return (
                <>
                  <div className="col" key={val.id}>
                    <div className="card h-100">
                      <img
                        src={val.img}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className={val.titleclass}>{val.title}</h5>
                        <p className={val.pclass}>{val.pdata}</p>
                        <button className={val.logoclass}>
                        <i class={val.logo}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Services;
