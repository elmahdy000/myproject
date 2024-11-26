import React from 'react';

function HomePage({ courses }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Uploaded Courses</h1>
      {courses.length === 0 ? (
        <p className="text-gray-600">No courses uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
              <video width="100%" controls className="mt-2">
                <source src={course.videoURL} type={course.videoType} />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
