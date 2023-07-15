import Link from "next/link";
import React from "react";

interface Props {
  fixed?: boolean;
}

export default function Navbar({ fixed }: Props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 bg-gray">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Legends Never Die
            </Link>
          
          </div>
          
        </div>
      </nav>
    </>
  );
}