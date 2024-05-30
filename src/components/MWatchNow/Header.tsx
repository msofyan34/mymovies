import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center pt-2">
      <h1 className="text-xl font-medium px-2">Watch Now</h1>
      <Link href="" className="cursor-pointer">
        See all
      </Link>
    </div>
  );
};
