import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="grid h-screen place-content-center bg-white px-4">
          <div className="text-center">
            <h1 className="text-9xl font-black text-gray-200">404</h1>

            <p className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Oops!
            </p>

            <p className="my-4 text-gray-500">We can not find that destination page.</p>

            <Link to="/" className="btn btn-error">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
