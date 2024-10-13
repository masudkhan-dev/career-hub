const Category = ({ category }) => {
  const { availability, category_name, logo } = category;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body flex flex-col justify-center items-center">
          <figure className="bg-violet-300 p-4  rounded-lg ">
            <img src={logo} alt={category_name} width={80} />
          </figure>
          <h2 className="text-2xl font-bold">{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
