import React from "react";
import "./index.css";

// const getRandomColor = () => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

const App = () => {
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
  return (
    <div className="bg-hero-image h-fit sm:h-screen bg-cover bg-center p-20  ">
      <div className=" flex flex-col sm:flex-row items-center  w-full p-10 gap-10 bg-white/20 backdrop-blur-md rounded-3xl  transition-transform transform  hover:-translate-y-6  hover:scale-105 ">
        <img
          className="max-h-64 max-w-64 rounded-full object-fill "
          src="/prof.jpeg"
        />
        <p className="text-white text-3xl z-10 relative   w-full">
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
    </div>
  );
};

export default App;
