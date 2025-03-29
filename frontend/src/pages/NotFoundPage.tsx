import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <img
        src="/404.jpeg"
        alt="Page not found"
        className="w-1/2 max-w-md mb-6"
      />
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
