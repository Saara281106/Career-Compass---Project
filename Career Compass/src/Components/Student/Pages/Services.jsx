export default function Services() {
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
                <h1>Career Path</h1>
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
        {/* START PORTFOLIO PROJECT */}
        <section className="portfolio_project_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="single_project">
                  <img
                    src="/img/portfolio/1.jpg"
                    className="img-fluid"
                    alt="portfolio"
                  />
                  <h1>01</h1>
                  <h2>Website Design Agency</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It is a long established fact that a reader.
                  </p>
                  <a className="btn_one" href="single_project.html">
                    View Project
                  </a>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="single_project">
                  <img
                    src="/img/portfolio/2.jpg"
                    className="img-fluid"
                    alt="portfolio"
                  />
                  <h1>02</h1>
                  <h2>Product Marketing</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It is a long established fact that a reader.
                  </p>
                  <a className="btn_one" href="single_project.html">
                    View Project
                  </a>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="single_project">
                  <img
                    src="/img/portfolio/3.jpg"
                    className="img-fluid"
                    alt="portfolio"
                  />
                  <h1>03</h1>
                  <h2>App Development</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It is a long established fact that a reader.
                  </p>
                  <a className="btn_one" href="single_project.html">
                    View Project
                  </a>
                </div>
              </div>
              {/*- END COL */}
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="single_project">
                  <img
                    src="/img/portfolio/4.jpg"
                    className="img-fluid"
                    alt="portfolio"
                  />
                  <h1>04</h1>
                  <h2>Business Strategy</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It is a long established fact that a reader.
                  </p>
                  <a className="btn_one" href="single_project.html">
                    View Project
                  </a>
                </div>
              </div>
              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END PORTFOLIO PROJECT */}
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
