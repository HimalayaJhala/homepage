// import React, { useState } from "react";

// const FormComponent = () => {

//   const [addform, setform] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const handlesubmit = (e) => {
//     e.preventDefault();
//     console.log(addform);
//   };

//   return (
//     <>
//       <div className="flex flex-col  mt-20 rounded-3xl justify-center items-center   p-4 bg-[#737373]/40 backdrop-blur-sm">
//         <form
//           onSubmit={handlesubmit}
//           className="flex flex-col gap-5 w-full z-50 mr-28 mt-10 mb-10 ml-28 p-3"
//         >
//           <div className=" w-full  gap-5 flex  flex-col">
//             <div className="flex flex-col max-w-xl gap-2  ">
//               <label className="text-sm font-medium text-[#737373]">Name</label>
//               <input
//                 onChange={(e) => setform({ ...addform, name: e.target.value })}
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full p-2  rounded-md bg-slate-400/20 placeholder: text-base"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-[#737373]">
//                 Email
//               </label>
//               <input
//                 onChange={(e) => setform({ ...addform, email: e.target.value })}
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full p-2   rounded-md placeholder: text-base bg-slate-400/20"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className=" font-medium placeholder: text-base text-[#737373]">
//                 Message
//               </label>
//               <textarea
//                 onChange={(e) =>
//                   setform({ ...addform, message: e.target.value })
//                 }
//                 rows="7"
//                 placeholder="Enter your message"
//                 className="w-full p-2  rounded-md placeholder: text-base bg-slate-400/20"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-1 px-3 bg-[#737373]/50 text-white text-base font-semibold rounded-md hover:bg-[#737373]"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default FormComponent;

// import React, { useState, useRef } from "react";
// import gsap from "gsap";

// const FormComponent = () => {
//   const myform = React.createRef();
//   gsap.to(myform, { opacity: 1, duration: 0.5, y: 0, ease: "power3.out" });

//   const [result, setResult] = useState("");
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "7c5293bd-5c92-4f4e-9df8-3ea2861ed22d");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       setResult("Form Submitted Successfully");
//       console.log("Success", res);
//       alert("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       event.target.reset();
//       setResult(res.message);
//       console.log("Error", res);
//     }
//   };

//   return (
//     <>
//       <div
//         ref={myform}
//         className="flex flex-col mt-20 rounded-3xl justify-center items-center  shadow-neon p-4 bg-[#737373]/40 backdrop-blur-sm "
//       >
//         <form
//           onSubmit={onSubmit}
//           className="flex flex-col gap-5 w-full z-50 mr-28 mt-10 mb-10 ml-28 p-3 "
//         >
//           <div className="w-full gap-5 flex flex-col">
//             <div className="flex flex-col max-w-xl gap-2">
//               <label className="text-sm font-medium text-[#737373]">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 className="w-full p-2 rounded-md bg-slate-400/20 placeholder: text-base"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-medium text-[#737373]">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="w-full p-2 rounded-md placeholder: text-base bg-slate-400/20"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="font-medium placeholder: text-base text-[#737373]">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 rows="7"
//                 placeholder="Enter your message"
//                 className="w-full p-2 rounded-md placeholder: text-base bg-slate-400/20"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-1 px-3 bg-[#737373]/50 text-white text-base font-semibold rounded-md hover:bg-[#737373]"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//         {result && <p className="mt-4 text-[#737373]">{result}</p>}
//       </div>
//     </>
//   );
// };

// export default FormComponent;
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const FormComponent = () => {
  const formRef = useRef(null);
  const fromRefa = useRef(null);

  //   useEffect(() => {
  //     gsap.to(formRef.current, {
  //       opacity: 1,
  //       duration: 5,
  //       x: 400,
  //       yoyo: true,
  //       ease: "power3.out",
  //     });
  //   }, []);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 1,
      duration: 4,
      x: 415,
      yoyo: true,
      ease: "sine",
    });
  }, []);

  useEffect(() => {
    if (fromRefa.current) {
      gsap.from(fromRefa.current, {
        opacity: 1,
        duration: 4,
        x: -415,
        yoyo: true,
        ease: "sine",
      });
    }
  }, []);

  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c5293bd-5c92-4f4e-9df8-3ea2861ed22d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully");
      console.log("Success", res);
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      event.target.reset();
      setResult(res.message);
      console.log("Error", res);
    }
  };

  return (
    <>
      <div className="flex sm:grid sm:grid-cols-12  flex-row mt-20 rounded-3xl justify-center items-center shadow-neon p-4 bg-[#737373]/40 backdrop-blur-sm">
        {/* <div className="flex flex-col sm:col-span-6  rounded-3xl justify-center items-center  h-[36rem] bg-[#737373]/40 backdrop-blur-sm">
          <p>Send me a message</p>
        </div> */}
        <div
          ref={formRef}
          className="flex flex-col sm:col-span-6  truncate text-center rounded-3xl justify-center  items-center h-[36rem] bg-[#737373]/10 backdrop-blur-sm"
        >
          <p className=" w-full text-base truncate ">Send me a message</p>
        </div>

        <div
          ref={fromRefa}
          className="flex flex-col sm:col-span-6  rounded-3xl justify-center items-center  p-4 bg-[#737373]/40 "
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 w-full z-50 mr-28 mt-10 mb-10 ml-28 p-3"
          >
            <div className=" gap-5 flex flex-col">
              <div className="flex flex-col  gap-2">
                <label className="text-sm font-medium text-[#737373]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name "
                  className="w-full p-2 rounded-md truncate bg-slate-400/20 placeholder: text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#737373]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-md truncate placeholder: text-base bg-slate-400/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium placeholder: text-base text-[#737373]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Enter your message"
                  className="w-full p-2 rounded-md placeholder: text-base bg-slate-400/20"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-1 px-3 bg-[#737373]/50 text-white text-base font-semibold rounded-md hover:bg-[#737373]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {result && <p className="mt-4 text-[#737373]">{result}</p>}
      </div>
    </>
  );
};

export default FormComponent;
