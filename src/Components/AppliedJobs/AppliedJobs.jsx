import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getOut } from "../../Utility/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const [applyJobs, setApplyJobs] = useState([]);
  const [filterJob, setFilterJob] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const jobIdFromLS = getOut();

    if (jobs.length > 0) {
      const jobsAplly = jobs.filter((job) => jobIdFromLS.includes(job.id));

      setApplyJobs(jobsAplly);
      setFilterJob(jobsAplly);
    }
  }, [jobs]);

  const handleFilterJobs = (filter) => {
    if (filter === "all") {
      setFilterJob(applyJobs);
    } else {
      const filteredJobs = applyJobs.filter(
        (job) =>
          job.remote_or_onsite ===
          filter.charAt(0).toUpperCase() + filter.slice(1)
      );
      setFilterJob(filteredJobs);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="flex justify-between my-10">
          <h2 className="text-3xl font-bold text-center my-5">
            Applied Jobs: {applyJobs.length}
          </h2>
          <details className="dropdown mr-16  ">
            <summary className="btn btn-success m-1">open or close</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li onClick={() => handleFilterJobs("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleFilterJobs("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleFilterJobs("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>

        <div className="grid gap-5">
          {filterJob.map((job) => (
            <AppliedJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
