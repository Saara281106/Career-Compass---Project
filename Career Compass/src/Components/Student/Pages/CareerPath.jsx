import { useEffect, useState } from "react";
import CareerPathService from "../../../services/CareerPathService";
import "./CareerPath.css";

export default function CareerPath() {
  let [loading, setLoading] = useState(false);

  const [careerPath, setCareerPath] = useState([]);
  useEffect(() => {
    getAllCareerPath();
  }, []);

  async function getAllCareerPath() {
    try {
      setLoading(true);
      let res = await CareerPathService.all();
      console.log(res);
      setCareerPath(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
                <h1>Career Paths</h1>
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
              {careerPath.map((careerPath, index) => (
                <div className="col-lg-4 col-sm-4 col-xs-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={careerPath.imageUrl}
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                      }}
                      alt={careerPath.name}
                    />

                    <div className="card-body">
                      <h4 className="card-title">{careerPath.name}</h4>

                      <p className="card-text">{careerPath.description}</p>
                    </div>

                    <div className="card-footer bg-white border-0">
                      {careerPath.programType === "Paid" ? (
                        <button className="btn btn-primary w-100">
                          ₹ {careerPath.price}
                        </button>
                      ) : (
                        <button className="btn btn-warning w-100">Free</button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/*- END COL */}
            </div>
            {/*- END ROW */}
          </div>
          {/*- END CONTAINER */}
        </section>
        {/* END PORTFOLIO PROJECT */}
      </>
    </>
  );
}
