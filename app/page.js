"use client";

import global from "styled-jsx/css";
import Navbar from "./Navbar/page";
import Part1 from "./Upper/page";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Part1 />
      {/* <Footer /> */}
    </div>
  );
}
