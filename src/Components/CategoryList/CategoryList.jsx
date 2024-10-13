import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("categories.json");
      setCategories(res.data);
    };

    fetch();
  }, []);

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <h2 className="text-center text-4xl font-bold">Category List</h2>
          <p className="text-[#757575] text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-10">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
