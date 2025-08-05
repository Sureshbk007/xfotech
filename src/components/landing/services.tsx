
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Code2, Database, Shield } from 'lucide-react'

export default function Courses() {
    return (
        <section className="pb-8 bg-white" aria-labelledby="courses-heading">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-3 text-left">
                    <h2 id="courses-heading" className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                        Our Services
                    </h2>
                    <p className=" text-xl">
                        We Offer a varity of IT services to meed your business needs.
                    </p>
                </div>

                <div className="mt-5 grid gap-8 md:grid-cols-2">
                    {[
                        {
                            title: 'IT Consulting',
                            icon: <Code2 className="size-8  text-white" />,
                            description: 'Learn the fundamentals of programming and software development with hands-on projects and real-world applications.',
                            tags: ['Python', 'JavaScript', 'React'],
                            duration: '12 weeks',
                            enrolled: '150+ enrolled'
                        },
                        {
                            title: 'Cloud Solutions',
                            icon: <Shield className="size-8  text-white" />,
                            description: 'Gain expertise in protecting systems and data from cyber threats with comprehensive security training and certifications.',
                            tags: ['Ethical Hacking', 'Network Security', 'CISSP'],
                            duration: '16 weeks',
                            enrolled: '200+ enrolled'
                        },
                        {
                            title: 'Techical Support',
                            icon: <Database className="size-8  text-white" />,
                            description: 'Master the skills required to analyze and interpret complex data using modern tools and machine learning techniques.',
                            tags: ['Machine Learning', 'Python', 'SQL'],
                            duration: '14 weeks',
                            enrolled: '180+ enrolled'
                        },
                        {
                            title: 'Network Security',
                            icon: <Database className="size-8  text-white" />,
                            description: 'Master the skills required to analyze and interpret complex data using modern tools and machine learning techniques.',
                            tags: ['Machine Learning', 'Python', 'SQL'],
                            duration: '14 weeks',
                            enrolled: '180+ enrolled'
                        }
                    ].map((course, idx) => (
                        <Card
                            key={idx}
                            className="group relative overflow-hidden bg-[#6a3fcc] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#6941C6]/50 py-8"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6941C6]/10 via-transparent to-[#8B5CF6]/10 opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#6941C6] to-[#8B5CF6] transition-all duration-500 group-hover:w-full" />

                            <CardHeader className="relative z-10">
                                <CardTitle className="flex gap-3 items-center text-xl font-semibold text-white group-hover:text-[#A78BFA] transition-colors">
                                    <div >
                                        {course.icon}
                                    </div>
                                    <p>
                                        {course.title}
                                    </p>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 relative z-10">
                                <CardDescription className="text-white text-lg leading-relaxed">
                                    {course.description}
                                </CardDescription>


                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
