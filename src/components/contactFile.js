import React from "react";

const ContactFile = () => {
  return (
    <body>

      {/* <!-- Contact section Start --> */}
      <div class="section-contact">
        <div class="container">
          <h2 class="section-common-heading">Contact US</h2>
          <p class="section-common-subheading">
            Get in Touch with us. We are always here to help you.
          </p>
        </div>
        <div class="container grid grid-two--col">
          <div class="section-left-contact">
            <form action="https://formspree.io/f/myyqrdey" method="POST">
              <div class="grid grid-two--col mb-3">
                <div>
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="usename"
                    id="usename"
                    required
                    autocomplete="off"
                    placeholder="Enter your username"
                  />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autocomplete="off"
                    placeholder="abc@gmail.com"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  autocomplete="off"
                  placeholder="Enter Subject"
                />
              </div>
              <div class="mb-3">
                <label for="message">Message</label>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  required
                  autocomplete="off"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div class="section-right-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.98710314094!2d80.77769796333013!3d26.84890283014099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1702113756320!5m2!1sen!2sin"
              width="100%"
              height="500px"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- Contact section End --> */}
    </body>
  );
};

export default ContactFile;
