"use client";

import * as React from "react";
import LoginFields from "./LoginFields.screen";
import SignupFields from "./SignupFields.screen";

export default function LoginForm() {
  const [currentPage, setCurrentPage] = React.useState("Register");

  const activeClassLink =
    "bg-white outline-none border-none font-sm text-indigo-700 py-0.5 px-6 shadow-lg shadow-slate-400/40 rounded-lg cursor-pointer";
  const normalClassLink = "text-indigo-700 py-0.5 font-bold cursor-pointer";

  const handlePageChange = (value: string) => {
    if (value !== currentPage) {
      setCurrentPage(value);
    }
  };



  return (
    <>
      <div>
        <div className="flex justify-center gap-3 mt-6">
          <a
            className={
              currentPage === "Sign In" ? activeClassLink : normalClassLink
            }
            onClick={() => handlePageChange("Sign In")}
          >
            Sign In
          </a>
          <a
            className={
              currentPage === "Register" ? activeClassLink : normalClassLink
            }
            onClick={() => handlePageChange("Register")}
          >
            Register
          </a>
        </div>
        <div className="mt-10">
          {currentPage === "Register" ? <SignupFields /> : <LoginFields />}
        </div>
      </div>
    </>
  );
}
