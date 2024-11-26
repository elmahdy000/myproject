import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import UploadCourse from './UploadCourse';

function App() {
  const [courses, setCourses] = useState([]);

  // Load courses from localStorage on initial render
  useEffect(() => {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  // Save courses to localStorage whenever courses state changes
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/" className="text-gray-800 text-xl font-bold">Course Uploader</Link>
              </div>
              <div className="flex">
                <Link to="/" className="text-gray-600 mx-2 hover:text-blue-600">Home</Link>
                <Link to="/upload" className="text-gray-600 mx-2 hover:text-blue-600">Upload Course</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<HomePage courses={courses} />} />
            <Route path="/upload" element={<UploadCourse setCourses={setCourses} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
