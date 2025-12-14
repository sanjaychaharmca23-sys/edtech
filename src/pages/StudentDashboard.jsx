import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('analytics');
  const [timeRange, setTimeRange] = useState('week');

  // Mock enrollment data
  const enrollmentData = {
    totalStudents: 15420,
    pendingEnrollments: 342,
    totalRevenue: 2845000,
    todayEnrollments: 42,
    weeklyGrowth: 12.5
  };

  // Mock enrollment timeline data
  const enrollmentTimeline = [
    { date: '2025-12-08', time: '09:30 AM', students: 24, amount: 215000, status: 'completed' },
    { date: '2025-12-08', time: '02:15 PM', students: 18, amount: 162000, status: 'completed' },
    { date: '2025-12-09', time: '11:45 AM', students: 31, amount: 278000, status: 'completed' },
    { date: '2025-12-09', time: '04:20 PM', students: 27, amount: 243000, status: 'completed' },
    { date: '2025-12-10', time: '10:15 AM', students: 35, amount: 315000, status: 'completed' },
    { date: '2025-12-10', time: '03:30 PM', students: 29, amount: 261000, status: 'completed' },
    { date: '2025-12-11', time: '01:45 PM', students: 42, amount: 378000, status: 'completed' },
    { date: '2025-12-12', time: '10:30 AM', students: 38, amount: 342000, status: 'completed' },
    { date: '2025-12-12', time: '05:15 PM', students: 26, amount: 234000, status: 'pending' },
    { date: '2025-12-13', time: '12:00 PM', students: 33, amount: 297000, status: 'completed' },
    { date: '2025-12-14', time: '09:45 AM', students: 42, amount: 378000, status: 'completed' }
  ];

  // Course enrollment distribution
  const courseDistribution = [
    { course: 'JEE Main & Advanced', students: 5240, percentage: 34, color: '#667eea' },
    { course: 'NEET UG', students: 4180, percentage: 27, color: '#764ba2' },
    { course: 'CBSE Classes 11-12', students: 3260, percentage: 21, color: '#f093fb' },
    { course: 'Foundation Course', students: 1890, percentage: 12, color: '#f5576c' },
    { course: 'Crash Courses', students: 850, percentage: 6, color: '#4facfe' }
  ];

  // Recent enrollments
  const recentEnrollments = [
    { id: 1, student: 'Rahul Kumar', course: 'JEE Main 2025', amount: 8999, time: '2 mins ago', status: 'completed' },
    { id: 2, student: 'Priya Sharma', course: 'NEET UG 2025', amount: 7999, time: '15 mins ago', status: 'completed' },
    { id: 3, student: 'Amit Patel', course: 'CBSE Class 12', amount: 5999, time: '1 hour ago', status: 'pending' },
    { id: 4, student: 'Sneha Gupta', course: 'JEE Crash Course', amount: 6999, time: '2 hours ago', status: 'completed' },
    { id: 5, student: 'Vikash Singh', course: 'Foundation Math', amount: 4999, time: '3 hours ago', status: 'completed' }
  ];

  // Quick stats for different time ranges
  const getStatsForTimeRange = (range) => {
    switch(range) {
      case 'day':
        return {
          students: 42,
          pending: 8,
          revenue: 378000,
          growth: 3.2
        };
      case 'week':
        return {
          students: 342,
          pending: 32,
          revenue: 2845000,
          growth: 12.5
        };
      case 'month':
        return {
          students: 15420,
          pending: 342,
          revenue: 128450000,
          growth: 8.7
        };
      default:
        return enrollmentData;
    }
  };

  const currentStats = getStatsForTimeRange(timeRange);

  // Navigation items
  const navItems = [
    { id: 'analytics', icon: '📊', label: 'Analytics' },
    { id: 'enrollments', icon: '📝', label: 'Enrollments' },
    { id: 'courses', icon: '📚', label: 'Courses' },
    { id: 'reports', icon: '📋', label: 'Reports' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'logout', icon: '🚪', label: 'Logout' }
  ];

  const handleNavClick = (itemId) => {
    setActiveTab(itemId);
    
    switch (itemId) {
      case 'courses':
        navigate('/courses');
        break;
      case 'reports':
        navigate('/reports');
        break;
      case 'settings':
        navigate('/profile');
        break;
      case 'logout':
        handleLogout();
        break;
      default:
        // Stay on dashboard
        break;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logged out successfully!');
    navigate('/login');
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format number
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="student-dashboard">
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="logo">
            <h2>🎓 EduPulse</h2>
          </div>
          
          <nav className="sidebar-nav">
            {navItems.map(item => (
              <div 
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Header */}
          <header className="dashboard-header">
            <h1>Student Enrollment Dashboard</h1>
            <div className="header-actions">
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="time-range-selector"
              >
                <option value="day">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
              <button className="refresh-btn">↻ Refresh</button>
            </div>
          </header>

          {/* Stats Cards */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-card primary">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <div className="stat-value">{formatNumber(currentStats.students)}</div>
                  <div className="stat-label">Total Students</div>
                  <div className="stat-trend positive">↑ {currentStats.growth}% from last period</div>
                </div>
              </div>
              
              <div className="stat-card warning">
                <div className="stat-icon">⏳</div>
                <div className="stat-content">
                  <div className="stat-value">{currentStats.pending}</div>
                  <div className="stat-label">Pending Enrollments</div>
                  <div className="stat-trend">Needs attention</div>
                </div>
              </div>
              
              <div className="stat-card success">
                <div className="stat-icon">💰</div>
                <div className="stat-content">
                  <div className="stat-value">{formatCurrency(currentStats.revenue)}</div>
                  <div className="stat-label">Total Revenue</div>
                  <div className="stat-trend positive">↑ {currentStats.growth}% growth</div>
                </div>
              </div>
              
              <div className="stat-card info">
                <div className="stat-icon">📈</div>
                <div className="stat-content">
                  <div className="stat-value">{currentStats.growth}%</div>
                  <div className="stat-label">Growth Rate</div>
                  <div className="stat-trend">Weekly improvement</div>
                </div>
              </div>
            </div>
          </section>

          {/* Charts and Analytics */}
          <section className="analytics-section">
            <div className="chart-grid">
              {/* Enrollment Timeline */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Enrollment Timeline</h3>
                  <div className="chart-actions">
                    <button className="chart-action-btn">Export</button>
                  </div>
                </div>
                <div className="timeline-chart">
                  <div className="timeline-bars">
                    {enrollmentTimeline.slice(-7).map((entry, index) => (
                      <div key={index} className="timeline-bar">
                        <div 
                          className="bar-fill"
                          style={{ 
                            height: `${(entry.students / 50) * 100}%`,
                            backgroundColor: entry.status === 'pending' ? '#f5576c' : '#667eea'
                          }}
                        ></div>
                        <div className="bar-label">
                          <div className="date">{entry.date.split('-')[2]}/{entry.date.split('-')[1]}</div>
                          <div className="students">{entry.students}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Course Distribution */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Course Distribution</h3>
                  <div className="chart-actions">
                    <button className="chart-action-btn">View Details</button>
                  </div>
                </div>
                <div className="distribution-chart">
                  <div className="pie-chart">
                    {courseDistribution.map((course, index) => (
                      <div 
                        key={index}
                        className="pie-segment"
                        style={{
                          backgroundColor: course.color,
                          width: `${course.percentage}%`
                        }}
                      >
                        <span className="segment-label">{course.percentage}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="distribution-legend">
                    {courseDistribution.map((course, index) => (
                      <div key={index} className="legend-item">
                        <div 
                          className="legend-color"
                          style={{ backgroundColor: course.color }}
                        ></div>
                        <div className="legend-text">
                          <div className="legend-course">{course.course}</div>
                          <div className="legend-stats">{formatNumber(course.students)} students</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="activity-section">
            <div className="section-header">
              <h2>Recent Enrollments</h2>
              <button className="view-all-btn">View All</button>
            </div>
            
            <div className="recent-enrollments">
              {recentEnrollments.map(enrollment => (
                <div key={enrollment.id} className="enrollment-item">
                  <div className="student-info">
                    <div className="student-avatar">
                      {enrollment.student.charAt(0)}
                    </div>
                    <div className="student-details">
                      <div className="student-name">{enrollment.student}</div>
                      <div className="course-name">{enrollment.course}</div>
                    </div>
                  </div>
                  
                  <div className="enrollment-details">
                    <div className="amount">{formatCurrency(enrollment.amount)}</div>
                    <div className="time">{enrollment.time}</div>
                    <div className={`status ${enrollment.status}`}>
                      {enrollment.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Timeline */}
          <section className="timeline-section">
            <div className="section-header">
              <h2>Detailed Enrollment Timeline</h2>
              <div className="filter-controls">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Completed</button>
                <button className="filter-btn">Pending</button>
              </div>
            </div>
            
            <div className="detailed-timeline">
              {enrollmentTimeline.slice(-5).map((entry, index) => (
                <div key={index} className="timeline-entry">
                  <div className="timeline-marker">
                    <div className={`marker-dot ${entry.status}`}></div>
                  </div>
                  
                  <div className="timeline-content">
                    <div className="entry-header">
                      <div className="entry-date">{entry.date}</div>
                      <div className="entry-time">{entry.time}</div>
                    </div>
                    
                    <div className="entry-details">
                      <div className="students-count">
                        <span className="icon">👥</span>
                        {entry.students} students enrolled
                      </div>
                      <div className="amount-earned">
                        <span className="icon">💰</span>
                        {formatCurrency(entry.amount)} earned
                      </div>
                    </div>
                    
                    <div className={`entry-status ${entry.status}`}>
                      {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;