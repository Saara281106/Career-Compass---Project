export default function Contact() {
  return (
    <>
      {/* START SECTION TOP */}
      <section
        className="section-top"
        style={{
          backgroundImage: "url(/img/bg/section-top.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="section-title text-center">
            <h2 className="section-title-white">Get in Touch</h2>
            <p className="section-title-white">
              Have questions about career guidance, mentorship sessions or
              learning resources? We'd love to hear from you.
            </p>
          </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      <br /><br />

      {/* CONTACT */}
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          

          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-5 mb-4">
              <div
                className="single_address"
                style={{
                  padding: "40px",
                  borderRadius: "12px",
                  background: "#fff",
                  boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                  height: "100%",
                }}
              >
                <h3 className="mb-4">Contact Information</h3>

                <p>
                  Career Compass helps students explore career opportunities,
                  connect with mentors and access quality learning resources.
                </p>

                <hr />

                <h5>📍 Address</h5>
                <p>
                  Lovely Professional University <br />
                  Phagwara, Punjab - 144411 <br />
                  India
                </p>

                <h5>📞 Phone</h5>
                <p>+91 98765 43210</p>

                <h5>📧 Email</h5>
                <p>support@careercompass.com</p>

                <h5>🕒 Working Hours</h5>
                <p>
                  Monday - Friday <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-7">
              <div className="contact">
                <form id="contact-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <textarea
                        rows="6"
                        className="form-control"
                        placeholder="Write your message..."
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="contact_btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
    </>
  );
}
