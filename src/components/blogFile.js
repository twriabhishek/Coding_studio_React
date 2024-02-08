import React from 'react'
import { Link } from 'react-router-dom'

const Blogfile = () => {
  return (
    <>
    {/* <!-- Blog section Start --> */}

    <div class="section-blog">
      <div class="container">
        <h2 class="section-common-heading">Explore our blog</h2>
        <p class="section-common-subheading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          illo aut velit blanditiis, magni qui explicabo reprehenderit?
        </p>
      </div>
      <div class="container grid grid-four--cols">
        <div class="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </figure>
          <div class="blog-content">
            <div class="blog-date">
              <p><i class="fa-solid fa-calendar-days"></i> Sept 22 2023</p>
              <p><i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 class="section-common--title">Code your first react app</h3>
          </div>
        </div>
        <div class="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </figure>
          <div class="blog-content">
            <div class="blog-date">
              <p><i class="fa-solid fa-calendar-days"></i> Sept 22 2023</p>
              <p><i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 class="section-common--title">Code your first react app</h3>
          </div>
        </div>
        <div class="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </figure>
          <div class="blog-content">
            <div class="blog-date">
              <p><i class="fa-solid fa-calendar-days"></i> Sept 22 2023</p>
              <p><i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 class="section-common--title">Code your first react app</h3>
          </div>
        </div>
        <div class="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </figure>
          <div class="blog-content">
            <div class="blog-date">
              <p><i class="fa-solid fa-calendar-days"></i> Sept 22 2023</p>
              <p><i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 class="section-common--title">Code your first react app</h3>
          </div>
        </div>
        <div class="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </figure>
          <div class="blog-content">
            <div class="blog-date">
              <p><i class="fa-solid fa-calendar-days"></i> Sept 22 2023</p>
              <p><i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 class="section-common--title">Code your first react app</h3>
          </div>
        </div>
        <div class="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </figure>
          <div class="blog-content">
            <div class="blog-date">
              <p><i class="fa-solid fa-calendar-days"></i> Sept 22 2023</p>
              <p><i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 class="section-common--title">Code your first react app</h3>
          </div>
        </div>
        <div class="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </figure>
          <div class="blog-content">
            <div class="blog-date">
              <p><i class="fa-solid fa-calendar-days"></i> Sept 22 2023</p>
              <p><i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 class="section-common--title">Code your first react app</h3>
          </div>
        </div>
        <div class="blog">
          <figure>
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </figure>
          <div class="blog-content">
            <div class="blog-date">
              <p><i class="fa-solid fa-calendar-days"></i> Sept 22 2023</p>
              <p><i class="fa-solid fa-arrow-right"></i></p>
            </div>
            <h3 class="section-common--title">Code your first react app</h3>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Blog section End --> */}

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
  )
}

export default Blogfile