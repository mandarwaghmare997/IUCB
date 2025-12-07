import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, FileText, ShieldCheck, GraduationCap, Users, ArrowRight } from "lucide-react";

export default function Accreditation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <Badge variant="outline" className="border-secondary text-secondary mb-4 px-3 py-1 uppercase tracking-widest">
            Core Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Accreditation Programs</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Formal recognition of competence for Certification Bodies, Auditors, and Training Providers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="acb" className="space-y-12">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-3xl grid-cols-3 h-auto p-1 bg-muted/50 rounded-xl">
                <TabsTrigger value="acb" className="py-4 text-base md:text-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md rounded-lg transition-all">
                  <ShieldCheck className="w-5 h-5 mr-2 hidden md:inline" />
                  Certification Bodies
                </TabsTrigger>
                <TabsTrigger value="aap" className="py-4 text-base md:text-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md rounded-lg transition-all">
                  <Users className="w-5 h-5 mr-2 hidden md:inline" />
                  Auditors
                </TabsTrigger>
                <TabsTrigger value="atpp" className="py-4 text-base md:text-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md rounded-lg transition-all">
                  <GraduationCap className="w-5 h-5 mr-2 hidden md:inline" />
                  Training Providers
                </TabsTrigger>
              </TabsList>
            </div>

            {/* A. Certification Body Accreditation (ACB) */}
            <TabsContent value="acb" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Certification Body Accreditation (ACB)</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The ACB program is designed for organizations that provide audit and certification services. Accreditation by IUCB demonstrates your competence, impartiality, and performance capability.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                          <FileText className="w-5 h-5" /> Requirements
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p>• Legal entity registration and liability insurance</p>
                        <p>• Documented management system (ISO 17021 compliance)</p>
                        <p>• Competent personnel for all technical scopes</p>
                        <p>• Impartiality committee structure</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                          <CheckCircle2 className="w-5 h-5" /> Process
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p>1. Application & Document Review</p>
                        <p>2. On-site / Remote Office Assessment</p>
                        <p>3. Witness Assessment of Audit Team</p>
                        <p>4. Accreditation Decision & Granting</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-xl border border-border">
                    <h3 className="text-xl font-bold mb-4">Benefits of IUCB Accreditation</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {[
                        "Global recognition of your certificates",
                        "Access to IUCB technical benchmarks",
                        "Listing in the Global Directory",
                        "Right to use the IUCB Accreditation Mark",
                        "Annual surveillance for continuous improvement",
                        "Marketing support and verification services"
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="bg-primary text-primary-foreground border-none shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">Ready to Apply?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-blue-100">
                        Start your journey towards global recognition today. Download the application kit or contact our team.
                      </p>
                      <a href="mailto:accreditation@iucb.org?subject=ACB Application Inquiry" className="block">
                        <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                          Apply for Accreditation
                        </Button>
                      </a>
                      <p className="text-xs text-center text-blue-200">
                        Response time: 2-3 business days
                      </p>
                    </CardContent>
                  </Card>

                  <div className="p-6 border border-border rounded-xl bg-white shadow-sm">
                    <h4 className="font-bold mb-2">Annual Surveillance</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Accreditation is valid for 3 years, subject to successful annual surveillance assessments to ensure continued compliance.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* B. Auditor Accreditation (AAP) */}
            <TabsContent value="aap" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Auditor Accreditation Program (AAP)</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The AAP validates the competence of individual auditors. It provides a structured career pathway and independent verification of skills for the global market.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { level: "Associate", color: "bg-gray-100 border-gray-300" },
                      { level: "Lead Auditor", color: "bg-blue-50 border-blue-200" },
                      { level: "Senior", color: "bg-indigo-50 border-indigo-200" },
                      { level: "Principal", color: "bg-amber-50 border-amber-200" }
                    ].map((item, i) => (
                      <div key={i} className={`p-4 rounded-lg border-2 text-center ${item.color}`}>
                        <div className="font-bold text-primary mb-1">{item.level}</div>
                        <div className="text-xs text-muted-foreground">Level {i+1}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Requirements by Level</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-muted text-muted-foreground">
                          <tr>
                            <th className="p-4 font-medium">Level</th>
                            <th className="p-4 font-medium">Experience</th>
                            <th className="p-4 font-medium">Audits Performed</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-4 font-medium">Associate</td>
                            <td className="p-4">Completed Training</td>
                            <td className="p-4">None required</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Lead Auditor</td>
                            <td className="p-4">2+ Years</td>
                            <td className="p-4">5+ Audits (20 days)</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Senior Auditor</td>
                            <td className="p-4">5+ Years</td>
                            <td className="p-4">15+ Audits (Lead)</td>
                          </tr>
                          <tr>
                            <td className="p-4 font-medium">Principal</td>
                            <td className="p-4">10+ Years</td>
                            <td className="p-4">Subject Matter Expert</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-xl border border-border">
                    <h3 className="text-xl font-bold mb-4">What You Get</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary" /> Digital ID Card & Badge
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary" /> Global Directory Listing
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary" /> CPD Logbook Access
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary" /> Priority for IUCB Events
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="bg-primary text-primary-foreground border-none shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">Register as Auditor</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-blue-100">
                        Validate your expertise and join an elite network of global professionals.
                      </p>
                      <a href="mailto:accreditation@iucb.org?subject=Auditor Application" className="block">
                        <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                          Apply Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                  
                  <div className="p-6 border border-border rounded-xl bg-white shadow-sm">
                    <h4 className="font-bold mb-2">Exam Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      New applicants may be required to pass the IUCB Competence Exam or provide evidence of equivalent recognized certification.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* C. Training Provider Accreditation (ATPP) */}
            <TabsContent value="atpp" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Accredited Training Partner Program (ATPP)</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      For organizations delivering training in ISO standards, cybersecurity, and privacy. Accreditation ensures your courseware and trainers meet global benchmarks.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                          <FileText className="w-5 h-5" /> Eligibility
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p>• Established training organization</p>
                        <p>• Quality management system for education</p>
                        <p>• Qualified trainers with industry experience</p>
                        <p>• Adequate facilities (physical or virtual)</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                          <CheckCircle2 className="w-5 h-5" /> Key Benefits
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p>• Right to conduct IUCB official exams</p>
                        <p>• Use of "Accredited Training Partner" logo</p>
                        <p>• Access to official courseware materials</p>
                        <p>• Listing on IUCB website</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Accreditation Process</h3>
                    <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 py-2">
                      {[
                        { title: "Application", desc: "Submit organization details and course scope." },
                        { title: "Courseware Review", desc: "Technical evaluation of training materials and slides." },
                        { title: "Trainer Evaluation", desc: "Review of trainer CVs and teaching competence." },
                        { title: "Approval", desc: "Granting of ATP status and exam portal access." }
                      ].map((step, i) => (
                        <div key={i} className="relative pl-8">
                          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-white shadow-sm" />
                          <h4 className="font-bold text-primary">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="bg-primary text-primary-foreground border-none shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl">Become a Partner</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-blue-100">
                        Deliver world-class training with IUCB accreditation.
                      </p>
                      <a href="mailto:accreditation@iucb.org?subject=Training Partner Application" className="block">
                        <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                          Apply as Training Provider
                        </Button>
                      </a>
                    </CardContent>
                  </Card>

                  <div className="p-6 border border-border rounded-xl bg-white shadow-sm">
                    <h4 className="font-bold mb-2">Annual Renewal</h4>
                    <p className="text-sm text-muted-foreground">
                      Partnership is renewed annually based on performance, student feedback, and exam pass rates.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
