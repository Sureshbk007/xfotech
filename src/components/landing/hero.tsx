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

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(105,65,198,0.1)_50%,transparent_75%)] bg-[length:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />

            <div className="container relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border border-[#6941C6]/30 bg-[#6941C6]/20 px-3 py-1 text-sm font-medium text-[#A78BFA]">
                                <Zap className="mr-2 h-3 w-3" />
                                Leading IT Solutions Provider
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                IT TRAINING
                                <br />
                                <span className="bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">
                                    & SERVICES
                                </span>
                            </h1>

                            <p className="max-w-lg text-lg leading-8 text-slate-300 sm:text-xl">
                                We provide professional IT training and a wide range of services to help you succeed in the tech
                                industry.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                            <Button
                                size="lg"
                                className="group bg-[#6941C6] px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#5B2FB8] hover:shadow-xl focus:ring-2 focus:ring-[#6941C6] focus:ring-offset-2 focus:ring-offset-slate-950"
                                aria-label="Get started with our IT training programs"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="group border-slate-600 bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-slate-800/50 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                                aria-label="Watch demo video"
                            >
                                <Play className="mr-2 h-4 w-4" />
                                Watch Demo
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center space-x-8 pt-4">
                            <div className="flex items-center space-x-2">
                                <div className="flex -space-x-1">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="h-6 w-6 rounded-full border-2 border-slate-950 bg-gradient-to-br from-[#6941C6] to-[#8B5CF6]"
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-slate-400">500+ Students</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-1 text-sm text-slate-400">4.9/5 Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Illustration */}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl border border-slate-700">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <Badge className="bg-[#6941C6]/20 text-[#A78BFA] border-[#6941C6]/30">Live Session</Badge>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#6941C6] to-[#8B5CF6]" />
                                    <div>
                                        <div className="h-2 w-24 rounded bg-slate-600" />
                                        <div className="mt-1 h-2 w-16 rounded bg-slate-700" />
                                    </div>
                                </div>

                                <div className="rounded-lg bg-slate-700/50 p-4 border border-slate-600/50">
                                    <div className="mb-2 flex items-center space-x-2">
                                        <Code2 className="h-4 w-4 text-[#6941C6]" />
                                        <div className="h-2 w-20 rounded bg-slate-600" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="h-2 w-full rounded bg-slate-600" />
                                        <div className="h-2 w-3/4 rounded bg-slate-600" />
                                        <div className="h-2 w-1/2 rounded bg-slate-600" />
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded bg-[#6941C6]/20 border border-[#6941C6]/30">
                                        <Shield className="h-4 w-4 text-[#6941C6]" />
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded bg-[#6941C6]/20 border border-[#6941C6]/30">
                                        <Database className="h-4 w-4 text-[#6941C6]" />
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded bg-[#6941C6]/20 border border-[#6941C6]/30">
                                        <Cloud className="h-4 w-4 text-[#6941C6]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#6941C6]/20 to-[#8B5CF6]/20 blur-xl" />
                        <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#A78BFA]/20 to-[#6941C6]/20 blur-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
