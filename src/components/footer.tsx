import { Code2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className=" text-white border-t  bg-[#19222b]" role="contentinfo">
            <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#6941C6] to-[#8B5CF6]">
                                <Code2 className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-xl font-semibold">XFOTECH</span>
                        </div>
                        <p className="text-sm text-white">
                            Empowering careers through professional IT training and comprehensive technology solutions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
                        <nav className="space-y-2" aria-label="Footer navigation">
                            <Link
                                href="#"
                                className="block text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="block text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                About
                            </Link>
                            <Link
                                href="#services"
                                className="block text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Services
                            </Link>
                            <Link
                                href="#contact"
                                className="block text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Courses</h3>
                        <nav className="space-y-2" aria-label="Courses navigation">
                            <Link
                                href="#"
                                className="block text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Programming
                            </Link>
                            <Link
                                href="#"
                                className="block text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Cybersecurity
                            </Link>
                            <Link
                                href="#"
                                className="block text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Data Science
                            </Link>
                            <Link
                                href="#"
                                className="block text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Cloud Computing
                            </Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
                        <div className="space-y-2 text-sm text-white">
                            <p>info@techpro.com</p>
                            <p>(555) 123-4567</p>
                            <p>
                                123 Tech Street
                                <br />
                                Digital City, DC 12345
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                        <p className="text-sm text-white">© {new Date().getFullYear()} TechPro. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <Link
                                href="#"
                                className="text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-white transition-colors hover:text-[#A78BFA] focus:text-[#A78BFA] focus:outline-none"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
