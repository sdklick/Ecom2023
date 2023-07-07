import React from "react";

const Contact = () => {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29672.29444062508!2d87.490255726501!3d21.623489431412885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1ccd46c454a84d%3A0xd166b9687aa01c59!2sDigha%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1687116699331!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    height="215"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <input
                        placeholder="UserName"
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <input type="submit" className="btn btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-body-secondary">2 days ago</div>
      </div>
    </>
  );
};

export default Contact;
