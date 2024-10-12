import { CiLocationOn, CiDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const {
    id,
    logo,
    company_name,
    job_title,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = job;

  const handleJobDetail = () => {
    navigate(`/job/${id}`);
  };

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div className="card bg-base-100   shadow-xl">
            <div className="card-body space-y-2">
              <img src={logo} alt={company_name} width={100} />
              <h2 className="card-title">{job_title}</h2>
              <p className="text-[#757575] text-md">
                {id}. {company_name}
              </p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary btn-outline rounded">
                  {remote_or_onsite}
                </button>
                <button className="btn btn-primary btn-outline rounded">
                  {job_type}
                </button>
              </div>
              <div className="flex space-x-3">
                <div className="flex items-center space-x-1">
                  <CiLocationOn />
                  <span className="text-[#757575] text-sm">{location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CiDollar />
                  <span className="text-[#757575] text-sm">{salary}</span>
                </div>
              </div>
              <button
                onClick={handleJobDetail}
                className="btn btn-active btn-accent"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
