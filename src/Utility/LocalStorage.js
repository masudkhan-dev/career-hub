const setIn = (id) => {
  const exist = getOut();

  if (!exist.includes(id)) {
    localStorage.setItem("job-applications", JSON.stringify([...exist, id]));
  }
};

const getOut = () => {
  return JSON.parse(localStorage.getItem("job-applications")) || [];
};

export { getOut, setIn };
