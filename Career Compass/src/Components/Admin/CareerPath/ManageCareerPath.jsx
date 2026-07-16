import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CareerPathService from "../../../services/CareerPathService";

export default function ManageCareerPath() {
  let [loading, setLoading] = useState(false);

  const [careerPath, setCareerPath] = useState([]);
  useEffect(() => {
    getAllCareerPath();
  }, []);

  async function getAllCareerPath() {
    try {
      setLoading(true);
      let res = await CareerPathService.all();
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
                <h1>Manage Career Paths</h1>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}

      <br />
      <br />
      <br />
      <div className="container">
        <div className="text-end">
          <Link to="/admin/careerpath/add">
            <button type="button" class="btn btn-sm btn-primary">
              {" "}
              + Career Path{" "}
            </button>
          </Link>
        </div>
        <br />
        <table class="table table table-hover">
          <thead>
            <tr className="table">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Type</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              
            }
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}
