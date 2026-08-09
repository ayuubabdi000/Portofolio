
import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Code2,
  Server,
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "AI & Data",
      icon: Brain,
      skills: [
        "Python",
        "Data Science",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-learn",
      ],
    },
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "FastAPI",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: [
        "Git",
        "GitHub",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-black"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
            MY SKILLS
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Technologies I work with
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Tools and technologies I use to learn, build, and solve problems.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl
                bg-gradient-to-br from-purple-50 to-white
                dark:from-purple-950/30 dark:to-black
                border border-purple-100
                dark:border-purple-900/40
                shadow-lg
                hover:shadow-purple-500/10
                transition-all duration-300"
              >
                {/* Category */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl
                    bg-purple-100 dark:bg-purple-900/30
                    flex items-center justify-center"
                  >
                    <Icon
                      className="w-5 h-5
                      text-purple-600
                      dark:text-purple-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold
                    text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 rounded-xl
                      text-sm font-medium
                      bg-white dark:bg-white/5
                      text-gray-700 dark:text-gray-300
                      border border-gray-200
                      dark:border-gray-800
                      hover:border-purple-400
                      hover:text-purple-600
                      dark:hover:text-purple-400
                      transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;

