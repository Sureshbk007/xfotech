import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ArrowRight, CheckCircle2, Cloud, Lightbulb, ShieldCheck, Wrench } from 'lucide-react'
import { Button } from '../ui/button'

export default function Services() {
    return (
        // Changed background to light and adjusted text colors outside cards only
        <section id="services" className="bg-white py-16 sm:py-24" aria-labelledby="services-heading">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Badge className="mb-4 bg-[#6941C6]/20 text-[#6941C6] border-[#6941C6]/30">
                        Our Services
                    </Badge>
                    <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Professional IT Solutions
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700">
                        We offer a variety of IT services to meet your business needs.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {/* Cards unchanged, still dark styled */}
                    <Card className="group overflow-hidden border border-slate-600 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#6941C6]/50">
                        <CardHeader className="pb-4">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#6941C6]/20 backdrop-blur-sm border border-[#6941C6]/30">
                                <Lightbulb className="h-6 w-6 text-[#A78BFA]" />
                            </div>
                            <CardTitle className="text-xl font-semibold text-white">IT Consulting</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <CardDescription className="text-slate-300">
                                We offer a variety of IT services to meet your business needs.
                            </CardDescription>

                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                                <div className="flex items-center space-x-1">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Strategic Planning</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>24/7 Support</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="border-slate-600 bg-transparent text-slate-200 hover:bg-[#6941C6]/20 hover:border-[#6941C6] hover:text-[#A78BFA] focus:ring-2 focus:ring-[#6941C6] focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Learn more about IT Consulting services"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Repeat same dark card classes for other cards */}
                    {/* Cloud Solutions */}
                    <Card className="group overflow-hidden border border-slate-600 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#6941C6]/50">
                        <CardHeader className="pb-4">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#6941C6]/20 backdrop-blur-sm border border-[#6941C6]/30">
                                <Cloud className="h-6 w-6 text-[#A78BFA]" />
                            </div>
                            <CardTitle className="text-xl font-semibold text-white">Cloud Solutions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <CardDescription className="text-slate-300">Facilitate a long-lasting mondomand.</CardDescription>

                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                                <div className="flex items-center space-x-1">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Migration Support</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Scalable Infrastructure</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="border-slate-600 bg-transparent text-slate-200 hover:bg-[#6941C6]/20 hover:border-[#6941C6] hover:text-[#A78BFA] focus:ring-2 focus:ring-[#6941C6] focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Learn more about Cloud Solutions"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Technical Support */}
                    <Card className="group overflow-hidden border border-slate-600 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#6941C6]/50">
                        <CardHeader className="pb-4">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#6941C6]/20 backdrop-blur-sm border border-[#6941C6]/30">
                                <Wrench className="h-6 w-6 text-[#A78BFA]" />
                            </div>
                            <CardTitle className="text-xl font-semibold text-white">Technical Support</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <CardDescription className="text-slate-300">Provide a assistance support</CardDescription>

                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                                <div className="flex items-center space-x-1">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Remote Assistance</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Quick Response</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="border-slate-600 bg-transparent text-slate-200 hover:bg-[#6941C6]/20 hover:border-[#6941C6] hover:text-[#A78BFA] focus:ring-2 focus:ring-[#6941C6] focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Learn more about Technical Support"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Network Security */}
                    <Card className="group overflow-hidden border border-slate-600 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#6941C6]/50">
                        <CardHeader className="pb-4">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#6941C6]/20 backdrop-blur-sm border border-[#6941C6]/30">
                                <ShieldCheck className="h-6 w-6 text-[#A78BFA]" />
                            </div>
                            <CardTitle className="text-xl font-semibold text-white">Network Security</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <CardDescription className="text-slate-300">Network security security and</CardDescription>

                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                                <div className="flex items-center space-x-1">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Threat Detection</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                                    <span>Firewall Management</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="border-slate-600 bg-transparent text-slate-200 hover:bg-[#6941C6]/20 hover:border-[#6941C6] hover:text-[#A78BFA] focus:ring-2 focus:ring-[#6941C6] focus:ring-offset-2 focus:ring-offset-slate-900"
                                aria-label="Learn more about Network Security"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
