'use client'

import { Code2, Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? "bg-white backdrop-blur shadow-md border-b border-slate-200 mx-4 mt-2 rounded-2xl"
                : "bg-white backdrop-blur border-b border-slate-100"
                }`}
        >
            <div
                className={`container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "h-14 max-w-6xl" : "h-16 max-w-7xl"
                    }`}
            >
                <div className="flex items-center space-x-2">
                    <div
                        className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-[#6941C6] to-[#8B5CF6] transition-all duration-300 ${isScrolled ? "h-7 w-7" : "h-8 w-8"
                            }`}
                    >
                        <Code2 className={`text-white transition-all duration-300 ${isScrolled ? "h-3.5 w-3.5" : "h-4 w-4"}`} />
                    </div>
                    <span
                        className={`font-semibold text-slate-800 transition-all duration-300 ${isScrolled ? "text-lg" : "text-xl"}`}
                    >
                        XFOTECH
                    </span>
                </div>

                <nav className="hidden items-center space-x-8 md:flex">
                    <Link
                        href="#"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-[#7C3AED] focus:text-[#7C3AED] focus:outline-none"
                        aria-label="Navigate to Home"
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-[#7C3AED] focus:text-[#7C3AED] focus:outline-none"
                        aria-label="Navigate to About section"
                    >
                        About
                    </Link>
                    <Link
                        href="#services"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-[#7C3AED] focus:text-[#7C3AED] focus:outline-none"
                        aria-label="Navigate to Services section"
                    >
                        Services
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-slate-600 transition-colors hover:text-[#7C3AED] focus:text-[#7C3AED] focus:outline-none"
                        aria-label="Navigate to Contact section"
                    >
                        Contact
                    </Link>
                </nav>

                <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    aria-label="Open mobile menu"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </header>
    )
}
