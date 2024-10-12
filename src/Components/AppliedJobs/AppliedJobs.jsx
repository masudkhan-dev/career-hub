import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getOut } from "../../Utility/LocalStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  useEffect(() => {
    const jobIdFromLS = getOut();

    if(jobs.length > 0){
      // const jobsAplly = jobs.filter(job=> )
    }

  }, []);

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <h2>Welcome to AppliedJobs Page. </h2>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
