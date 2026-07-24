import { useEffect, useState } from "react";
import MentorshipSessionService from "../../../services/MentorshipSessionService";
import BookingService from "../../../services/BookingService";
import AuthService from "../../../services/AuthService";
import { toast } from "react-toastify";

export default function MentorshipSessions() {
  let [loading, setLoading] = useState(false);

  const [bookings, setBookings] = useState([]);

  const [mentorshipSession, setMentorshipSession] = useState([]);
  useEffect(() => {
    getAllMentorshipSession();
    getAllBookings();
  }, []);

  async function getAllMentorshipSession() {
    try {
      setLoading(true);
      let res = await MentorshipSessionService.all();
      console.log(res);
      setMentorshipSession(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getAllBookings() {
    try {
      let res = await BookingService.all();
      console.log(res);
      setBookings(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function bookSession(session) {
    try {
      setLoading(true);

      let payload = {
        studentId: AuthService.getId(),
        studentName: AuthService.getName(),
        studentEmail: AuthService.getEmail(),

        sessionId: session.id,
        sessionTitle: session.title,
        sessionDate: session.date,

        mentorName: session.mentorName,
        meetingLink: session.meetingLink,
      };

      console.log(payload);

      await BookingService.add(payload);

      toast.success("Session booked successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
                <h1>Mentorship Sessions</h1>
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
        <section className="single_project_area section-padding">
          {mentorshipSession.map((mentorshipSession, index) => {
            const isBooked = bookings.some(
              (booking) =>
                booking.studentId === AuthService.getId() &&
                booking.sessionId === mentorshipSession.id,
            );

            return (
              <div className="container" key={mentorshipSession.id}>
                <div className="row project_dec card">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <div className="project_details">
                      <div className="about_project">
                        <h4>{mentorshipSession.title}</h4>
                        <p>{mentorshipSession.description}</p>
                      </div>

                      <div className="about_project_details">
                        <ul>
                          <li>
                            <i className="fa fa-user" />
                            <b>Mentor: </b>
                            {mentorshipSession.mentorName}
                          </li>

                          <li>
                            <i className="fa fa-clock-o" />
                            <b>Date: </b>
                            {mentorshipSession.date}
                          </li>

                          <li>
                            <i className="fa fa-clock-o" />
                            <b>Time: </b>
                            {mentorshipSession.time}
                          </li>

                          <li>
                            <i className="fa fa-clock-o" />
                            <b>Duration: </b>
                            {mentorshipSession.duration} min
                          </li>

                          <li>
                            {isBooked ? (
                              <button
                                className="btn btn-success btn-sm"
                                disabled
                              >
                                Booked
                              </button>
                            ) : (
                              <button
                                className="btn btn-warning btn-sm"
                                onClick={() => bookSession(mentorshipSession)}
                              >
                                Book Now
                              </button>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        {/* END PORTFOLIO SINGLE PROJECT */}
      </>
    </>
  );
}
