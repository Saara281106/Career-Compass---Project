export default function Register() {
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
              <div className="section-top-title">
                <h1>Register</h1>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}
      
      
      {/* CONTACT */}
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title-white">Create an account</h2>
           
          </div>
          <div className="row">
            <div
              className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center wow fadeInUp"
              
            >
              <div className="contact">
                <form
                  id="contact-form"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        rows={6}
                        name="message"
                        className="form-control"
                        placeholder="Type your message that on your mind..."
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="contact_btn"
                        title="Submit Your Message!"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* END COL  */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END CONTACT */}

      <br /><br /><br />
    </>
  );
}
