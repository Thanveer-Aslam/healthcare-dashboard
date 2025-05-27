import React from "react";
import {
  FaTooth,
  FaDumbbell,
  FaHeartbeat,
  FaEye,
  FaBrain,
  FaStethoscope,
} from "react-icons/fa";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ArrowLeftRight } from 'lucide-react';
import SyringeIcon from '../assets/syringe_1140991.png';
import Eyes from '../assets/eye_6830652.png';
import Doctor from "../assets/doctor_2785482.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Biceps from '../assets/biceps_001.jpg';

const appointments = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: <FaTooth className="text-white fs-4" />,
    style:{background: "rgb(4 5 112)", color: "white"},
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    icon: <img src={Biceps} alt="Biceps" style={{ width: "40px", height: "40px" }} />,
    bgColor: "bg-light text-primary",
  },
];

const upcoming = [
  {
    day: "Thursday",
    events: [
      { title: "Health checkup complete", time: "11:00 AM", icon: <img src={SyringeIcon} alt="Syringe" style={{ width: "24px", height: "24px" }} /> },
      { title: "Ophthalmologist", time: "14:00 PM", icon: <img src={Eyes} alt="eyes" style={{ width: "24px", height: "24px" }} /> },
    ],
  },
  {
    day: "Saturday",
    events: [
      { title: "Cardiologist", time: "12:00 AM", icon: <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '14px' }} /> },
      { title: "Neurologist", time: "16:00 PM", icon: <img src={Doctor} alt="Doctor" style={{ width: "24px", height: "24px" }} />},
    ],
  },
];

const timeSlots = ["10:00", "11:00", "12:00"];
const highlightedSlots = {
  26: ["09:00"], // Tuesday
  28: ["11:00"], // Thursday
  30: ["12:00", "09:00"], // Saturday
};
const isHighlighted = highlightedSlots[day.date]?.includes(time);
const weekDays = [
  { name: "Mon", date: 25 },
  { name: "Tue", date: 26 },
  { name: "Wed", date: 27 },
  { name: "Thu", date: 28 },
  { name: "Fri", date: 29 },
  { name: "Sat", date: 30 },
  { name: "Sun", date: 31 },
];

const ScheduleSection = () => {
  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h6 className="text-primary fw-bold">October 2021</h6>
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-light rounded-circle">
            <ArrowLeftRight />
          </button>
          {/* <button className="btn btn-sm btn-light rounded-circle">
            <FiChevronRight />
          </button> */}
        </div>
      </div>

      {/* Weekly Calendar */}
      <div className="d-flex justify-content-between text-center mb-3">
        {weekDays.map((day, i) => {
          const isToday = day.date === 26;
          return (
            <div key={i} style={{ width: "13%" }}
            className={isToday ? "bg-light rounded p-2 shadow-sm" : ""}>
              <div
                className={`py-2 rounded-4 px-1 ${
                  isToday ? "bg-primary bg-opacity-10 text-primary" : "text-secondary"
                }`}
              >
                <div>{day.name}</div>
                <div className="fw-bold fs-5">{day.date}</div>
              </div>
              <div className="mt-2">
               {timeSlots.map((time, j) => {
  const isHighlighted = highlightedSlots[day.date]?.includes(time);
  return (
    <div
      key={j}
      className={`small py-1 rounded ${
        isHighlighted ? "bg-primary text-white" : "text-muted"
      }`}
    >
      {time}
    </div>
  );
})}
              </div>
            </div>
          );
        })}
      </div>

      {/* Appointment Cards */}
<div className="d-flex flex-wrap gap-3 mb-5">
  {appointments.map((item, index) => (
    <div key={index} style={{ flex: '1 1 calc(50% - 1rem)' }}>
      <div className={`d-flex flex-column justify-content-between p-3 rounded shadow-sm ${item.bgColor}`} style={{ minHeight: '100px', ...item.style }}>
  <div className="d-flex justify-content-between align-items-center mb-2">
    <h6 className="mb-0 fw-bold">{item.title}</h6>
    <div className="ms-2 flex-shrink-0">{item.icon}</div>
  </div>
  <div className="small">{item.time}</div>
  <div className="small">{item.doctor}</div>
</div>
    </div>
  ))}
</div>


      {/* Upcoming Schedule */}
      <div className="mt-4">
        <h5 className="mb-4 fw-bold text-dark">The Upcoming Schedule</h5>
        {upcoming.map((section, index) => (
          <div key={index} className="mb-4">
            <div className="text-muted mb-2 fw-semibold">On {section.day}</div>
            <div className="row g-3">
              {section.events.map((event, i) => (
                <div className="col-md-6">
  <div className="d-flex align-items-center p-3 rounded bg-light text-primary border border-primary">
    <div className="w-100">
      {/* Title and Icon in a single line */}
      <div className="d-flex align-items-center justify-content-between mb-1">
        <div className="fw-semibold text-truncate">{event.title}</div>
        <div className="ms-2 fs-5 flex-shrink-0">{event.icon}</div>
      </div>
      <div className="small">{event.time}</div>
    </div>
  </div>
</div>

              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;
