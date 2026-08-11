import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Portfolio Contact";

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;

    window.location.href = `mailto:your@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const socialIcons = [
    {
      icon: FaInstagram,
      alt: "Instagram",
      link: "#",
    },
    {
      icon: FaTiktok,
      alt: "TikTok",
      link: "#",
    },
    {
      icon: FaGithub,
      alt: "GitHub",
      link: "#",
    },
    {
      icon: FaYoutube,
      alt: "YouTube",
      link: "#",
    },
  ];

  return (
    <section
      id="connect"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div
            className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            data-aos="fade-right"
          >
            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 mb-6">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.alt}
                    className="p-2 rounded-full transition-all duration-300 hover:scale-110 dark:hover:bg-violet-100/20 hover:text-violet-600"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 dark:text-white text-gray-900">
              Let's{" "}
              <span className="text-violet-500 dark:text-[#e0c0fd]">
                Connect
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono mb-4 dark:text-violet-400 text-violet-600">
              Let's Build Something
            </h2>

            {/* Description */}
            <p className="mb-6 leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700">
              Have an idea, project, or collaboration in mind? I'm always
              interested in building useful AI and machine learning solutions
              that solve real-world problems.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-4 mb-6">

              {/* Email */}
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-violet-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Mail size={19} />
                </div>

                <span>Ayuubhajijama@email.com</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <MapPin size={19} />
                </div>

                <span>Somalia</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg"
            data-aos="fade-left"
          >
            <div className="relative p-6 sm:p-7 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] shadow-xl">

              {/* Form Header */}
              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Send Me a Message
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  I'll get back to you as soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="4"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 outline-none resize-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-violet-500 to-violet-700 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
