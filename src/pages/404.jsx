import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="mb-2 text-3xl font-bold text-black-600">Whoops! {error.message}</h1>
      <p className="my-5 text-xl">Sorry, an error occurred.</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
