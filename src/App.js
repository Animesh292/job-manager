import React, { useState } from "react";
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import JobPreview from "./components/JobPreview";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const addJob = () => {
    const newJob = {
      id: jobs.length,
      title: "",
      introduction: "",
      responsibilities: "",
      experienceMin: "",
      experienceMax: "",
      qualifications: "",
      salary: "",
      statement: "",
      company: "",
      location: "",
      type: "Full Time",
      labels: [],
      active: true,
      titleVisible: true,
      introductionVisible: true,
      responsibilitiesVisible: true,
      experienceVisible: true,
      qualificationsVisible: true,
      salaryVisible: true,
      statementVisible: true,
      companyVisible: true,
      locationVisible: true,
      typeVisible: true,
      labelsVisible: true,
    };
    setJobs([...jobs, newJob]);
    setSelectedJob(newJob);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
    if (selectedJob && selectedJob.id === id) {
      setSelectedJob(null);
    }
  };

  const duplicateJob = (job) => {
    const newJob = { ...job, id: jobs.length };
    setJobs([...jobs, newJob]);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setSelectedJob({ ...selectedJob, [name]: checked });
    } else {
      setSelectedJob({ ...selectedJob, [name]: value });
    }
    setJobs(jobs.map((job) => (job.id === selectedJob.id ? selectedJob : job)));
  };

  const handleSwitch = () => {
    setSelectedJob({ ...selectedJob, active: !selectedJob.active });
    setJobs(jobs.map((job) => (job.id === selectedJob.id ? selectedJob : job)));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Job Post Manager</h1>
      <div className="flex">
        <JobList
          jobs={jobs}
          setSelectedJob={setSelectedJob}
          addJob={addJob}
          deleteJob={deleteJob}
          duplicateJob={duplicateJob}
        />
        {selectedJob ? (
          <>
            <JobForm
              selectedJob={selectedJob}
              handleChange={handleChange}
              handleSwitch={handleSwitch}
            />
            <JobPreview selectedJob={selectedJob} />
          </>
        ) : (
          <p>Select a job to see the details</p>
        )}
      </div>
    </div>
  );
}

export default App;
