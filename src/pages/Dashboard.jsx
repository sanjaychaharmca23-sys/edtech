import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    membership: "Premium Member"
  };

  // Mock statistics
  const stats = {
    coursesEnrolled: 5,
    completedCourses: 2,
    certificates: 3,
    quizzesTaken: 12
  };

  // Quick actions
  const quickActions = [
    { 
      icon: "📚", 
      title: "My Courses", 
      description: "Continue your learning journey",
      action: () => navigate('/courses')
    },
    { 
      icon: "📝", 
      title: "Assignments", 
      description: "View pending assignments",
      action: () => navigate('/assignments')
    },
    { 
      icon: "🏆", 
      title: "Certificates", 
      description: "Download your achievements",
      action: () => navigate('/certificates')
    },
    { 
      icon: "⚙️", 
      title: "Settings", 
      description: "Manage your account",
      action: () => navigate('/profile')
    }
  ];

  // Progress data
  const progressData = [
    {
      course: "JEE Main 2025 Physics",
      progress: 75,
      lessons: 45,
      completed: 34
    },
    {
      course: "NEET Chemistry Masterclass",
      progress: 45,
      lessons: 60,
      completed: 27
    },
    {
      course: "Mathematics Foundation",
      progress: 90,
      lessons: 40,
      completed: 36
    }
  ];

  // Recent activities
  const activities = [
    {
      id: 1,
      title: "Completed Physics Quiz",
      description: "Scored 92/100 in Thermodynamics quiz",
      time: "2 hours ago",
      status: "completed",
      icon: "✅"
    },
    {
      id: 2,
      title: "New Assignment Posted",
      description: "Chemistry assignment on Organic Reactions",
      time: "1 day ago",
      status: "pending",
      icon: "📝"
    },
    {
      id: 3,
      title: "Course Progress Update",
      description: "Finished Mathematics Module 3",
      time: "2 days ago",
      status: "completed",
      icon: "📚"
    },
    {
      id: 4,
      title: "Live Class Scheduled",
      description: "JEE Physics Live Session tomorrow",
      time: "3 days ago",
      status: "in-progress",
      icon: "🎥"
    }
  ];

  // Sidebar navigation items
  const navItems = [
    { id: 'overview', icon: '📊', label: 'Overview' },
    { id: 'courses', icon: '📚', label: 'My Courses' },
    { id: 'assignments', icon: '📝', label: 'Assignments' },
    { id: 'certificates', icon: '🏆', label: 'Certificates' },
    { id: 'calendar', icon: '📅', label: 'Schedule' },
    { id: 'messages', icon: '💬', label: 'Messages' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'logout', icon: '🚪', label: 'Logout' }
  ];

  const handleNavClick = (itemId) => {
    setActiveTab(itemId);
    
    switch (itemId) {
      case 'courses':
        navigate('/courses');
        break;
      case 'assignments':
        navigate('/assignments');
        break;
      case 'certificates':
        navigate('/certificates');
        break;
      case 'settings':
        navigate('/profile');
        break;
      case 'logout':
        handleLogout();
        break;
      default:
        // Stay on dashboard for overview
        break;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="user-profile">
            <div className="avatar">
              <img src={user.avatar} alt={user.name} />
            </div>
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
            <span className="user-badge">{user.membership}</span>
          </div>
          
          <nav className="sidebar-nav">
            {navItems.map(item => (
              <div 
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Welcome Banner */}
          <section className="welcome-banner">
            <div className="welcome-content">
              <h1>Welcome back, {user.name.split(' ')[0]}!</h1>
              <p>Continue your learning journey and achieve your educational goals. You're making great progress!</p>
              
              <div className="banner-stats">
                <div className="stat-card">
                  <div className="stat-value">{stats.coursesEnrolled}</div>
                  <div className="stat-label">Courses Enrolled</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{stats.completedCourses}</div>
                  <div className="stat-label">Courses Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{stats.certificates}</div>
                  <div className="stat-label">Certificates</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{stats.quizzesTaken}</div>
                  <div className="stat-label">Quizzes Taken</div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="quick-actions">
            <h2 className="section-title">Quick Actions</h2>
            <div className="actions-grid">
              {quickActions.map((action, index) => (
                <div 
                  key={index} 
                  className="action-card"
                  onClick={action.action}
                >
                  <div className="action-icon">{action.icon}</div>
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Progress Section */}
          <section className="progress-section">
            <h2 className="section-title">Learning Progress</h2>
            <div className="progress-grid">
              {progressData.map((course, index) => (
                <div key={index} className="progress-card">
                  <div className="progress-header">
                    <h3>{course.course}</h3>
                    <div className="progress-percent">{course.progress}%</div>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-info">
                    <span>{course.completed}/{course.lessons} lessons completed</span>
                    <span>{course.lessons - course.completed} remaining</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activities */}
          <section className="activities-section">
            <h2 className="section-title">Recent Activities</h2>
            <div className="activities-list">
              {activities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className={`activity-icon ${activity.status}`}>
                    {activity.icon}
                  </div>
                  <div className="activity-content">
                    <h3 className="activity-title">{activity.title}</h3>
                    <p className="activity-desc">{activity.description}</p>
                    <div className="activity-meta">
                      <span>{activity.time}</span>
                      <span className={`activity-status ${activity.status}`}>
                        {activity.status.replace('-', ' ')}
                      </span>
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

export default Dashboard;