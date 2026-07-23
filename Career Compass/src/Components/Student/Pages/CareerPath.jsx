import { useEffect, useState } from "react";
import CareerPathService from "../../../services/CareerPathService";

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
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="single_project">
                  <img
                    src={careerPath.imageUrl}
                    style={{
                      height: "250px",
                      width : "300px"
                      
                      // borderRadius: "50%",
                    }}
                    alt=""
                  />
                  <h1>{index + 1}</h1>
                  <h2>{careerPath.name}</h2>
                  <p>
                    {careerPath.description}
                  </p>
                  <p>{careerPath.programType === "Paid" ? (
                    <><button type="button" className="btn btn-primary">₹ {careerPath.price}</button></>
                  ) : (
                    <button type="button" className="btn btn-warning"> Free </button>
                  )}</p>
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
