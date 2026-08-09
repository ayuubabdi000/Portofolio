
import React from 'react'
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Mail } from "lucide-react";
import hero from '../assets/hero.jpeg'
const Hero = () => {
    const socialIcons = [
        { icon: FaInstagram, alt: 'Instagram', ink: '' },
        { icon: FaTiktok, alt: 'TikTok', link: '#' },
        { icon: FaGithub, alt: 'Github', link: '#' },
        { icon: FaYoutube, alt: 'youtube', link: '#' }
    ]
    return (
        <section id="home"
            className="min-h-screen flex items-center relative overflow-hidden"  >
            <div
                className="container mx-auto px-4 sm:px-8 lg:pd-14 lg:px-14 lg:py-0 lg:mt-8">
                <div
                    className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                    <div
                        className="lg:w-1/2 w-full flex flex-col items-center  lg:items-start
                        text-center lg:text-left "
                        data-aos='fade-right'>
                        <div className='flex  gap-4 sm:gap-6 mb-6'>
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target='_blank'
                                    rel='rel="noopener noreferrer'
                                    className={`p-2 rounded-full transition-all duration-ll duration-300
                                        hover:scale-110 dark:hover:bg-violet-100/20
                                        hovet:text-violet-600`}
                                >
                                    <social.icon size={24} />
                                </a>
                            ))}
                        </div>
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 
                        dark:text-white text-gray-900"
                        >Hi, I'm <span
                            className="text-violet-500 dark:text-[#e0c0fd]">
                                Abdikani</span>
                        </h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono mb-4
                        dark:text-violet-400 text-violet-600  ">
                            Ai & Machine Learning Engneer
                        </h2>
                        <p className="mb-8 leading-relaxed max-w-md lg:max-w-lg
                        dark:text-gray-300 text-gray-700 ">As an ML Developer, I am passionate about developing intelligence-driven systems, AI-driven tools, and data-driven applications. I like solving real-life problems with the help of machine learning, python programming, and effective problem-solving skills. I love to learn new things and build projects using the latest technologies and models.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto ">
                            <a href="">
                                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2px px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-voilet-500
                                to-violet-700 hover:shadow-[0_0_40px_rgba(139,92,246,0.7)]
                                transition-all duration-300 transform hover:scale-105">
                                    Download CV
                                </button>
                            </a>
                            <a href="" className="w-full sm:w-auto">
                                <button
                                    className="w-full sm:w-auto inline-flex items-center 
                                justify-center gap-2 px-8 py-3 rounded-full text-white
                                font-semibold bg-linear-to-r from-violet-500
                                to-violet-700 hover:shadow-[0_0_40px_rgba(139,92,246,0.7)]
                                transition-all duration-300 transform hover:scale-105"
                                >
                                    <Mail size={20} />
                                    Hire Me

                                </button>
                            </a>


                        </div>






                    </div>

                    <div
                        className="lg:w-1/2 w-full max-w-md lg:max-w-lg flex justify-center relative" data-aos='fade-left'>
                        <div className="relative">
                            <img
                                src={hero}
                                alt=""
                                className="w-full aspect-[8/9] object-cover rounded-2xl
    transform hover:scale-105 transition-transform duration-500"

                            />

                        </div>


                    </div>
                </div>
                <div>

                </div>
            </div>

        </section>
    )
}

export default Hero
