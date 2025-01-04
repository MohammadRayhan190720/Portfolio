import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import project1 from '../assets/images/image1.png'
import project2 from '../assets/images/image2.png'
import project3 from '../assets/images/image3.png'

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects1 = [
    {
      title: "Food Shareing Website",
      description:
        "The purpose of the Food For All website is to create a platform that facilitates sharing surplus food to reduce waste and combat hunger. It allows users to add, view, update, and delete food items efficiently using CRUD operations. The platform also enables individuals or organizations to request available food and manage these requests seamlessly, fostering a community-driven approach to food distribution. By connecting food donors with those in need, the website promotes sustainability and ensures that no food goes to waste. This initiative is aimed at building a collaborative ecosystem where sharing food helps create a better, hunger-free tomorrow.",
      tags: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Firebase",
      ],
      links: {
        githubClient:
          "https://github.com/MohammadRayhan190720/Food-Shareing_Website",
        githubServer:
          "https://github.com/programming-hero-web-course2/b10a11-server-side-MohammadRayhan190720",
        demo: "https://food-for-all-15120.web.app/",
      },
      featured: true,
    },
  ];
  const projects2 = [
    {
      title: "CINEVERSE- A Movie Portal Web Application",
      description:
        "CineVerse is a user-friendly movie portal designed for exploring, viewing, and managing movies effortlessly. It features a dynamic dark/light mode toggle, Firebase authentication, and CRUD functionality for adding and managing favorites. Built with React, Tailwind CSS, and MongoDB, it offers a seamless movie discovery experience for all users.",
      tags: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Firebase",
      ],
      links: {
        githubClient:
          "https://github.com/MohammadRayhan190720/Movie-Portal-website",
        githubServer:
          "https://github.com/programming-hero-web-course2/b10-a10-server-side-MohammadRayhan190720",
        demo: "https://cineverse-movieportal.web.app/",
      },
      featured: true,
    },
  ];
  const projects3 = [
    {
      title: "Mountain Treks",
      description:
        "The Eco-Adventure Blog website is a dynamic platform designed to inspire and engage eco-conscious travelers. It showcases diverse eco-friendly travel adventures, including mountain treks, ocean dives, and more, promoting sustainable tourism. Users can explore detailed descriptions, captivating visuals, and essential information about each experience, fostering informed travel decisions.",
      tags: ["JavaScript", "React", "Tailwind", "Firebase"],
      links: {
        githubClient: "https://github.com/MohammadRayhan190720/mountain-treks",
        demo: "https://mountain-treks-125d3.web.app/",
      },
      featured: true,
    },
  ];

  return (
    <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100 space-y-5 lg:space-y-7">
      <div className="max-w-7xl mx-auto space-y-12 ">
        {projects1.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <a
                href="https://food-for-all-15120.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project1}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="text-center my-5 lg:my-7">
                  <button className="px-5 py-3 bg-gradient-to-l from-blue-700 to-green-700 hover:from-blue-600 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                    View Live
                  </button>
                </div>
              </a>
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.githubClient}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.githubServer}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto space-y-12 ">
        {projects2.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <a
                href="https://cineverse-movieportal.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project2}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="text-center my-5 lg:my-7">
                  <button className="px-5 py-3 bg-gradient-to-l from-blue-700 to-green-700 hover:from-blue-600 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                    View Live
                  </button>
                </div>
              </a>
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.githubClient}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.githubServer}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto space-y-12 ">
        {projects3.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <a
                href="https://mountain-treks-125d3.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project3}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="text-center my-5 lg:my-7">
                  <button className="px-5 py-3 bg-gradient-to-l from-blue-700 to-green-700 hover:from-blue-600 hover:to-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                    View Live
                  </button>
                </div>
              </a>
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.githubClient}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
