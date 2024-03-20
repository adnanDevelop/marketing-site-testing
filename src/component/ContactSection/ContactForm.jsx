import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  // SUBMITTING DATA
  const sendEmail = async (data) => {
    setLoading(true);
    try {
      await axios.post(
        "https://email-service-two.vercel.app/contact-form",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      toast.success("Data submitted successfully!", "success");
      reset();
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Error submitting data.", "error");
      setLoading(false);
    }
  };

  return (
    <section className="career_form_section md:py-[60px] py-[40px] xl:px-[50px] px-[25px]  rounded-[30px] bg-white drop-shadow-1xl lg:mx-[150px] md:mx-[100px] mx-[30px] mb-[100px]  ">
      <form
        className="grid md:grid-cols-2 grid-cols-1  lg:gap-[25px] gap-[20px]"
        onSubmit={handleSubmit(sendEmail)}
      >
        {/* NAME FIELD */}
        <div className="mb-3 field_one">
          <p className="text-black font-semibold  md:text-[18px] text-[16px] mb-2">
            Full Name*
          </p>
          <input
            type="text"
            id="fullName"
            placeholder="Full name"
            className=" border border-[#D3D3D3] block w-full lg:text-[15px] text-[14px]  md:h-[60px] h-[50px] rounded-2xl px-5 text-gray focus:outline-sky-500 "
            name="name"
            {...register("name", { required: true })}
          />
        </div>
        {/* EMAIL FIELD */}
        <div className="mb-3 field_one">
          <p className="text-black font-semibold  md:text-[18px] text-[16px] mb-2 ">
            Your Email*
          </p>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className=" border border-[#D3D3D3] block w-full lg:text-[15px] text-[14px]  md:h-[60px] h-[50px] rounded-2xl px-5 text-gray focus:outline-sky-500 "
            name="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        {/* COMPANY FIELD */}
        <div className="mb-3 field_one">
          <p className="text-black font-semibold  md:text-[18px] text-[16px] mb-2 ">
            company*
          </p>
          <input
            type="text"
            id="company"
            className=" border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 "
            placeholder="Your company name here"
            name="company"
            {...register("company", { required: true })}
          />
        </div>

        {/* SUBJECT FIELD */}
        <div className="mb-3 field_one">
          <p className="text-black font-semibold  md:text-[18px] text-[16px] mb-2 ">
            Subject*
          </p>
          <input
            type="text"
            id="subject"
            className=" border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 "
            placeholder="how can we help"
            name="subject"
            {...register("subject", { required: true })}
          />
        </div>
        {/* TEXT AREA FIELD */}
        <div className="mb-4 field_one md:col-span-2 ">
          <p className="text-black font-semibold  md:text-[18px] text-[16px] mb-2 ">
            Message*
          </p>
          <textarea
            id="fullName"
            placeholder="Hello there,I would like to talk about how to..."
            className=" border border-[#D3D3D3] block w-full h-[250px]  lg:text-[15px] text-[14px] pt-5 rounded-2xl px-5 text-gray focus:outline-sky-500 resize-none "
            name="message"
            {...register("message", { required: true })}
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex items-center justify-center mt-6 md:col-span-2 ">
          <button
            type="submit"
            className=" inline-block  capitalize font-bold text-white bg-sky-500 rounded-full md:px-[40px] px-[30px]  py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black"
          >
            {isLoading ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
