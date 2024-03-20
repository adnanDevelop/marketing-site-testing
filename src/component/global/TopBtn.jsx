import React, { useState, useEffect } from "react";

const TopBtn = () => {
  const [iconAnimation, setIconAnimation] = useState(false);
  const [buttonAnimation, setAnimation] = useState(0);
  window.addEventListener("scroll", () => {
    window.scrollY > 80 ? setIconAnimation(true) : setIconAnimation(false);
  });

  const topBar = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollAnimation = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientScroll = document.documentElement.scrollTop;
    const currentScroll = (clientScroll / (scrollHeight - windowHeight)) * 100;
    setAnimation(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);
    return () => window.removeEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <section
      className={`top-btn ${iconAnimation ? "animateIcon" : ""}`}
      style={{
        background: `conic-gradient(#2AABE1 ${buttonAnimation}%, #E2E2E2B0 ${buttonAnimation}%)`,
      }}
      onClick={topBar}
    >
      <div className={`top-icon ${iconAnimation ? "show-btn" : null}`}>
        <span
          className={`icon-animation ${
            iconAnimation ? "show-icon" : "invisible"
          }`}
        >
          {/* <FaAngleUp/> */}
          <i className="fa-solid fa-arrow-up"></i>
        </span>
      </div>
    </section>
  );
};

export default TopBtn;
