import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookingService from "../../../services/BookingService";
import AuthService from "../../../services/AuthService";

export default function ViewBookigs() {
  let [loading, setLoading] = useState(false);

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    getAllBookings();
  }, []);

  async function getAllBookings() {
    try {
      let res = await BookingService.all();
      console.log(res);
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
                <h1>Manage Bookings</h1>
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
        <table className="table table table-hover table-bordered">
          <thead>
            <tr className="table">
              <th scope="col">#</th>
              <th scope="col">Student</th>
              <th scope="col">Email</th>
              <th scope="col">Title</th>
              <th scope="col">Mentor</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Meeting</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((bookings, index) => (
              <tr key={bookings.id}>
                <td>{index + 1}</td>
                <td>{bookings.studentName}</td>
                <td>{bookings.studentEmail}</td>
                <td>{bookings.sessionTitle}</td>
                <td>{bookings.mentorName}</td>
                <td>{bookings.sessionDate}</td>
                <td>{bookings.bookingStatus}</td>
                <td>
                  <a
                    href={bookings.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success btn-sm"
                  >
                    Join
                  </a>
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
