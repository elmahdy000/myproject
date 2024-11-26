import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadCourse({ setCourses }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const navigate = useNavigate();

  const handleVideoUpload = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !videoFile) {
      alert('Please fill in all fields and select a video.');
      return;
    }

    // Create a URL for the video file
    const videoURL = URL.createObjectURL(videoFile);
    const videoType = videoFile.type;

    // Create new course object
    const newCourse = {
      title,
      description,
      videoURL,
      videoType
    };

    // Add new course to courses state
    setCourses(prevCourses => [...prevCourses, newCourse]);

    // Reset form
    setTitle('');
    setDescription('');
    setVideoFile(null);

    // Navigate to home page
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Upload New Course</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Course Title:</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Course Description:</label>
          <textarea
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Video:</label>
          <input
            type="file"
            accept="video/*"
            className="mt-2"
            onChange={handleVideoUpload}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload Course
        </button>
      </form>
    </div>
  );
}

export default UploadCourse;
