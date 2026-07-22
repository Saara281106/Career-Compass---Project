import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CloudinaryService from "../../../services/CloudinaryService";
import ResourceService from "../../../services/ResourceService";

export default function AddResources() {
  let [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [resourceType, setResourceType] = useState("PDF");
  const [resource, setResource] = useState("");

  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      setLoading(true);

      if (resource) {
        var resourceUrl = await CloudinaryService.upload(resource);
      }

      let payload = {
        title: title,
        description: description,
        resourceType: resourceType,
        resourceUrl: resourceUrl,
      };

      console.log(payload);

      await ResourceService.add(payload);

      setLoading(false);
      toast.success("Resource Added");
      nav("/admin/resources/manage");
      setTitle("");
      setDescription("");
      setResourceType("");
      //setResourceUrl("");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.code);
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
                <h1>Add Resources</h1>
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
      {/* CONTACT */}
      <div id="contact" className="contact_area section-padding container">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center wow fadeInUp">
              <div className="contact">
                <form
                  id="contact-form"
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={submit}
                >
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        required="required"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <textarea
                        rows={4}
                        name="message"
                        className="form-control"
                        placeholder="Description"
                        required="required"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <select
                        name=""
                        id=""
                        value={resourceType}
                        onChange={(e) => {
                          setResourceType(e.target.value);
                        }}
                        style={{ height: "70px", width: "525px" }}
                      >
                        <option value="PDF">PDF</option>
                        <option value="Link">Link</option>
                        <option value="Video">Video</option>
                      </select>
                    </div>
                    {resourceType === "PDF" || resourceType === "Video" ? (
                      <div className="form-group col-md-6">
                        <input
                          type="file"
                          onChange={(e) => {
                            setResource(e.target.files[0]);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Link"
                          value={resource}
                          onChange={(e) => {
                            setResource(e.target.value);
                          }}
                        />
                      </div>
                    )}

                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="contact_btn"
                        title="Submit Your Message!"
                      >
                        {loading ? "Adding Resource..." : "Submit"}
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
      <br />
      <br />
      <br />
    </>
  );
}
