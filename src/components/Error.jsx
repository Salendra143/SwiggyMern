import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mb-8">{error?.statusText || error?.message}</p>
      <a href="/" className="text-indigo-600 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default Error;
