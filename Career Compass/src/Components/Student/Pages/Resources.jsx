import { useEffect, useState } from "react";
import ResourceService from "../../../services/ResourceService";

export default function Resources() {
  const [loading, setLoading] = useState(false);
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
                <h1>Resources</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION TOP */}

      <section className="section-padding">
        <div className="container">
          <div className="row">
            {loading ? (
              <h4 className="text-center">Loading...</h4>
            ) : (
              resources.map((resource) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 mb-4"
                  key={resource.id}
                >
                  <div className="single_feature text-center h-100">
                    {resource.resourceType === "PDF" ? (
                      <img src="/img/icon/research.png" alt="icon" />
                    ) : resource.resourceType === "Video" ? (
                      <img src="/img/icon/web.png" alt="icon" />
                    ) : (
                      <img src="/img/icon/design.png" alt="icon" />
                    )}
                    {/* <img
                      src="/img/icon/strategy.png"
                      alt="icon"
                      className="mb-3"
                    /> */}

                    <h4>{resource.title}</h4>

                    <p
                      className="text-dark"
                      style={{
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {resource.description}
                    </p>

                    {resource.resourceType === "PDF" && (
                      <a
                        href={resource.resourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        View PDF
                      </a>
                    )}

                    {resource.resourceType === "Video" && (
                      <a
                        href={resource.resourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-success btn-sm"
                      >
                        Watch Video
                      </a>
                    )}

                    {resource.resourceType === "Link" && (
                      <a
                        href={resource.resourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-warning btn-sm"
                      >
                        Open Link
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <img src="/img/icon/research.png" alt="icon" /> 
    <img src="/img/icon/brand.png" alt="icon" />
    <img src="/img/icon/web.png" alt="icon" />
    <img src="/img/icon/strategy.png" alt="icon" />
    <img src="/img/icon/design.png" alt="icon" />
    <img src="/img/icon/photo.png" alt="icon" />*/
}
