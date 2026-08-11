import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Student Success AI",
      description:
        "An AI-powered student analytics system that predicts course completion and identifies students who may need additional academic support.",
      technologies: [
        { name: "Python", icon: FaPython },
        { name: "Machine Learning", icon: FaPython },
        { name: "React", icon: FaReact },
        { name: "FastAPI", icon: FaPython },
        { name: "MongoDB", icon: FaDatabase },
      ],
      github: "https://github.com/ayuubabdi000/student-success-ai",
      demo: "#",
    },



    {
      title: "AI Learning Assistant",
      description:
        "An intelligent learning assistant designed to help students understand technical concepts through AI-powered explanations and interactive learning.",
      technologies: [
        { name: "Python", icon: FaPython },
        { name: "LLM", icon: FaPython },
        { name: "NLP", icon: FaPython },
        { name: "FastAPI", icon: FaPython },
        { name: "React", icon: FaReact },
      ],
      github: "#",
      demo: "#",
    },

    {
      title: "Machine Learning Dashboard",
      description:
        "An interactive dashboard for exploring datasets, generating machine learning predictions, and visualizing model performance.",
      technologies: [
        { name: "Python", icon: FaPython },
        { name: "Scikit-learn", icon: FaPython },
        { name: "FastAPI", icon: FaPython },
        { name: "React", icon: FaReact },
        { name: "MongoDB", icon: FaDatabase },
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-8 lg:px-14"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <p className="text-violet-500 font-semibold mb-3 tracking-wider">
            MY WORK
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Featured{" "}
            <span className="text-violet-500">
              Projects
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            A selection of projects where I combine machine learning,
            artificial intelligence, and software engineering to solve
            real-world problems.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(139,92,246,0.15)]"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-6">

                <span className="text-sm font-mono text-violet-500">
                  0{index + 1}
                </span>

                <div className="flex gap-3">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300"
                  >
                    <FaGithub size={18} />
                  </a>

                  {/* Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Demo`}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={15} />
                  </a>

                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-violet-500 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">

                {project.technologies.map((technology, techIndex) => {
                  const Icon = technology.icon;

                  return (
                    <span
                      key={techIndex}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
                    >
                      <Icon size={13} />
                      {technology.name}
                    </span>
                  );
                })}

              </div>

              {/* Glow */}
              <div className="absolute -z-10 inset-0 rounded-2xl bg-violet-600/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            </div>
          ))}

        </div>

        {/* GitHub Button */}
        <div
          className="flex justify-center mt-14"
          data-aos="fade-up"
        >
          <a
            href="https://github.com/ayuubabdi000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-violet-500 text-violet-600 dark:text-violet-400 font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300"
          >
            <FaGithub size={18} />
            View More on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
