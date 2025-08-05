import {
    Code2,
    Shield,
    Database,
    Cloud,
    ArrowRight,
    Star,
    Play,
    Zap,
} from "lucide-react"
import React from 'react'
import { Button } from '../ui/button'
import { Badge } from "../ui/badge"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#6a3fcc]">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(105,65,198,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" /> */}

            <div className="container relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-8">
                        <div className="space-y-6">

                            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                IT TRAINING
                                <br />
                                <span className="text-white">
                                    & SERVICES
                                </span>
                            </h1>

                            <p className="max-w-[360px] text-xl leading-8 text-white/80 ">
                                We provide professional IT training and a wide range of services to help you succeed in the tech
                                industry.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                            <Button
                                size="lg"
                                className="group bg-blue-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#5B2FB8] hover:shadow-xl focus:ring-2 focus:ring-[#6941C6] focus:ring-offset-2 focus:ring-offset-slate-950"
                                aria-label="Get started with our IT training programs"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>

                        </div>
                    </div>

                    {/* Hero Illustration */}
                    <div className="relative size-96">
                        <Image src="/Learning-amico.svg" alt="" height={1920} width={1080} className="size-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
