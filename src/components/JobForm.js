import React from "react";
import { Switch } from "@headlessui/react";

const JobForm = ({ selectedJob, handleChange, handleSwitch }) => {
  return (
    <div className="w-1/2 p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          name="title"
          value={selectedJob.title}
          onChange={handleChange}
          placeholder="Job Post Title"
          className="border p-2 w-full"
        />
        <div className="flex items-center ml-4">
          <span className="mr-2">Active?</span>
          <Switch
            checked={selectedJob.active}
            onChange={handleSwitch}
            className={`${
              selectedJob.active ? "bg-green-500" : "bg-gray-300"
            } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Active</span>
            <span
              className={`${
                selectedJob.active ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full`}
            />
          </Switch>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="introductionVisible"
              checked={selectedJob.introductionVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Introduction
          </label>
          <textarea
            name="introduction"
            value={selectedJob.introduction}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="responsibilitiesVisible"
              checked={selectedJob.responsibilitiesVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Roles & Responsibilities
          </label>
          <textarea
            name="responsibilities"
            value={selectedJob.responsibilities}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="experienceVisible"
              checked={selectedJob.experienceVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Experience Range (yrs)
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="experienceMin"
              value={selectedJob.experienceMin}
              onChange={handleChange}
              placeholder="Min"
              className="border p-2 w-full"
            />
            <input
              type="number"
              name="experienceMax"
              value={selectedJob.experienceMax}
              onChange={handleChange}
              placeholder="Max"
              className="border p-2 w-full"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="qualificationsVisible"
              checked={selectedJob.qualificationsVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Qualifications
          </label>
          <input
            type="text"
            name="qualifications"
            value={selectedJob.qualifications}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="salaryVisible"
              checked={selectedJob.salaryVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Salary Range
          </label>
          <input
            type="text"
            name="salary"
            value={selectedJob.salary}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="statementVisible"
              checked={selectedJob.statementVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Call To Action Concluding Statement
          </label>
          <textarea
            name="statement"
            value={selectedJob.statement}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="companyVisible"
              checked={selectedJob.companyVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Company
          </label>
          <input
            type="text"
            name="company"
            value={selectedJob.company}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="locationVisible"
              checked={selectedJob.locationVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Job Location
          </label>
          <input
            type="text"
            name="location"
            value={selectedJob.location}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="typeVisible"
              checked={selectedJob.typeVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Job Type
          </label>
          <select
            name="type"
            value={selectedJob.type}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">
            <input
              type="checkbox"
              name="labelsVisible"
              checked={selectedJob.labelsVisible}
              onChange={handleChange}
              className="mr-2"
            />
            Labels
          </label>
          <select
            multiple
            name="labels"
            value={selectedJob.labels}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "labels",
                  value: Array.from(
                    e.target.selectedOptions,
                    (option) => option.value
                  ),
                },
              })
            }
            className="border p-2 w-full"
          >
            <option value="Remote">Remote</option>
            <option value="5 Day Week">5 Day Week</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
