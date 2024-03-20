import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  document.title = "GoMarkho Not Found";

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-black font-extrabold text-[150px]">
        4 <span className="px-0 mx-0 text-sky-500">0</span> 4
      </h1>
      <Link to="/" className="btn-primary-lg">
        Go to home page
      </Link>
    </main>
  );
};

export default NotFound;
