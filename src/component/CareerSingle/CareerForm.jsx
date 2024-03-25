import React, { useRef, useState } from "react";
import { MdUpload } from "react-icons/md";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerForm = ({ position }) => {
  const fileInputRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoading] = useState(false);
  const jobTitle = position[0].title; //GETTING POSITION TITLE

  // SUBMITTING DATA
  const sendEmail = async (data) => {
    const file = data.resume[0];

    const formData = {
      ...data,
      resume: file,
      position: jobTitle,
    };
    setLoading(true);
    console.log(formData);
    try {
      await axios.post(
        "https://email-service-two.vercel.app/submit-form",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      toast.success("Data submitted successfully!", "success");
      reset();
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Error submitting data. Please try again", "error");
      setLoading(false);
    }
  };

  return (
    <div id="form">
      <h2 className="text-black font-bold text-center font-primary tracking-wide xl:text-[50px] lg:text-[40px] text-[30px] capitalize  leading-none md:pb-10 pb-6 ">
        Apply Now
      </h2>
      <main className="career_form_section md:py-[100px] py-[40px] xl:px-[70px] px-[25px] rounded-[20px] bg-blue lg:mx-[150px] md:mx-[100px] mx-[30px] mb-[100px] relative">
        <section className="w-[350px] h-auto absolute lg:bottom-[-10%] bottom-[65%] xl:left-[-25%] lg:left-[-45%] left-[-25%] rotate-[-20deg] z-[-1] lg:block hidden">
          <img src="/image/shape.png" alt="" />
        </section>
        <form
          className="grid md:grid-cols-2 grid-cols-1  lg:gap-[40px] gap-[20px]"
          onSubmit={handleSubmit(sendEmail)}
        >
          {/* NAME FIELD */}
          <div className="mb-4 field_one">
            <p className="text-white font-normal  md:text-[18px] text-[16px] mb-2 ">
              Full Name*
            </p>
            <input
              type="text"
              name="name"
              required
              placeholder="full name"
              className="block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 "
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <span className="block text-xs text-black">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* EMAIL FIELD */}
          <div className="mb-4 field_one">
            <p className="text-white font-normal  md:text-[18px] text-[16px] mb-2 ">
              Your Email*
            </p>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              className="block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 "
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
                message: "Invalid email address",
              })}
            />
            {errors.email && (
              <span className="block text-xs text-black">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* UPLOAD FILE FIELD */}
          <div className="mb-4 field_one">
            <p className="text-white font-normal  md:text-[18px] text-[16px] mb-2">
              Resume*
            </p>
            <div
              className="w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px] rounded-2xl lg:px-5 px-2  text-gray bg-white flex justify-between items-center "
              // onClick={handleDivClick}
            >
              Upload your resume
              <input
                type="file"
                name="resume"
                className="hidden text-transparent "
                accept=".pdf"
                ref={fileInputRef}
                id="resume"
                //   onChange={(event) => console.log(event.target.files, "working")}
                {...register("resume", { required: "Resume is required" })}
              />
              {errors.resume && (
                <span className="block text-xs text-black">
                  {errors.resume.message}
                </span>
              )}
              <label
                htmlFor="resume"
                className="flex items-center text-black md:text-[14px] text-[12px] font-medium py-2 px-3 rounded-[5px] bg-soft-white cursor-pointer "
              >
                upload file{" "}
                <span className="ms-2 text-[15px]">
                  {" "}
                  <MdUpload />
                </span>
              </label>
            </div>
          </div>
          {/* PHONE NUMBER FIELD */}
          <div className="mb-4 field_one">
            <p className="text-white font-normal  md:text-[18px] text-[16px] mb-2 ">
              Phone
            </p>
            <input
              type="tel"
              required
              name="number"
              placeholder="how can we help"
              className="block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 "
              {...register("number", {
                required: "Number is required",
                minLength: 11,
                maxLength: 11,
                message: "Number must contain at least 11 digits",
              })}
            />
            {errors.number && (
              <span className="block text-xs text-black">
                {errors.number.message}
              </span>
            )}
          </div>
          {/* TEXT AREA FIELD */}
          <div className="field_one md:col-span-2 ">
            <p className="text-white font-normal  md:text-[18px] text-[16px] mb-2 ">
              CoverLetter
            </p>
            <textarea
              type="tel"
              required
              name="letter"
              placeholder="tell about yourself a bit"
              className="block w-full h-[250px] lg:text-[15px] text-[14px]   pt-5 rounded-2xl px-5 text-gray focus:outline-sky-500 resize-none "
              {...register("letter", { required: "Cover letter is required" })}
            ></textarea>
            {errors.letter && (
              <span className="block text-xs text-black">
                {errors.letter.message}
              </span>
            )}
          </div>
          {/* SUBMIT BUTTON */}
          <div className="flex items-center justify-center md:col-span-2">
            <button
              type="submit"
              className=" inline-block mt-9 capitalize font-bold text-white bg-sky-500 rounded-full md:px-[40px] px-[30px]  py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black "
            >
              {isLoading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CareerForm;
