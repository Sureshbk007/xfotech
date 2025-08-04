import React from 'react'

export default function Stats() {
    return (
        <section className="border-t border-slate-800 bg-slate-900 py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#6941C6] lg:text-4xl">500+</div>
                        <div className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wide">Students Trained</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#6941C6] lg:text-4xl">50+</div>
                        <div className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wide">Corporate Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#6941C6] lg:text-4xl">95%</div>
                        <div className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wide">Success Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#6941C6] lg:text-4xl">24/7</div>
                        <div className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wide">Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
