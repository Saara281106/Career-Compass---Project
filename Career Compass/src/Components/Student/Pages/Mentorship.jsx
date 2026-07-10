export default function Mentorship() {
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
                <h1>Mentorship Sessions</h1>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}
      <>
        {/* START PORTFOLIO SINGLE PROJECT */}
        <section className="single_project_area section-padding">
          <div className="container">
            <div className="row project_dec">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="media-left">
                  <img
                    src="/img/portfolio/2.jpg"
                    className="img-fluid"
                    alt="portfolio-image"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="project_details">
                  <div className="about_project">
                    <h4>About Project</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                  <div className="about_project_details">
                    <ul>
                      <li>
                        <i className="fa fa-user" />
                        <b>Client: </b>Google, Inc
                      </li>
                      <li>
                        <i className="fa fa-clock-o" />
                        <b>Date: </b>01 Sep, 2026
                      </li>
                      <li>
                        <i className="fa fa-folder" />
                        <b>Category: </b>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <i className="fa fa-folder" />
                        <b>Project Url: </b>
                        <a href="#">www.google.com</a>
                      </li>
                    </ul>
                  </div>
                  <a className="btn_one" href="#">
                    See Live Project
                  </a>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
            <div className="row project_dec">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="media-left">
                  <img
                    src="/img/portfolio/2.jpg"
                    className="img-fluid"
                    alt="portfolio-image"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="project_details">
                  <div className="about_project">
                    <h4>About Project</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                  <div className="about_project_details">
                    <ul>
                      <li>
                        <i className="fa fa-user" />
                        <b>Client: </b>Google, Inc
                      </li>
                      <li>
                        <i className="fa fa-clock-o" />
                        <b>Date: </b>02 Sep, 2026
                      </li>
                      <li>
                        <i className="fa fa-folder" />
                        <b>Category: </b>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <i className="fa fa-folder" />
                        <b>Project Url: </b>
                        <a href="#">www.google.com</a>
                      </li>
                    </ul>
                  </div>
                  <a className="btn_one" href="#">
                    See Live Project
                  </a>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END PORTFOLIO SINGLE PROJECT */}
      </>

      {/* START PRICING TABLE */}
      <div
        className="pricing-table-area section-padding"
        style={{
          backgroundImage: "url(/img/bg/pricing-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title-white">Pricing Plan</h2>
            <p className="section-title-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp">
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">20</span>
                    <span className="duration">/month</span>
                  </div>
                </div>
                <div className="pricing-content">
                  <h3 className="title">Business</h3>
                  <ul>
                    <li>PSD to HTML</li>
                    <li>WordPress Theme</li>
                    <li>WordPress Plugin</li>
                    <li>Logo Design</li>
                    <li>WordPress Customization</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp">
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">60</span>
                    <span className="duration">/month</span>
                  </div>
                </div>
                <div className="pricing-content">
                  <h3 className="title">Standard</h3>
                  <ul>
                    <li>PSD to HTML</li>
                    <li>WordPress Theme</li>
                    <li>WordPress Plugin</li>
                    <li>Logo Design</li>
                    <li>WordPress Customization</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp">
              <div className="pricingTable blue">
                <div className="pricingTable-header">
                  <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">90</span>
                    <span className="duration">/month</span>
                  </div>
                </div>
                <div className="pricing-content">
                  <h3 className="title">Professional</h3>
                  <ul>
                    <li>PSD to HTML</li>
                    <li>WordPress Theme</li>
                    <li>WordPress Plugin</li>
                    <li>Logo Design</li>
                    <li>WordPress Customization</li>
                  </ul>
                </div>
                <div className="pricingTable-signup">
                  <a href="#">Order Now</a>
                </div>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END PRICING TABLE */}
      <br />
      <br />
      <br />
    </>
  );
}
