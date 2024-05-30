"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <FileSearch size={32} />
        <h3 className="text-2xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className="text-xl font-medium hover:text-gray-400 transition-all underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
