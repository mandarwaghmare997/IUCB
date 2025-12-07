import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Server, Activity, Globe, CheckCircle2, ArrowRight, FileCheck, GraduationCap } from "lucide-react";

export default function Certifications() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <Badge variant="outline" className="border-secondary text-secondary mb-4 px-3 py-1 uppercase tracking-widest">
            Global Standards
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Certifications</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive certification schemes covering ISO standards, cybersecurity frameworks, and sector-specific trust marks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="iso" className="space-y-12">
            <div className="flex justify-center overflow-x-auto pb-4 md:pb-0">
              <TabsList className="inline-flex w-auto h-auto p-1 bg-muted/50 rounded-xl">
                <TabsTrigger value="iso" className="px-6 py-3 text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md rounded-lg transition-all">
                  ISO Standards
                </TabsTrigger>
                <TabsTrigger value="cyber" className="px-6 py-3 text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md rounded-lg transition-all">
                  Cybersecurity & Privacy
                </TabsTrigger>
                <TabsTrigger value="sector" className="px-6 py-3 text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md rounded-lg transition-all">
                  Sector Trust Marks
                </TabsTrigger>
              </TabsList>
            </div>

            {/* A. ISO Certifications */}
            <TabsContent value="iso" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">ISO Management Systems</h2>
                <p className="text-muted-foreground">
                  Globally recognized standards audited by IUCB-accredited Certification Bodies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { code: "ISO 9001", title: "Quality Management", desc: "The world's most recognized quality management standard." },
                  { code: "ISO 27001", title: "Information Security", desc: "Protect your information assets and manage security risks." },
                  { code: "ISO 27701", title: "Privacy Information", desc: "Extension to ISO 27001 for privacy management." },
                  { code: "ISO 20000", title: "IT Service Management", desc: "Benchmark for IT service delivery excellence." },
                  { code: "ISO 22301", title: "Business Continuity", desc: "Ensure your business can survive disruptions." },
                  { code: "ISO 14001", title: "Environmental Management", desc: "Manage your environmental responsibilities." },
                  { code: "ISO 45001", title: "Occupational Health", desc: "Reduce workplace risks and create safer working conditions." },
                  { code: "ISO 42001", title: "AI Management", desc: "The new global standard for Artificial Intelligence systems." },
                  { code: "ISO 37001", title: "Anti-Bribery", desc: "Prevent, detect, and address bribery." }
                ].map((iso, i) => (
                  <Card key={i} className="hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-t-primary">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {iso.code}
                        </Badge>
                        <Shield className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="mt-4">{iso.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{iso.desc}</p>
                    </CardContent>
                    <CardFooter>
                      <a href="mailto:accreditation@iucb.org" className="text-sm font-semibold text-primary flex items-center hover:gap-2 transition-all">
                        Get Certified <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* B. Cybersecurity & Privacy */}
            <TabsContent value="cyber" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Cybersecurity & Privacy</h2>
                <p className="text-muted-foreground">
                  Direct IUCB certifications for digital trust, compliance readiness, and cyber maturity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-primary text-primary-foreground border-none overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">Compliance Readiness</CardTitle>
                    <CardDescription className="text-blue-200">Pre-assessment and readiness certifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
                    {[
                      "HIPAA Compliance Readiness",
                      "GDPR Readiness Assessment",
                      "SOC 2 Readiness Check",
                      "PCI DSS Pre-Assessment"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <a href="mailto:accreditation@iucb.org">
                      <Button variant="secondary" className="w-full">Apply for Assessment</Button>
                    </a>
                  </CardFooter>
                </Card>

                <Card className="border-t-4 border-t-secondary">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Server className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Technical Certifications</CardTitle>
                    <CardDescription>Validation of technical controls and maturity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Cyber Hygiene Certification", desc: "Baseline security controls for any organization." },
                      { title: "Cloud Security Certification", desc: "Validation of cloud infrastructure security." },
                      { title: "NIST CSF Certification", desc: "Alignment with NIST Cybersecurity Framework." },
                      { title: "Cyber Maturity Index (CMI)", desc: "Scored assessment of security maturity level." }
                    ].map((item, i) => (
                      <div key={i} className="group p-3 rounded-lg hover:bg-muted transition-colors">
                        <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <a href="mailto:accreditation@iucb.org" className="w-full">
                      <Button variant="outline" className="w-full">View Technical Details</Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* C. Sector-Specific Trust Marks */}
            <TabsContent value="sector" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">Sector-Specific Trust Marks</h2>
                <p className="text-muted-foreground">
                  Specialized certifications tailored to the unique risks and requirements of specific industries.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Activity, title: "FinTech Security Trust", color: "text-blue-600" },
                  { icon: Shield, title: "HealthTech Privacy Seal", color: "text-green-600" },
                  { icon: GraduationCap, title: "EdTech Safety Cert", color: "text-amber-600" },
                  { icon: Globe, title: "SME Cyber Hygiene", color: "text-purple-600" }
                ].map((mark, i) => (
                  <Card key={i} className="text-center hover:shadow-xl transition-all group">
                    <CardContent className="pt-8 pb-8">
                      <div className={`w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${mark.color}`}>
                        <mark.icon className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{mark.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        Verified compliance for the sector.
                      </p>
                      <a href="mailto:accreditation@iucb.org">
                        <Button variant="ghost" className="text-primary hover:text-secondary hover:bg-transparent p-0 h-auto font-semibold">
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Not sure which certification is right for you?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team can help guide you to the most appropriate standard based on your industry, size, and strategic goals.
          </p>
          <a href="mailto:info@iucb.org">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Our Experts
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
