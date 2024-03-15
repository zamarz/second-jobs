"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <h2 className="font-semibold text-2xl">
        It looks like something went wrong...
      </h2>
      <button className="button">
        <Link href="/">Try Again</Link>
      </button>
    </div>
  );
};

export default NotFound;
