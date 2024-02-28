import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const WorkForm = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        company: '',
        subject: '',
        number: '',
        jobTitle: '',
        message: "",
    });

    // STORING INPUT DATA
    const storeValue = (event) => {
        const { name, value } = event.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            fullName: inputData.name,
            email: inputData.email,
            company: inputData.company,
            subject: inputData.subject,
            number: inputData.number,
            jobTitle: inputData.jobTitle,
            message: inputData.message,
        };

        emailjs
            .send(
                "service_cdv4l3k",
                "template_6t80rv4",
                templateParams,
                "IsXKkS1NCYyD6Rhrk"
            )
            .then(
                () => {
                    alert(`${inputData.name} Your email has been sent successfully`);
                },
                (error) => {
                    alert("An error occurred while sending the email.");
                }
            );

        setInputData({
            name: "",
            email: "",
            company: '',
            subject: '',
            number: '',
            jobTitle: '',
            message: "",
        })

    }



    return (
        <section className='career_form_section md:py-[60px] py-[40px] xl:px-[50px] px-[25px] rounded-[30px] bg-white drop-shadow-1xl  lg:mx-[150px] md:mx-[100px] mx-[30px] mb-[100px]  '>
            <form className="grid md:grid-cols-2 grid-cols-1  lg:gap-[25px] gap-[20px]" onSubmit={(e) => sendEmail(e)} >
                {/* NAME FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Full Name*</p>
                    <input type="text" required className='border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' placeholder='Johne Doe' name='name' value={inputData.name} onChange={storeValue} />
                </div>

                {/* EMAIL FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Your Email*</p>
                    <input type="email" required className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' placeholder='example@gmail.com' name='email' value={inputData.email} onChange={storeValue} />
                </div>

                {/* COMPANY FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >company*</p>
                    <input type="text" required className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' placeholder='Your company name is here' name='company' value={inputData.company} onChange={storeValue} />
                </div>

                {/* SUBJECT FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Subject*</p>
                    <input type="text" required className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' placeholder='How can we help' name='subject' value={inputData.subject} onChange={storeValue} />
                </div>

                {/* PHONE NUMBER FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Phone No*</p>
                    <input type="tel" required className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' placeholder='Enter your number' name='number' value={inputData.number} onChange={storeValue} />
                </div>

                {/* JOB TITLE FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Job Title*</p>
                    <input type="text" required className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' placeholder='Your job title/role' name='jobTitle' value={inputData.jobTitle} onChange={storeValue} />
                </div>

                {/* TEXT AREA FIELD */}
                <div className='field_one mb-3 md:col-span-2'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2'>Message*</p>
                    <textarea required className=' border border-[#D3D3D3] block w-full h-[250px] lg:text-[15px] text-[14px] pt-5 rounded-2xl px-5 text-gray focus:outline-sky-500 resize-none' placeholder='Hello there,I would like to talk about how to...' name='message' value={inputData.message} onChange={storeValue} ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <div className='flex items-center justify-center mt-6 md:col-span-2'>
                    <button type='submit' className=' inline-block capitalize font-bold text-white bg-sky-500 rounded-full md:px-[40px] px-[30px]  py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black'>Submit</button>
                </div>
            </form>

        </section>
    )
}

export default WorkForm