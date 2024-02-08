import React from 'react'

const Footer = () => {
  return (
    <div>
                {/* <!-- Footer section --> */}
      <footer>
        <div class="container grid grid-four--cols">
          <div class="footer-1--div">
            <div class="logo-brand">
              <a href="index.html" class="footer-subheading">
                Coding Studio
              </a>
            </div>
            <p>
              Near Allahabad Bank, Hazratganj(226001), Lucknow, Uttar Pradesh
            </p>
            <div class="social-footer--icons">
              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div class="Copyright">
              <p>Copyright &copy;2023-2034 Coding Studio.</p>
              <p>"Made with ❤️ by Abhishek"</p>
            </div>
          </div>
          <div class="footer-2--div">
            <p class="footer-subheading">Courses</p>
            <ul>
              <li>Web Development</li>
              <li>Data Science</li>
              <li>UX/UI Design</li>
              <li>Mobile App Development</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div class="footer-3--div">
            <p class="footer-subheading">Useful Links</p>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Careers</li>
            </ul>
          </div>
          <div class="footer-4--div">
            <p class="footer-subheading">Privacy</p>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>GDPR Compliance</li>
              <li>Security Measures</li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <!-- Footer section --> */}
    </div>
  )
}

export default Footer
