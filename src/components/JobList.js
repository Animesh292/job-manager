import React from "react";

const JobList = ({ jobs, setSelectedJob, addJob, deleteJob, duplicateJob }) => {
  return (
    <div className="w-1/3 bg-gray-100 p-4 border-r">
      <button
        onClick={addJob}
        className="bg-blue-500 text-white p-2 rounded mb-4 w-full"
      >
        New Job +
      </button>
      <ul>
        {jobs.map((job) => (
          <li
            key={job.id}
            className="p-2 border-b flex justify-between items-center cursor-pointer hover:bg-gray-200"
          >
            <span onClick={() => setSelectedJob(job)} className="flex-1">
              {job.title || `Job Post ${job.id + 1}`}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => duplicateJob(job)}
                className="bg-yellow-500 text-white p-1 rounded"
              >
                Duplicate
              </button>
              <button
                onClick={() => deleteJob(job.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
