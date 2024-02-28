import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
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
            company: "",
            subject: "",
            message: "",
        })

    }

    return (
        <section className='career_form_section md:py-[60px] py-[40px] xl:px-[50px] px-[25px]  rounded-[30px] bg-white drop-shadow-1xl lg:mx-[150px] md:mx-[100px] mx-[30px] mb-[100px]  '>
            <form className="grid md:grid-cols-2 grid-cols-1  lg:gap-[25px] gap-[20px]" onSubmit={(e) => sendEmail(e)}>
                {/* NAME FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2'>Full Name*</p>
                    <input type="text" name='name' required id='fullName' placeholder='Full name' className=' border border-[#D3D3D3] block w-full lg:text-[15px] text-[14px]  md:h-[60px] h-[50px] rounded-2xl px-5 text-gray focus:outline-sky-500 ' value={inputData.name} onChange={storeValue} />
                </div>
                {/* EMAIL FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Your Email*</p>
                    <input type="email" name='email' required id='email' placeholder='example@gmail.com' className=' border border-[#D3D3D3] block w-full lg:text-[15px] text-[14px]  md:h-[60px] h-[50px] rounded-2xl px-5 text-gray focus:outline-sky-500 ' value={inputData.email} onChange={storeValue} />
                </div>
                {/* COMPANY FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >company*</p>
                    <input type="text" name='company' required id='company' placeholder='Your company name here' className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' value={inputData.company} onChange={storeValue} />
                </div>

                {/* SUBJECT FIELD */}
                <div className='field_one mb-3'>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Subject*</p>
                    <input type="text" name='subject' required id='subject' placeholder='how can we help' className=' border border-[#D3D3D3] block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' value={inputData.subject} onChange={storeValue} />
                </div>
                {/* TEXT AREA FIELD */}
                <div className='field_one mb-4 md:col-span-2  '>
                    <p className='text-black font-semibold  md:text-[18px] text-[16px] mb-2 ' >Message*</p>
                    <textarea name='message' required id='fullName' placeholder='Hello there,I would like to talk about how to...' className=' border border-[#D3D3D3] block w-full h-[250px]  lg:text-[15px] text-[14px] pt-5 rounded-2xl px-5 text-gray focus:outline-sky-500 resize-none ' value={inputData.message} onChange={storeValue} ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <div className='flex items-center justify-center mt-6 md:col-span-2 '>
                    <button type='submit' className=' inline-block  capitalize font-bold text-white bg-sky-500 rounded-full md:px-[40px] px-[30px]  py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black'>Submit</button>
                </div>

            </form>



        </section>
    )
}

export default ContactForm