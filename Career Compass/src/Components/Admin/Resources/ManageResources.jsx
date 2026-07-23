import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResourceService from "../../../services/ResourceService";

export default function ManageResources() {
  let [loading, setLoading] = useState(false);

  const [resources, setResources] = useState([]);
  useEffect(() => {
    getAllResources();
  }, []);

  async function getAllResources() {
    try {
      setLoading(true);
      let res = await ResourceService.all();
      console.log(res);
      setResources(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteResourecs(id) {
    try {
      setLoading(true);
      let res = await ResourceService.delete(id);
      getAllResources();
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
                <h1>Manage Resources</h1>
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
          <Link to="/admin/resources/add">
            <button type="button" className="btn btn-warning text-light">
              {" "}
              + RESOURCE{" "}
            </button>
          </Link>
        </div>
        <br />
        <table className="table table table-hover table-bordered">
          <thead>
            <tr className="table">
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Resource</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resources, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td scope="row">{resources.title}</td>
                <td scope="row">{resources.description} </td>
                <td scope="row">{resources.resourceType} </td>
                <td>
                  {resources.resourceType === "PDF" && (
                    <a
                      href={resources.resourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      View PDF
                    </a>
                  )}

                  {resources.resourceType === "Video" && (
                    <a
                      href={resources.resourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-success"
                    >
                      Watch Video
                    </a>
                  )}

                  {resources.resourceType === "Link" && (
                    <a
                      href={resources.resourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-warning"
                    >
                      Open Link
                    </a>
                  )}
                </td>

                <td scope="row">
                  <Link to={`/admin/resources/edit/${resources.id}`}>
                    <button type="button" className="btn btn-sm btn-info">
                      Update
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-sm btn-danger "
                    onClick={() => {
                      deleteResourecs(resources.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}
