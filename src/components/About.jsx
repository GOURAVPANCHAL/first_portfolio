import React from "react";

const About = () => {
  return (
    <div id="about" className="about section-padding">
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 col-lg-6 about-left">
            <img src="./images/profile.jpg" alt="" className="about-img img-fluid" />
          </div>
          <div className="col-sm-12 col-lg-6 about-right">
            <h2>Hello, I Am Gourav</h2>
            <h4>Web Developer from Delhi</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Provident corporis quae esse minus voluptates corrupti voluptatum 
               perspiciatis. Reiciendis optio dignissimos beatae. Minus enim hic
                fuga voluptatum, quae explicabo consectetur voluptas in voluptate 
                nihil sint molestias consequuntur nulla, veniam illo quod saepe? 
                Dolor, quidem. Id, at porro quae blanditiis animi doloremque?
            </p>

            <div className="social-icons">
              <a href="/" className="social-icon">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="/" className="social-icon">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i class="fa-brands fa-behance"></i>
              </a>
              <a href="/" className="social-icon">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="/" className="social-icon">
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </div>
            {/* <div className="about-btn">
              <a href="https://drive.google.com/drive/folders/15PfqgDA0gitXlM3gRz0l8Fs44EnCZHM3" target="_blank" className="btn btn-blue">Download CV</a>
              <a href="/" className="btn btn-dark">Hire Me</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
