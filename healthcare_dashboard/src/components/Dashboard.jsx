import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import humanAnatomy from '../assets/human-anatomy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ScheduleSection from "./ScheduleSection";

// ...[unchanged imports above]
const Dashboard = () => {
  const activityData = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series1: [5, 3, 4, 2, 6, 1, 4],
    series2: [3, 6, 2, 5, 3, 4, 2],
  };

  return (
    <div className="d-flex flex-column p-4">
      <div variant="h4" sx={{color: "#070993"}}>
        Dashboard
      </div>

      {/* Main Layout: Left Dashboard Content + Right Schedule Section */}
      <div className="d-flex flex-column flex-lg-row gap-4 align-items-start">
        {/* Left Side: Dashboard content */}
        <div className="flex-grow-1 d-flex flex-column gap-4">

          {/* Top Section: Human Anatomy and Cards */}
          <div className="row g-4 align-items-start">
            {/* Anatomy Figure */}
            <div className="col-12 col-md-5 position-relative">
              <div
                className="position-relative mx-auto"
                style={{ width: '160px', height: '384px', marginTop: '1rem' }} // Add space on top
              >
                <img
                  src={humanAnatomy}
                  alt="Human Anatomy"
                  className="img-fluid"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />

                {/* Health Indicators */}
                <div className="position-absolute" style={{ top: '106px', left: '6.5rem' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="btn-sm d-flex align-items-center gap-1 text-uppercase"
                    style={{ fontSize: '12px', padding: '4px 10px', whiteSpace: 'nowrap', background: "#070993"}}

                  >
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '14px' }} />
                    Healthy Heart
                  </Button>
                </div>
                <div className="position-absolute" style={{ bottom: '140px', right: '6rem' }}>
                  <Button
                    variant="contained"
                    color="info"
                    className="btn-sm d-flex align-items-center gap-1 text-uppercase"
                    style={{ fontSize: '12px', padding: '4px 8px', whiteSpace: 'nowrap' }}
                  >
                    <img
                      src="https://img.icons8.com/office/40/leg.png"
                      alt="Leg Icon"
                      style={{ width: '14px', height: '14px' }}
                    />
                    Healthy Leg
                  </Button>
                </div>
              </div>
            </div>

            {/* Health Status Cards */}
            <div className="col-12 col-md-4 d-flex flex-column gap-3" style={{ marginTop: '2.5rem' }}>
              {[ // Slight top margin added to avoid overlap with "Healthy Heart"
                { emoji: '🫁', label: 'Lungs', progress: 20, color: 'danger' },
                { emoji: '🦷', label: 'Teeth', progress: 80, color: 'success' },
                { emoji: '🦴', label: 'Bone', progress: 40, color: 'warning' }
              ].map(({ emoji, label, progress, color }) => (
                <Card key={label}>
                  <CardContent className="d-flex align-items-center gap-2">
                    <span className="fs-3">{emoji}</span>
                    <div className="flex-grow-1">
                      <Typography variant="h6">{label}</Typography>
                      <Typography variant="body2" color="textSecondary">Date: 26 Okt 2021</Typography>
                      <div className="progress" style={{ height: '10px' }}>
                        <div
                          className={`progress-bar bg-${color}`}
                          role="progressbar"
                          style={{ width: `${progress}%` }}
                          aria-valuenow={progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activity Chart Section */}
          <div className="col-12 col-md-10 mx-left">
            <Card sx={{ borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <CardContent className="p-3">
                <Typography variant="h5" className="text-#070993 mb-2">Activity</Typography>
                <Typography variant="body2" color="textSecondary" className="mb-3">
                  3 appointments on this week
                </Typography>
                <BarChart
                  xAxis={[{ scaleType: 'band', data: activityData.days, disableLine: true }]}
                  yAxis={[{ disableLine: true }]}
                  series={[
                    { data: activityData.series1, color: '#80d8ff' },
                    { data: activityData.series2, color: '#0288d1' },
                  ]}
                  width={Math.min(window.innerWidth - 40, 500)}
                  height={200}
                  grid={{ horizontal: false, vertical: false }}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side: Schedule Section */}
        <div style={{ minWidth: '550px', maxWidth: '400px' }}>
          <ScheduleSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

