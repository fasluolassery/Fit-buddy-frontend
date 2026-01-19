import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-semibold text-gray-800">404</h1>

        <p className="mt-4 text-lg text-gray-600">
          The page you’re looking for doesn’t exist.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          It may have been moved or the URL might be incorrect.
        </p>

        <div className="mt-6">
          <Link
            replace
            to="/"
            className="inline-block rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
