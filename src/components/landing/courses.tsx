'use client'

import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ChevronRight, Clock, Code2, Database, Shield, Star, Users } from 'lucide-react'
import { Button } from '../ui/button'

export default function Courses() {
    return (
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="courses-heading">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Badge className="mb-4 bg-[#6941C6]/10 text-[#6941C6] border-[#6941C6]/20">Our Courses</Badge>
                    <h2 id="courses-heading" className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                        Comprehensive IT Training Programs
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        Explore our comprehensive IT training courses designed to enhance your skills and advance your career.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {[
                        {
                            title: 'Programming',
                            icon: <Code2 className="h-7 w-7 text-white" />,
                            description: 'Learn the fundamentals of programming and software development with hands-on projects and real-world applications.',
                            tags: ['Python', 'JavaScript', 'React'],
                            duration: '12 weeks',
                            enrolled: '150+ enrolled'
                        },
                        {
                            title: 'Cybersecurity',
                            icon: <Shield className="h-7 w-7 text-white" />,
                            description: 'Gain expertise in protecting systems and data from cyber threats with comprehensive security training and certifications.',
                            tags: ['Ethical Hacking', 'Network Security', 'CISSP'],
                            duration: '16 weeks',
                            enrolled: '200+ enrolled'
                        },
                        {
                            title: 'Data Science',
                            icon: <Database className="h-7 w-7 text-white" />,
                            description: 'Master the skills required to analyze and interpret complex data using modern tools and machine learning techniques.',
                            tags: ['Machine Learning', 'Python', 'SQL'],
                            duration: '14 weeks',
                            enrolled: '180+ enrolled'
                        }
                    ].map((course, idx) => (
                        <Card
                            key={idx}
                            className="group relative overflow-hidden border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#6941C6]/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6941C6]/10 via-transparent to-[#8B5CF6]/10 opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#6941C6] to-[#8B5CF6] transition-all duration-500 group-hover:w-full" />

                            <CardHeader className="pb-4 relative z-10">
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#6941C6] to-[#8B5CF6] shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {course.icon}
                                </div>
                                <CardTitle className="text-xl font-semibold text-white group-hover:text-[#A78BFA] transition-colors">
                                    {course.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 relative z-10">
                                <CardDescription className="text-slate-300 leading-relaxed">
                                    {course.description}
                                </CardDescription>

                                <div className="flex flex-wrap gap-2">
                                    {course.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="bg-[#6941C6]/20 text-[#A78BFA] border-[#6941C6]/30 hover:bg-[#6941C6]/30 transition-colors"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                                        <div className="flex items-center space-x-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Users className="h-4 w-4" />
                                            <span>{course.enrolled}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>

                                <Button
                                    className="w-full bg-slate-800 border-2 border-slate-600 text-slate-200 hover:bg-[#6941C6] hover:text-white hover:border-[#6941C6] transition-all duration-300 group-hover:shadow-lg"
                                    aria-label={`Learn more about ${course.title} course`}
                                >
                                    Learn More
                                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
