import "./index.css";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import FormComponent from "./formComponent";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const getRandomColor = () => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const textRef = useRef(null);
  const intro = useRef(null);
  useEffect(() => {
    const element = textRef.current;
    // Start the animation
    gsap.from(element, {
      x: 2000,
    });
    // Move the element as you scroll
    gsap.to(element, {
      x: -390, // Move to -610px horizontally
      scrollTrigger: {
        trigger: element,
        start: "top-=300 center", // Starts 200px before the element hits the center of the viewport
        end: "bottom top ", // Ends when the bottom of the element hits the top of the viewport
        scrub: true, // Link animation to scroll position
      },
    });
  }, []);

  // const rows = 50; // Number of rows
  // const columns = 50; // Number of columns

  // const renderDots = () => {
  //   let dots = [];
  //   for (let i = 0; i < rows; i++) {
  //     for (let j = 0; j < columns; j++) {
  //       dots.push(
  //         <div
  //           // key={`${i}-${j}`}
  //           className="p-16   transition-transform transform hover:scale-150 shadow-lg"
  //           // style={{ backgroundColor: getRandomColor() }}
  //         ></div>
  //       );
  //     }
  //   }
  //   return dots;
  // };

  // return (
  //   <div className="flex bg-hero-image ">
  //     <div className="flex flex-wrap justify-center items-center h-fit gap-6  ">
  //       <img className="flex rounded-full w-15 h-15 " src="/profile.jpeg" />
  //     </div>
  //   </div>
  // );
  // const items = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className=" relative p-10 bg-hero-image h-fit  bg-cover bg-center overflow-hidden  ">
      <div className="flex justify-center w-full p-20   ">
        {/* sticky top-0 z-50   */}
        <nav className=" bg-white/30 rounded-[50px] p-10 w-1/2 flex align-middle">
          <h1 className="text-5xl text-white font-bold w-full  flex justify-center  opacity-20">
            Hello World
          </h1>
        </nav>
      </div>
      <div className=" flex  mb-[230px] flex-col sm:flex-row items-center  w-full p-20 gap-10  bg-white/30 backdrop-blur-md rounded-3xl  transition-transform transform  hover:-translate-y-6  hover:scale-105 ">
        {/* reflect-below */}
        <img
          className="max-h-64 max-w-64 rounded-full object-fill"
          src={`${process.env.PUBLIC_URL}/prof.jpeg`}
        />

        <p className="text-white text-3xl z-10 relative  w-full">
          I'm Himalaya: a versatile frontend developer proficient in ReactJS,
          React Native, Next.js and more. With a strong focus on creating
          exceptional UI/UX across web and mobile platforms, I excel in
          collaborating with cross-functional teams to deliver high-quality
          products. My expertise extends to building responsive interfaces,
          optimizing performance, and ensuring seamless navigation. Beyond
          skills, I am dedicated to continuous learning and staying updated with
          the latest trends in development.
        </p>
      </div>
      <div
        ref={textRef}
        class="w-full inline-flex flex-nowrap overflow-hidden shadow-neon    backdrop-blur-md mt-20 relative rounded-3xl z-20"
      >
        <div class=" bg-white/20    gradient-blur-left z-30"></div>
        <div class=" bg-white/20  gradient-blur-right z-30"></div>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <img
              className="max-h-56 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/reacta.png`}
            />
          </li>
          <li>
            <img
              className="max-h-44 object-fill"
              src={`${process.env.PUBLIC_URL}/tailwind.png`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/nxtjs.svg
              `}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/css.png`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/js.png`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/java.png`}
            />
          </li>
          <li>
            <img
              className="max-h-44 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/trello.png`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/bootstarp.png`}
            />
          </li>
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <img
              className="max-h-56 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/reacta.png`}
            />
          </li>
          <li>
            <img
              className="max-h-44 object-fill"
              src={`${process.env.PUBLIC_URL}/tailwind.png`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/nxtjs.svg`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/css.png`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/js.png`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/java.png`}
            />
          </li>
          <li>
            <img
              className="max-h-44 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/trello.png`}
            />
          </li>
          <li>
            <img
              className="max-h-48 max-w-64 object-fill"
              src={`${process.env.PUBLIC_URL}/bootstarp.png`}
            />
          </li>
        </ul>
      </div>
      <div
        className="relative w-full text-3xl text-white rounded-3xl  flex justify-center" // Set a background color to visualize bounds
      >
        <FormComponent />
      </div>
    </div>
  );
};

export default App;
// const Resume = styled.div`
//   background-color: rgba(255, 255, 255, 0.1);
//   border-radius: 30px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 80px;
//   width: 100%;
//   backdrop-filter: blur(10px);
//   font-size: 100px;
//   font-weight: 500;
//   display: flex;
//   justify-content: center;
//   color: aliceblue;
// `;
