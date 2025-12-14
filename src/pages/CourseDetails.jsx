import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  return (
    <div className="container" style={{ padding: '100px 20px', minHeight: '80vh' }}>
      <h1>Course Details: {id}</h1>
      <p>Detailed course information will be displayed here.</p>
    </div>
  );
};

export default CourseDetails;
