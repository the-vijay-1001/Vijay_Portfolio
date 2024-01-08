import { Nav_Links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CommonButton from "./CommonButton";

const Navbar = () => {

  return (
    <>
      <nav className="border  flex justify-around items-center max-containerpadding-container relative z-30 py-2">
        <Link href="/" className="p-1">
          <Image src="/portHome.png" alt="home" width={85} height={0} />
        </Link>
        <ul className="hidden h-full font-semibold gap-12 lg:flex p-5 text-slate-600">
          {Nav_Links.map((data, index) => (
            <Link
              href={data.href}
              className="text-gray-110 flexCenter cursor-pointer pb-1.5 transition-all  hover:text-purple-700"
            >
              {data.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flex  hidden">
          <CommonButton title="My Resume" icon="fa fa-download" />
        </div>

        <div className="inline-block cursor-pointer lg:hidden">
          <i className="fa fa-bars fa-lg"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
