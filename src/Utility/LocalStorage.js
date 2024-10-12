const getStoredJob = () => {
  const storedJob = localStorage.getItem("job-applications");
  if (storedJob === true) {
    return JSON.parse(storedJob);
  } else {
    return [];
  }
};

const saveJob = (id) => {
  const storedJob = getStoredJob();
  const exits = storedJob.find((jobId) => jobId === id);
  if (!exits) {
    storedJob.push(id);
  }

  localStorage.setItem("job-applications", JSON.stringify(storedJob));
};

export { getStoredJob, saveJob };
