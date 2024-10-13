import { CiLocationOn, CiDollar } from "react-icons/ci";

const AppliedJob = ({ job }) => {
  const {
    id,
    remote_or_onsite,
    logo,
    job_title,
    company_name,
    contact_information,
    job_type,
    salary,
  } = job;

  return (
    <div>
      <article className="flex bg-white transition shadow-xl ">
        <div className="hidden sm:block ">
          <img
            src={logo}
            alt={job_title}
            width={100}
            height={100}
            className=""
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 space-y-2">
            <h3 className="font-bold uppercase text-gray-900">{job_title}</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {id} {company_name}
            </p>
            <div className="space-x-2">
              <button className="btn btn-primary btn-outline rounded">
                {remote_or_onsite}
              </button>
              <button className="btn btn-primary btn-outline rounded">
                {job_type}
              </button>
            </div>
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                <CiLocationOn /> {contact_information.address}{" "}
              </p>
              <p className="flex items-center gap-2">
                <CiDollar /> {salary}
              </p>
            </div>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <button className="block btn btn-warning rounded">
              View Details
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AppliedJob;
