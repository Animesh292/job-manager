import React from "react";

const JobPreview = ({ selectedJob }) => {
  return (
    <div className="w-1/2 p-4 border-l">
      <h3 className="text-xl font-bold mb-4">Live Preview</h3>
      <div>
        {selectedJob.titleVisible && (
          <h1 className="text-2xl font-bold mb-2">{selectedJob.title}</h1>
        )}
        {selectedJob.introductionVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p>{selectedJob.introduction}</p>
          </div>
        )}
        {selectedJob.responsibilitiesVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Roles & Responsibilities</h2>
            <p>{selectedJob.responsibilities}</p>
          </div>
        )}
        {selectedJob.experienceVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Preferred Experience</h2>
            <p>
              {selectedJob.experienceMin} to {selectedJob.experienceMax} years
            </p>
          </div>
        )}
        {selectedJob.qualificationsVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Qualifications</h2>
            <p>{selectedJob.qualifications}</p>
          </div>
        )}
        {selectedJob.salaryVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Salary Range</h2>
            <p>{selectedJob.salary}</p>
          </div>
        )}
        {selectedJob.statementVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Concluding Statement</h2>
            <p>{selectedJob.statement}</p>
          </div>
        )}
        {selectedJob.companyVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Company</h2>
            <p>{selectedJob.company}</p>
          </div>
        )}
        {selectedJob.locationVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Location</h2>
            <p>{selectedJob.location}</p>
          </div>
        )}
        {selectedJob.typeVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Job Type</h2>
            <p>{selectedJob.type}</p>
          </div>
        )}
        {selectedJob.labelsVisible && (
          <div className="mb-2">
            <h2 className="text-xl font-semibold">Labels</h2>
            <p>{selectedJob.labels.join(", ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPreview;
