import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import { toast } from "react-toastify";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  const nav = useNavigate();
  

  async function submit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      let payload = {
        name: name,
        phone: phone,
        email: email,
        address: address,
        password: password,
      };

      let res = await UserService.register(payload);
      nav("/");
      setLoading(false);
      toast.success("Registered Succesfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error);
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
                <h1>Register</h1>
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
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title-white">Create an account</h2>
          </div>
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
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Name"
                        required="required"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        placeholder="Enter Your  Phone"
                        required="required"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                        required="required"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Enter Your Address"
                        required="required"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Your Password"
                        required="required"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
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
                        {loading ? "saving..." : "Register"}
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
