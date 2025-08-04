import Hero from "@/components/landing/hero"
import Stats from "@/components/landing/stats"
import Courses from "@/components/landing/courses"
import Services from "@/components/landing/services"
import CTA from "@/components/landing/cta"

export default function ITCompanyLanding() {


  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Stats />
      <Courses />
      <Services />
      <CTA />
    </div>
  )
}
