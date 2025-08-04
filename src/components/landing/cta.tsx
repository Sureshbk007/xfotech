import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
    return (
        <section className="bg-gradient-to-r from-[#6941C6] to-[#8B5CF6] py-16 sm:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to Transform Your IT Career?
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
                        Join thousands of professionals who have advanced their careers with our expert training and comprehensive
                        IT services.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
                        <Button
                            size="lg"
                            className="bg-white px-8 py-3 text-base font-semibold text-[#6941C6] shadow-lg hover:bg-slate-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6941C6]"
                        >
                            Start Your Journey
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white/30 bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6941C6]"
                        >
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
