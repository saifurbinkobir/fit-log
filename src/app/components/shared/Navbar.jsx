"use client";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const menuItem = (
        <>
            <li className={`font-inter text-[12px] font-medium ${
            pathname === "/"
              ? "bg-[#1A2312] rounded-[99px] text-[#C2F800]"
              : "text-[#9CA3AF]"
          }`}><Link href={"/"}>Workout</Link></li>
            <li className={`font-inter text-[12px] font-medium ${
            pathname === "/my-plan"
              ? "bg-[#1A2312] rounded-[99px] text-[#C2F800]"
              : "text-[#9CA3AF]"
          }`}><Link href={"/my-plan"}>My Plan</Link></li>
        </>
    )
  return (
    <nav className="bg-[#0C0D10] border border-b-[#1C1F26]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#0C0D10]"
            >
              {menuItem}
            </ul>
          </div>
          <Link href="/" className="flex gap-2.5">
                <Image src={logo} alt="Fit Log"/> <span className="text-white text-[18px] font-black font-oswald">FITLOG</span>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {menuItem}
          </ul>
        </div>
        <div className="navbar-end flex gap-6">
          <Link href={"/my-plan"} className="text-[#D1D5DB] font-medium font-inter text-[12px]">Plan <span className="bg-[#C2F800] text-black text-[11px] font-bold font-inter rounded-[50px] px-1 py-0.5">0</span></Link>
          <Link href={"/my-plan"} className="text-[#9CA3AF] font-medium font-inter text-[12px]">Saved <span className=" text-white text-[11px] font-bold font-inter rounded-[50px] border border-[#2D313B] px-1 py-0.5">0</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
