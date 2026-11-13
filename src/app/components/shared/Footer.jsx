import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#0C0D10] md:px-0 px-4" style={{ borderBottom: "1px solid #1C1F26" }}>
      <div className="container mx-auto flex flex-col gap-3 md:flex-row justify-between items-center py-10 px-1">
        {/* Logo Part */}
        <div>
          <Link href="/" className="flex gap-2.5">
            <Image src={logo} alt="Fit Log" />{" "}
            <span className="text-white text-[18px] font-black font-oswald">
              FITLOG
            </span>
          </Link>
        </div>
        {/* Copyright Part */}
        <div>
            <p className="text-[#6B7280] font-inter text-[12px]">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
