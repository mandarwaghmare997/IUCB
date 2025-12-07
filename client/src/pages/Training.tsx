import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, GraduationCap, CheckCircle2, ArrowRight, Download } from "lucide-react";

export default function Training() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <Badge variant="outline" className="border-secondary text-secondary mb-4 px-3 py-1 uppercase tracking-widest">
            Professional Development
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Training & Exams</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Advance your career with globally recognized qualifications in ISO standards, cybersecurity, and auditing.
          </p>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Upcoming Courses</h2>
              <p className="text-muted-foreground">Master new skills with our accredited training partners.</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              <Download className="w-4 h-4 mr-2" /> Download Full Catalog
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "ISO 27001 Lead Auditor", 
                type: "Virtual Classroom",
                date: "Oct 15-19, 2025",
                duration: "5 Days",
                level: "Advanced",
                price: "€1,250"
              },
              { 
                title: "GDPR Implementation Specialist", 
                type: "Self-Paced Online",
                date: "Start Anytime",
                duration: "20 Hours",
                level: "Intermediate",
                price: "€850"
              },
              { 
                title: "ISO 9001 Internal Auditor", 
                type: "London, UK",
                date: "Nov 05-06, 2025",
                duration: "2 Days",
                level: "Foundation",
                price: "€650"
              },
              { 
                title: "AI Management Systems (ISO 42001)", 
                type: "Virtual Classroom",
                date: "Nov 12-14, 2025",
                duration: "3 Days",
                level: "Advanced",
                price: "€1,450"
              },
              { 
                title: "Cybersecurity Fundamentals", 
                type: "Self-Paced Online",
                date: "Start Anytime",
                duration: "10 Hours",
                level: "Beginner",
                price: "€350"
              },
              { 
                title: "Lead Implementer ISO 22301", 
                type: "Berlin, Germany",
                date: "Dec 01-05, 2025",
                duration: "5 Days",
                level: "Advanced",
                price: "€1,350"
              }
            ].map((course, i) => (
              <Card key={i} className="flex flex-col hover:shadow-lg transition-all border-t-4 border-t-secondary">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">
                      {course.level}
                    </Badge>
                    <span className="font-bold text-primary">{course.price}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {course.type}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary bg-muted/50 p-2 rounded">
                    <Calendar className="w-4 h-4" />
                    Next Session: {course.date}
                  </div>
                </CardContent>
                <CardFooter>
                  <a href="mailto:info@iucb.org?subject=Course Registration" className="w-full">
                    <Button className="w-full group">
                      Register Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Information */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">IUCB Competence Exams</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our exams are designed to rigorously test practical knowledge and application skills. Exams can be taken online via our secure proctoring system or at accredited training centers.
              </p>
              
              <div className="space-y-4">
                {[
                  "Multiple-choice and scenario-based questions",
                  "Instant preliminary results for online exams",
                  "Digital certificate issued within 48 hours",
                  "Retake option available at discounted rate"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <Button size="lg">Book an Exam</Button>
                <Button size="lg" variant="outline">Exam Guide</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3" />
              <Card className="relative border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                    Exam Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Foundation Level", time: "60 mins", q: "40 Questions" },
                    { name: "Practitioner Level", time: "120 mins", q: "80 Questions" },
                    { name: "Lead Auditor / Implementer", time: "180 mins", q: "Essay + MCQ" },
                    { name: "Expert Level", time: "240 mins", q: "Interview + Exam" }
                  ].map((level, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-muted transition-colors border border-transparent hover:border-border">
                      <span className="font-bold text-primary">{level.name}</span>
                      <div className="text-xs text-muted-foreground text-right">
                        <div>{level.time}</div>
                        <div>{level.q}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
