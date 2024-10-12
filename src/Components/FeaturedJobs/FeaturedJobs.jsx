import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("jobs.json");
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <h2 className="text-center text-4xl font-bold">Featured Jobs</h2>
          <p className="text-[#757575] text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>

        <div className={dataLength === jobs.length && "hidden "}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary rounded text-center my-10"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
