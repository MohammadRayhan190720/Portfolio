import React from "react";
import profileImage from "../assets/images/profile.jpg";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            I am a passionate and skilled developer, constantly pushing
            boundaries in web development. As a JavaScript enthusiast 🚀, I
            specialize in the MERN stack (MongoDB, Express.js, React, Node.js)
            and seamlessly integrate technologies like Tailwind CSS, DaisyUI,
            Firebase, and Axios into My projects. My aim to create modern,
            scalable, and user-friendly web systems to make a positive impact on
            the world. My creative portfolio includes projects like CineVerse,
            Gadget Haven, and Food For All, reflecting my ability to blend
            functionality with aesthetics. Always eager to learn, I am diving
            deeper into Node.js, Vue.js, and AngularJS, aiming to master them
            all.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
