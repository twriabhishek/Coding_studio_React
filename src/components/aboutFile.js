import React from "react";
import { Link } from "react-router-dom";

const AboutFile = () => {
  return (
    <>
      {/* <!-- About section Start --> */}
      <section class="section-about">
        <div class="container">
          <h2 class="section-common-heading">
            About Us: Crafting Digital Excellence at Coding Studio
          </h2>
          <div class="section-common-subheading">
            Discover Coding Studio's passion for innovation, expert team, and
            commitment to delivering transformative digital solutions.
          </div>
        </div>
        <div class="container grid grid-three--cols">
          <div class="about-div">
            <div class="icon">
              <img src="./images/research.png" alt="" />
            </div>
            <h3 class="section-common--title">Research</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
              optio sed ad placeat quae? Error aperiam nobis maxime dignissimos.
            </p>
          </div>
          <div class="about-div">
            <div class="icon">
              <img src="./images/design.png" alt="" />
            </div>
            <h3 class="section-common--title">Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
              optio sed ad placeat quae? Error aperiam nobis maxime dignissimos.
            </p>
          </div>
          <div class="about-div">
            <div class="icon">
              <img src="./images/Coding.png" alt="" />
            </div>
            <h3 class="section-common--title">Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
              optio sed ad placeat quae? Error aperiam nobis maxime dignissimos.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- About section End --> */}

      {/* <!-- contact home section --> */}
      <div class="section-contact-homepage" id="section-contact-homepage">
        <div class="container grid grid-two--col">
          <div class="contact-content">
            <h2 class="contact-title">
              "Get in Touch:You Need We're Here for You!"
            </h2>
            <p>
              Feel free to explore the various channels available, and let's
              embark on a journey of collaboration, support, and mutual growth.
              Your satisfaction is our priority, and we look forward to hearing
              from you soon.
            </p>
            <div>
              <Link to="contact" class="btn">
                Start Now <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div class="contact-image">
            <img src="./images/main.png" alt="" />
          </div>
        </div>
      </div>
      {/* <!-- contact home section --> */}
    </>
  );
};

export default AboutFile;
