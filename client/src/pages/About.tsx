import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Globe, Shield, Users, Lightbulb, Scale } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/tallinn-office.jpg" 
            alt="IUCB Headquarters in Tallinn" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <Badge variant="outline" className="border-secondary text-secondary mb-6 px-4 py-1 uppercase tracking-widest bg-black/20 backdrop-blur-sm">
            About IUCB
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Setting the Global Standard<br />for <span className="text-secondary">Trust & Excellence</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Headquartered in Tallinn, Estonia, IUCB is a premier European accreditation body driving innovation, transparency, and sustainability in global compliance.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 p-8 bg-muted/30 rounded-xl border border-border/50 hover:border-secondary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations worldwide by providing a robust, transparent, and universally recognized accreditation framework that fosters trust and operational excellence.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-muted/30 rounded-xl border border-border/50 hover:border-secondary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where certification and benchmarking are synonymous with integrity, driving sustainable growth and innovation across all industries.
              </p>
            </div>

            <div className="space-y-6 p-8 bg-muted/30 rounded-xl border border-border/50 hover:border-secondary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Scale className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold">Our Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" /> Transparency in all processes
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" /> Innovation in assessment
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" /> Sustainability focus
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" /> Global collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Difference */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-6">Beyond Traditional Accreditation</h2>
            <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
              <p>
                Founded in 2019, the International Union for Certification & Benchmarking (IUCB) was established to bridge the gap between rigid traditional accreditation and the dynamic needs of the modern digital economy.
              </p>
              <p>
                Unlike government-only bodies, IUCB operates as a private, agile, and globally aligned ecosystem. We combine the authority of international standards with the speed and innovation required by sectors like Cybersecurity, AI, and Fintech.
              </p>
              <p>
                Our commitment to openness allows us to adapt frameworks rapidly, ensuring that our accredited partners are always at the forefront of industry best practices.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-2xl transform rotate-3" />
            <img 
              src="/images/audit-meeting.jpg" 
              alt="IUCB Governance Meeting" 
              className="relative rounded-2xl shadow-2xl border border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Governance & Leadership */}
      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Governance & Leadership</h2>
            <p className="text-lg text-muted-foreground">
              Guided by a diverse board of experts ensuring impartiality and strategic direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Elena Voreakis", role: "Executive Director", loc: "Tallinn, Estonia" },
              { name: "Marcus Thornfield", role: "Chief Accreditation Officer", loc: "London, UK" },
              { name: "Sarah Chen", role: "Head of Digital Standards", loc: "Singapore" },
              { name: "Johan Berg", role: "Director of Training", loc: "Berlin, Germany" }
            ].map((person, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-all border-t-4 border-t-transparent hover:border-t-secondary group">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-muted mb-6 overflow-hidden border-2 border-white shadow-md">
                    {/* Placeholder for team photos - using generic avatars */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary/40">
                      <Users className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{person.name}</h3>
                  <p className="text-secondary font-medium mb-2">{person.role}</p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <Globe className="w-3 h-3" /> {person.loc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white rounded-xl border border-border shadow-sm text-center">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Global Presence</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With a team of over 50 professionals and a network of technical assessors across 20+ countries, IUCB delivers localized expertise with global consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Code of Ethics */}
      <section className="py-24">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
                  <Shield className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">Code of Ethics</h2>
                <p className="text-blue-200">
                  Our foundation is built on unshakeable integrity. Every member of the IUCB ecosystem adheres to strict ethical guidelines.
                </p>
              </div>
              
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-secondary">Impartiality</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Decisions are based solely on objective evidence of conformity, free from commercial or financial pressures.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-secondary">Confidentiality</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We protect the proprietary information of our applicants and certified entities with the highest security standards.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-secondary">Competence</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Accreditation is granted only by personnel with demonstrated technical competence in the specific sector.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-secondary">Responsibility</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We take full accountability for our accreditation decisions and their impact on public trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
