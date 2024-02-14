"use client";
import React from "react";
import { global } from "styled-jsx/css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [active, setactive] = useState(false);
  function changes() {
    console.log(setactive(!active));
  }

  return (
    <div className="navbar flex   bg-black">
      <div
        className="hamburger  flex-col mx-5 my-1 m-20 pb-3 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden relative "
        onClick={changes}
      >
        <div className="line h-1 w-3 bg-white my-1"></div>
        <div className="line h-1 w-3 bg-white my-1"></div>
        <div className="line h-1 w-3 bg-white my-1"></div>
      </div>
      <div className="overr flex-col mx-5 my-10 m-20 absolute   sm:block md:hidden lg:hidden xl:hidden 2xl:hidden bg-black ">
        <div className={active ? "me" : "overr"}>
          <Image src="./oglogo.svg" height={40} width={40}></Image>
          <div className="first  text-blue-600"></div>
          <div className="second  text-blue-600">
            <a href="#home">Home</a>
          </div>
          <div className="third  text-blue-600 ">
            <a href="#about">About</a>
          </div>
          <div className="fourth  text-blue-600">
            <Link href="/Contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="notham flex justify-center items-center hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex  space-x-2 px-10 rounded-sm">
        <div className="first  text-blue-600 p-11">
          <Image src="./oglogo.svg" height={40} width={40}></Image>
        </div>
        <div className="second text-blue-600 p-11">
          <a href="#home">Home</a>
        </div>
        <div className="third text-blue-600 p-11 ">
          <a href="#about">About</a>
        </div>
        <div className="fourth  text-blue-600 p-11">
          <Link href="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
