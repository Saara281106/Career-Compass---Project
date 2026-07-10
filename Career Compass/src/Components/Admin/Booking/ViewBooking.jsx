import { Link } from "react-router-dom";

export default function ViewBooking() {
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
                <h1>Bookings</h1>
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
          <Link to="/admin/addCareerPath" >
            <button type="button" class="btn btn-sm btn-primary">
              {" "}
              + Career Path{" "}
            </button>
          </Link>
        </div>
        <br />
        <table class="table table-warning table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">#</th>
              <th scope="col">User ID</th>
              <th scope="col">Session ID</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}
