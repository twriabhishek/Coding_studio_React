import React from "react";
import { Link } from "react-router-dom";

const IndexFile = () => {
  return (
    <div>

      {/* <!-- Hero section Start --> */}
      <main class="section-hero">
        <div class="container grid grid-two--col">
          <div class="section-hero--content">
            <p class="hero-subheading">Empowering Lifelong lession</p>
            <h1 class="hero-heading">Unlock your potential</h1>
            <p class="hero-para">
              Coding Studio is a dynamic hub for software development, fostering
              innovation and collaboration. Our team of skilled programmers,
              designers, and engineers work seamlessly to transform ideas into
              functional, cutting-edge solutions.
            </p>
            <div class="hero-btn">
              <Link to="/services" class="btn btn-white">
                Learn with US
              </Link>
            </div>
          </div>
          <div class="section-hero--image">
            <figure>
              <img
                src="./images/main-hero1.webp"
                alt="a 3d chracter doing coding stuff"
              />
            </figure>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1701714403">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </main>
      {/* <!-- Hero section end --> */}

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
              <i class="fa-brands fa-js"></i>
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
              <i class="fa-brands fa-java"></i>
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

      {/* <!-- Why choose section start --> */}
      <section class="section-why--choose">
        <div class="container">
          <h2 class="section-common-heading">
            "Why Choose Us: Unleashing the Power of Excellence for Your Success
            and Learning Journey"
          </h2>
          <p class="section-common-subheading">
            Elevate Your Experience: Reasons to Choose [Your Company/Service
            Name] for Unmatched Excellence in [Industry/Service]
          </p>
        </div>
        <div class="container grid grid-three--cols">
          <div class="choose-left--div text-align--right">
            <div class="why-choose--div">
              <p class="common-text--highlight">1</p>
              <h3 class="section-common--title">Expertise and Experience</h3>
              <p>
                "Rely on our seasoned professionals to deliver proven
                excellence, bringing years of industry knowledge and skill to
                your projects."
              </p>
            </div>
            <div class="why-choose--div">
              <p class="common-text--highlight">2</p>
              <h3 class="section-common--title">Tailored Solutions</h3>
              <p>
                "Experience tailored approaches that precisely align with your
                unique needs, ensuring solutions that fit seamlessly into your
                vision and goals."
              </p>
            </div>
            <div class="why-choose--div">
              <p class="common-text--highlight">3</p>
              <h3 class="section-common--title">Innovative Technologies</h3>
              <p>
                "Pioneer the future with our commitment to cutting-edge tools,
                empowering your projects with the latest and most innovative
                technologies available in the industry."
              </p>
            </div>
          </div>

          <div class="choose-center--div">
            <figure>
              <img src="./images/pexels-lil-artsy-1624076.jpg" alt="" />
            </figure>
          </div>

          <div class="choose-right--div text-align--left">
            <div class="why-choose--div">
              <p class="common-text--highlight">4</p>
              <h3 class="section-common--title">Customer-Centric Approach</h3>
              <p>
                "Your success is our priority, and our customer-centric approach
                ensures a partnership dedicated to understanding, meeting, and
                exceeding your expectations."
              </p>
            </div>
            <div class="why-choose--div">
              <p class="common-text--highlight">5</p>
              <h3 class="section-common--title">Collaborative Partnerships</h3>
              <p>
                "Build strong alliances with us, fostering collaborative
                partnerships that go beyond transactions, contributing to mutual
                growth and shared success."
              </p>
            </div>
            <div class="why-choose--div">
              <p class="common-text--highlight">6</p>
              <h3 class="section-common--title">
                Transparent and Ethical Practices
              </h3>
              <p>
                "Our commitment to honesty and integrity defines transparent and
                ethical practices, ensuring a trustworthy relationship built on
                openness and shared values."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Why choose section start --> */}

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
    </div>
  );
};

export default IndexFile;
