import { Link } from "react-router-dom";
import CareerPathService from "../../../services/CareerPathService";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
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
                {/* <h1>DASHBOARD</h1> */}
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}

      <section className="feature_area">
        <div className="container">
          <div className="row feature_bg">
            <div className="section-title text-center">
              <h3>Welcome Back, Admin</h3>
              <p>
                Manage career paths, upload learning resources, schedule
                mentorship sessions and help students explore better career
                opportunities.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single_feature">
                <Link to="/admin/careerPath/manage">
                  <img src="/img/icon/strategy.png" alt="icon" />
                  <h4>Create new Career Paths</h4>
                  <p className="text-dark">
                    Discover different career options, understand their scope,
                    required skills, and step-by-step learning roadmaps.
                  </p>
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single_feature">
                <Link to="/admin/mentorshipSession/manage">
                  <img src="/img/icon/web.png" alt="icon" />
                  <h4>Plan new Mentorship Sessions</h4>
                  <p className="text-dark">
                    Learn from experienced alumni and industry professionals
                    through mentorship sessions and career workshops.
                  </p>
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single_feature">
                <Link to="/admin/resources/manage">
                  <img src="/img/icon/design.png" alt="icon" />
                  <h4>Provide new Learning Resources</h4>
                  <p className="text-dark">
                    Explore recommended documentation, videos, websites, and
                    career resources to start your learning journey.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>

      <section className="counter_feature section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single-project">
                <img src="/img/icon/counter-1.png" alt="icon" />
                <h2 className="counter-num">32652</h2>
                <h4>Happy Students</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single-project">
                <img src="/img/icon/counter-2.png" alt="icon" />
                <h2 className="counter-num">21821</h2>
                <h4>Career Paths Provided</h4>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single-project">
                <img src="/img/icon/counter-3.png" alt="icon" />
                <h2 className="counter-num">5660</h2>
                <h4>Resources Provided</h4>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single-project single-project-mrnone">
                <img src="/img/icon/counter-4.png" alt="icon" />
                <h2 className="counter-num">11859</h2>
                <h4>Mentorship Sessions</h4>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/*- END ROW */}
          <div className="row text-center">
            <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 wow fadeInUp"></div>
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
    </>
  );
}
