import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

const NavBar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Connect', link: '#connect' },
    ]

    return (
        <div className="fixed top-4 z-50 w-full flex justify-center px-4">
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full max-w-5xl rounded-2xl transition-all duration-300 ${
                scrolled
                    ? "bg-white/80 dark:bg-black/60 backdrop-blur-lg border border-purple-100 dark:border-purple-900/40 shadow-lg"
                    : "bg-white/60 dark:bg-black/40 backdrop-blur-md border border-purple-100/50 dark:border-purple-900/20"
            }`}
        >
            <div className="px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <span className="w-8 h-8 rounded-lg bg-purple-600 dark:bg-purple-500
                    flex items-center justify-center text-white font-bold text-sm
                    group-hover:rotate-12 transition-transform duration-300">
                        A
                    </span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white
                    tracking-tight">
                        Ayuub
                    </span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.link}
                            href={item.link}
                            className="relative px-4 py-2 text-sm font-medium
                            text-gray-600 dark:text-gray-400
                            hover:text-purple-600 dark:hover:text-purple-400
                            transition-colors group"
                        >
                            {item.name}
                            <span className="absolute left-4 right-4 -bottom-0.5 h-px
                            bg-purple-600 dark:bg-purple-400 scale-x-0
                            group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                    ))}
                </nav>

                {/* Right controls */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleDarkMode}
                        aria-label="Toggle theme"
                        className="p-2 rounded-full text-gray-500 dark:text-gray-400
                        hover:bg-purple-50 dark:hover:bg-purple-900/20
                        hover:text-purple-600 dark:hover:text-purple-400
                        transition-colors"
                    >
                        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>

                    <a
                        href="#connect"
                        className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full
                        text-sm font-semibold bg-purple-600 text-white
                        hover:bg-purple-700 transition-colors"
                    >
                        Hire me
                        <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300
                        hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white/95 dark:bg-black/95
                        backdrop-blur-lg border-t border-purple-100 dark:border-purple-900/40
                        rounded-b-2xl"
                    >
                        <div className="px-6 py-4 flex flex-col gap-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-3 py-2.5 rounded-lg text-sm font-medium
                                    text-gray-700 dark:text-gray-300
                                    hover:bg-purple-50 dark:hover:bg-purple-900/20
                                    hover:text-purple-600 dark:hover:text-purple-400
                                    transition-colors"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <a
                                href="#connect"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 flex items-center justify-center gap-1
                                px-4 py-2.5 rounded-lg text-sm font-semibold
                                bg-purple-600 text-white hover:bg-purple-700
                                transition-colors"
                            >
                                Hire me
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
        </div>
    )
}

export default NavBar