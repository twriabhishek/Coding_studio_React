import React from "react";

const ServiceFile = () => {
  return (
    <>
      {/* <!-- Courses section Start --> */}
      <section class="section-course">
        <div class="container">
          <h2 class="section-common-heading">Explore Our Courses:</h2>
          <p class="section-common-subheading">
            Empowering Your Journey Through Comprehensive and Cutting-edge
            Learning Experiences
          </p>
        </div>
        <div class="container grid grid-four--cols">
          <div class="course-div">
            <div class="icon">
              <i class="fa-brands fa-solid fa-code"></i>
            </div>
            <h3 class="section-common--title">Javascript</h3>
            <p>
              "Master JavaScript with our comprehensive course, covering
              fundamentals to advanced concepts, empowering you to build dynamic
              and interactive web applications."
            </p>
          </div>
          <div class="course-div">
            <div class="icon">
              <i class="fa-brands fa-java fa-brands"></i>
            </div>
            <h3 class="section-common--title">Java</h3>
            <p>
              "Master Java programming with our comprehensive course, covering
              fundamentals to advanced concepts. Elevate your coding skills with
              hands-on projects."
            </p>
          </div>
          <div class="course-div">
            <div class="icon">
              <i class="fa-brands fa-python"></i>
            </div>
            <h3 class="section-common--title">Python</h3>
            <p>
              "Unlock the power of Python with our comprehensive course. Learn
              coding, problem-solving, and build real-world projects for
              practical mastery."
            </p>
          </div>
          <div class="course-div">
            <div class="icon">
              <i class="fa-brands fa-php"></i>
            </div>
            <h3 class="section-common--title">php</h3>
            <p>
              "Unlock the power of PHP with our comprehensive course, covering
              fundamentals to advanced concepts, enhancing your web development
              skills."
            </p>
          </div>
          <div class="course-div">
            <div>
              <i class="fa-brands fa-solid fa-c"></i>
            </div>
            <h3 class="section-common--title">C++</h3>
            <p>
              "Master C++ programming with our comprehensive course, covering
              fundamentals to advanced topics. Unlock your coding potential with
              us!"
            </p>
          </div>
          <div class="course-div">
            <div class="icon">
              <i class="fa-brands fa-html5"></i>
            </div>
            <h3 class="section-common--title">HTML</h3>
            <p>
              "Dive into the essentials of HTML with our comprehensive course,
              mastering tags, elements, and structure for effective web
              development."
            </p>
          </div>
          <div class="course-div">
            <div class="icon">
              <i class="fa-brands fa-css3-alt"></i>
            </div>
            <h3 class="section-common--title">CSS</h3>
            <p>
              "Master CSS with our comprehensive course, covering styling,
              layout, and responsive design. Elevate your web development skills
              with us!"
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Courses section End --> */}

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
              <a href="contact" class="btn">
                Start Now <i class="fa-solid fa-arrow-right"></i>
              </a>
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

export default ServiceFile;
