import React from "react";

const ContactMap = () => {
  return (
    <section className="contact_map-section padding-inline lg:mb-[100px] md:mb-[70px] mb-[50px] ">
      <h2
        className="text-black font-bold font-primary tracking-wide lg:text-[45px] md:text-[40px] sm:text-[30px] text-[28px] leading-none lg:mb-10 mb-6  text-center capitalize"
        data-aos="zoom-in-out"
        data-aos-duration="1800"
      >
        Find us here
      </h2>
      <div className="map_section rounded-[1.5rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26564.417938139624!2d73.05693788253866!3d33.668762011132124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9b9a26d10f%3A0x4673dd03bcb7dd01!2sGoMarkho!5e0!3m2!1sen!2s!4v1706017592671!5m2!1sen!2s"
          title="GoMarkho location"
          loading="lazy"
          className="w-full lg:h-[450px] h-[350px] rounded-3xl focus:outline-none"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
