
import React from "react";
import { motion } from "framer-motion";
import { Brain, Target, Code2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
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
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            A little about me
          </h2>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-10
          bg-gradient-to-br from-purple-50 to-white
          dark:from-purple-950/30 dark:to-black
          border border-purple-100
          dark:border-purple-900/40
          shadow-xl"
        >
          <div className="max-w-3xl">

            <h3 className="text-2xl md:text-3xl font-bold
              text-gray-900 dark:text-white mb-5">
              I'm a CS student becoming an
              <span className="text-purple-600 dark:text-purple-400">
                {" "}AI Engineer.
              </span>
            </h3>

            <p className="text-gray-600 dark:text-gray-300
              leading-7 mb-5">
              My interest in AI started after seeing it solve a
              real-world problem. Since then, I've been learning
              and building machine-learning projects to understand
              how AI can solve problems that matter.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              I'm especially interested in using AI to help with
              education and student problems. My goal is to become
              an expert AI engineer and build technology that
              creates real impact.
            </p>

          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10">

            <div className="p-5 rounded-2xl bg-white/70
              dark:bg-white/5 border border-gray-200
              dark:border-gray-800">

              <Brain className="text-purple-600 dark:text-purple-400 mb-3" />

              <h4 className="font-semibold text-gray-900 dark:text-white">
                AI & ML
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Learning by building real projects.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/70
              dark:bg-white/5 border border-gray-200
              dark:border-gray-800">

              <Code2 className="text-purple-600 dark:text-purple-400 mb-3" />

              <h4 className="font-semibold text-gray-900 dark:text-white">
                Problem Solving
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Turning problems into practical solutions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/70
              dark:bg-white/5 border border-gray-200
              dark:border-gray-800">

              <Target className="text-purple-600 dark:text-purple-400 mb-3" />

              <h4 className="font-semibold text-gray-900 dark:text-white">
                Real Impact
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Building technology that actually helps people.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

