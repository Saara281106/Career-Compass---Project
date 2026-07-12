export default function Login() {
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
                <h1>Login</h1>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}
      
      <br /><br /><br />
      {/* CONTACT */}
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          
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
                    
                    <div className="form-group col-md">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Your Password"
                        required="required"
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
                        Sign In
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
