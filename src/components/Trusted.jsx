import React, { useEffect, useState } from "react";
import { TrustApi } from "./ServicesApi";
const Trusted = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    let d1 = new Date().getFullYear();
    setdata(d1);
  }, []);

  return (
    <>
      <div class="card text-center">
        <div class="card-header">Trusted Partner</div>
        <div class="card-body">
          <div class="container text-center">
            <div class="row align-items-center">
              {TrustApi.map((val) => {
                return (
                  <>
                    <div class="col">
                    <marquee scrollamount="1">

                    
                      <i
                        class={val.lname}
                        style={{ fontSize: 35, color: "green" }}
                      ></i>
                      </marquee>
                    </div>
                    
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div class="card-footer text-body-secondary">
          <i
            class="fa fa-copyright"
            style={{ fontSize: 15, color: "green" }}
          ><span></span> {data} Sumanta Das All rights reserved</i>
          
        </div>
      </div>
    </>
  );
};

export default Trusted;
