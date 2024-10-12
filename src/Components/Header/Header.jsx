import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/applied">Applied Jobs</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="bg-white py-2 shadow-lg">
      <div className="container mx-auto px-3 lg:px-0">
        <div className="flex justify-between">
          <Link to="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>

          <div className="dropdown lg:hidden ">
            <button tabIndex={0} className="btn btn-ghost ">
              <IoMdMenu className="w-8 h-8" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow right-0 top-12"
            >
              {navItem}
            </ul>
          </div>

          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
