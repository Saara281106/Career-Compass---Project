import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookingService from "../../../services/BookingService";
import AuthService from "../../../services/AuthService";

export default function MyBookings() {
  let [loading, setLoading] = useState(false);

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getAllBookings();
  }, []);

  async function getAllBookings() {
    try {
      let res = await BookingService.all();
      console.log(res);

      res = res.filter((booking) => booking.studentId === AuthService.getId());

      setBookings(res);
    } catch (error) {
      console.log(error);
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
                <h1>My Bookings</h1>
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
          <Link to="/mentorshipSession">
            <button type="button" className="btn btn-warning text-light">
              {" "}
              + Book More Sessions{" "}
            </button>
          </Link>
        </div>
        <br />
        <table className="table table table-hover table-bordered">
          <thead>
            <tr className="table">
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Mentor</th>
              <th scope="col">Date</th>
              <th scope="col">MeetingLink</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((bookings, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td scope="row">{bookings.sessionTitle}</td>
                <td scope="row">{bookings.mentorName} </td>

                <td scope="row">{bookings.sessionDate}</td>
                <td>
                  <a
                    href={bookings.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success btn-sm"
                  >
                    Join Meeting
                  </a>
                </td>
                <td scope="row">{bookings.bookingStatus}</td>
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
