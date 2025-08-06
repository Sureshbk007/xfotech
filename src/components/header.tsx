"use client"

import { Code2, Menu } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
    {
        id: 1,
        href: '/',
        label: 'Home',
    },
    {
        id: 2,
        href: '/about',
        label: 'About',
    },
    {
        id: 3,
        href: '/services',
        label: 'Services',
    },
    {
        id: 4,
        href: '/contact',
        label: 'Contact',
    }
]
export default function Header() {
    const [mobileSidebarMenuOpen, setMobileSidebarMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header
            className="z-50 w-full transition-all duration-300 bg-white backdrop-blur border-b border-slate-100"
        >
            <div
                className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 h-16 max-w-7xl"
            >
                <div className="flex items-center space-x-2">
                    <div
                        className="flex items-center justify-center rounded-lg bg-gradient-to-br from-[#6941C6] to-[#8B5CF6] transition-all duration-300 h-8 w-8"
                    >
                        <Code2 className="text-white transition-all duration-300 h-4 w-4" />
                    </div>
                    <span
                        className="font-semibold text-slate-800 transition-all duration-300 text-xl"
                    >
                        XFOTECH
                    </span>
                </div>
                <nav className="hidden items-center space-x-8 md:flex">
                    {navLinks.map(({ id, href, label }) => {
                        return (
                            <Link
                                key={id}
                                href={href}
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-[#7C3AED] focus:text-[#7C3AED] focus:outline-none"
                                aria-label="Navigate to Home"
                            >
                                {label}
                            </Link>
                        )
                    })}

                </nav>
                <Sheet open={mobileSidebarMenuOpen} onOpenChange={setMobileSidebarMenuOpen}
                >
                    {/* Menu Button */}
                    <SheetTrigger asChild>
                        <button className="md:hidden cursor-pointer" type="button">
                            <Menu className="size-7 text-gray-700" />
                        </button>
                    </SheetTrigger>

                    {/* Sheet Content for Mobile Nav */}
                    <SheetContent className="p-0 w-fit pr-5" side="right">
                        <SheetHeader className="border-b px-5 py-3">
                            <SheetTitle>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="flex items-center justify-center rounded-lg bg-gradient-to-br from-[#6941C6] to-[#8B5CF6] transition-all duration-300 h-8 w-8"
                                    >
                                        <Code2 className="text-white transition-all duration-300 h-4 w-4" />
                                    </div>
                                    <span
                                        className="font-semibold text-slate-800 transition-all duration-300 text-xl"
                                    >
                                        XFOTECH
                                    </span>
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                        <nav>
                            <ul className="flex flex-col gap-1 p-3">
                                {navLinks.map(({ id, href, label }) => {
                                    const isActive =
                                        href === '/'
                                            ? pathname === '/'
                                            : pathname.startsWith(href);

                                    return (
                                        <li key={id} >
                                            <Link
                                                className={`block rounded-lg px-4 py-2 font-medium text-base transition-colors duration-200 ${isActive
                                                    ? 'bg-[#6941C6] text-white'
                                                    : 'text-gray-800 hover:bg-gray-100'
                                                    }`}
                                                href={href}
                                                onClick={() => setMobileSidebarMenuOpen(false)}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
