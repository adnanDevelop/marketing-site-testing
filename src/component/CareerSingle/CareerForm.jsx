import React, { useRef, useState } from 'react'
import { MdUpload } from "react-icons/md";
import emailjs from "@emailjs/browser";

const CareerForm = () => {
    const fileInputRef = useRef(null);
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        number: '',
        letter: "",
    });

    // STORING INPUT DATA
    const storeValue = (event) => {
        const { name, value } = event.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            fullName: inputData.name,
            email: inputData.email,
            message: inputData.letter,
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
            number: '',
            letter: "",
        })

    }

    return (
        <section className='career_form_section md:py-[100px] py-[40px]  xl:px-[70px] px-[25px]  rounded-[20px] bg-blue lg:mx-[150px] md:mx-[100px] mx-[30px] mb-[100px] relative'>
            <div className="w-[350px] h-auto absolute lg:bottom-[-10%] bottom-[65%] xl:left-[-25%] lg:left-[-45%]  left-[-25%] rotate-[-20deg] z-[-1] lg:block hidden" >
                <img src="/image/shape.png" alt="" />
            </div>
            <form className="grid md:grid-cols-2 grid-cols-1  lg:gap-[40px] gap-[20px]" onSubmit={(e) => sendEmail(e)}>
                {/* NAME FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >Full Name*</p>
                    <input type="text" required name='name' placeholder='John david' className='block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' value={inputData.name} onChange={storeValue} />
                </div>
                {/* EMAIL FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >Your Email*</p>
                    <input type="email" required name='email' placeholder='example@gmail.com' className='block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' value={inputData.email} onChange={storeValue} />
                </div>
                {/* UPLOAD FILE FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2'>Resume*</p>
                    <div className='w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px] rounded-2xl lg:px-5 px-2  text-gray bg-white flex justify-between items-center ' onClick={handleDivClick} >
                        Upload your resume
                        <input type="file" className='text-transparent hidden ' ref={fileInputRef} />
                        <div className='flex items-center text-black md:text-[14px] text-[12px] font-medium py-2 px-3 rounded-[5px] bg-soft-white cursor-pointer '>
                            upload file <span className='ms-2 text-[15px]'> <MdUpload /></span>
                        </div>
                    </div>
                </div>
                {/* PHONE NUMBER FIELD */}
                <div className='field_one mb-4'>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >Phone</p>
                    <input type="tel" required name='number' placeholder='how can we help' className='block w-full  lg:text-[15px] text-[14px]  md:h-[60px] h-[50px]  rounded-2xl px-5 text-gray focus:outline-sky-500 ' value={inputData.number} onChange={storeValue} />
                </div>
                {/* TEXT AREA FIELD */}
                <div className='field_one md:col-span-2  '>
                    <p className='text-white font-normal  md:text-[18px] text-[16px] mb-2 ' >CoverLetter</p>
                    <textarea type="tel" required name='letter' placeholder='tell about yourself a bit' className='block w-full h-[250px] lg:text-[15px] text-[14px]   pt-5 rounded-2xl px-5 text-gray focus:outline-sky-500 resize-none ' value={inputData.letter} onChange={storeValue}></textarea>
                </div>
                {/* SUBMIT BUTTON */}
                <div className='flex items-center justify-center md:col-span-2'>
                    <button type='submit' className=' inline-block mt-9 capitalize font-bold text-white bg-sky-500 rounded-full md:px-[40px] px-[30px]  py-[15px] transition duration-300 group-hover:bg-white  group-hover:text-black group-focus:text-black ' >Submit</button>
                </div>
            </form>



        </section>
    )
}

export default CareerForm