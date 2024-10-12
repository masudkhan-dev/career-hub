import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setIn } from "../../Utility/LocalStorage";

const JobDetail = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => parseInt(job.id) == id);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  console.log(job);

  const handleApplyJob = () => {
    setIn(id);

    toast("Application succecfull!");
  };

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <h2 className="text-3xl font-extrabold text-center my-10">
            Job Detail{" "}
          </h2>
        </div>
        <div className="grid  md:grid-cols-4">
          <div className="md:col-span-3">
            <h4>
              <span className="font-bold underline text-lg">
                Job Description:
              </span>
              {job_description}
            </h4>
            <h4>
              <span className="font-bold underline text-lg">
                Job Responsibility:
              </span>
              {job_responsibility}
            </h4>
            <span className="font-bold underline text-lg">
              Educational Requirements:
            </span>
            <p>{educational_requirements}</p>
            <p className="font-bold underline text-lg">Experiences:</p>
            <p>{experiences}</p>
          </div>
          <div className="md:col-span-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Job Details</h2>
                <div className="border-t"></div>
                <p>Salary: {salary} </p>
                <h2>Job Title: {job_title}</h2>

                <h2 className="card-title">Contact Information</h2>
                <div className="border-t"></div>
                <p>Phone: {contact_information.phone}</p>
                <p>Email: {contact_information.email}</p>
                <p>Adress: {contact_information.address}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={handleApplyJob}
                    className="btn btn-info btn-wide"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
