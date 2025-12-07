import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck, Globe, Award, BookOpen, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Digital Fortress Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <Badge variant="outline" className="border-secondary text-secondary px-4 py-1 text-sm uppercase tracking-widest bg-primary/50 backdrop-blur-sm">
              Global Accreditation Ecosystem
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Global Accreditation & <span className="text-secondary">Certification</span> Ecosystem
            </h1>
            
            <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
              Empowering organizations, auditors, and training bodies through globally recognized accreditation and benchmarking frameworks for ISO, Cybersecurity & Privacy Standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="mailto:accreditation@iucb.org">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 h-14 text-lg shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:scale-105">
                  Become Accredited
                </Button>
              </a>
              <Link href="/certifications">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white h-14 text-lg px-8 backdrop-blur-sm">
                  Explore Certifications
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center animate-in zoom-in duration-1000 delay-300">
            <div className="relative w-[500px] h-[500px]">
              {/* Abstract 3D Shield/Network Visualization */}
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
              <img 
                src="/images/accreditation-seal.png" 
                alt="IUCB Accreditation Seal" 
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-float"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-24 bg-background relative z-20 -mt-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <Card className="border-t-4 border-t-secondary shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card group">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Accreditation Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Comprehensive accreditation for Certification Bodies, Auditors, and Training Providers ensuring global standards compliance.
                </p>
                <Link href="/accreditation">
                  <span className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="border-t-4 border-t-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card group">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  ISO standards, Cybersecurity frameworks, and Privacy certifications designed to benchmark organizational excellence.
                </p>
                <Link href="/certifications">
                  <span className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                    Explore Standards <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="border-t-4 border-t-secondary shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card group">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Training & Exams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  World-class training pathways and examination systems for professionals seeking to advance their compliance careers.
                </p>
                <Link href="/training">
                  <span className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                    View Programs <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why IUCB Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Why Choose IUCB?</h2>
            <p className="text-lg text-muted-foreground">
              We provide a secure, transparent, and globally recognized framework for accreditation and benchmarking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Recognition",
                desc: "Accepted worldwide across major industries and regulatory frameworks."
              },
              {
                icon: Award,
                title: "Versatile Accreditation",
                desc: "Flexible programs covering ISO, Cybersecurity, and Privacy standards."
              },
              {
                icon: CheckCircle2,
                title: "Industry Benchmarks",
                desc: "Setting the gold standard for compliance and operational excellence."
              },
              {
                icon: ShieldCheck,
                title: "Secure Process",
                desc: "Transparent, ethical, and rigorous assessment methodologies."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="/images/global-network.jpg" alt="Network" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/20 pb-8">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-2">Our Focus Areas</h2>
              <p className="text-blue-200 text-lg">Driving excellence across critical domains</p>
            </div>
            <Link href="/certifications">
              <Button variant="outline" className="mt-4 md:mt-0 border-white/30 text-white hover:bg-white hover:text-primary">
                View All Standards
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "ISO Standards",
              "Cybersecurity Frameworks",
              "Privacy Certifications",
              "Industry Benchmarks"
            ].map((area, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg aspect-video bg-white/5 border border-white/10 hover:border-secondary/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors flex items-center justify-between">
                    {area}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Sectors Served */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <p className="text-center text-blue-200 mb-8 uppercase tracking-widest text-sm">Trusted by Leading Sectors</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {["IT & Technology", "Healthcare", "Fintech", "Manufacturing", "Education"].map((sector, i) => (
                <div key={i} className="text-xl font-heading font-bold text-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
