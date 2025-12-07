import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, HelpCircle, BookOpen, FileCheck } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-6">Resources Center</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Access policies, templates, whitepapers, and answers to common questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Downloads */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Documents Section */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-secondary" /> Key Documents
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "IUCB Accreditation Manual", type: "PDF", size: "2.4 MB", desc: "Comprehensive guide to accreditation requirements." },
                  { title: "Certification Marks Usage Policy", type: "PDF", size: "1.1 MB", desc: "Guidelines for using IUCB logos and marks." },
                  { title: "Impartiality Policy Statement", type: "PDF", size: "0.5 MB", desc: "Our commitment to objective assessment." },
                  { title: "Appeals and Complaints Procedure", type: "PDF", size: "0.8 MB", desc: "Process for dispute resolution." }
                ].map((doc, i) => (
                  <Card key={i} className="hover:border-secondary transition-colors group cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg group-hover:text-secondary transition-colors">{doc.title}</CardTitle>
                      <CardDescription>{doc.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mt-2">
                        <Badge variant="outline" className="text-xs">{doc.type} • {doc.size}</Badge>
                        <Download className="w-4 h-4 text-muted-foreground group-hover:text-secondary" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQs Section */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-secondary" /> Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "How long does the accreditation process take?", a: "The typical timeline for initial accreditation is 3-6 months, depending on the readiness of the applicant and the scope of accreditation requested." },
                  { q: "Is IUCB accreditation recognized globally?", a: "Yes, IUCB operates according to ISO/IEC 17011 and maintains mutual recognition arrangements to ensure global acceptance of our accredited certificates." },
                  { q: "Can I transfer my certification to an IUCB accredited body?", a: "Yes, transfers are permitted under specific conditions. The new certification body will need to perform a transfer review to verify your current compliance status." },
                  { q: "What is the cost of accreditation?", a: "Fees vary based on the scope and size of the organization. Please contact us for a customized fee schedule and quotation." },
                  { q: "How do I verify a certificate?", a: "You can use our Global Directory to verify the validity of any certificate issued by an IUCB accredited body using the certificate ID or organization name." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium text-lg hover:text-secondary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <Card className="bg-muted/30 border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> Latest Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "The Future of AI Governance: ISO 42001 Explained",
                  "Transitioning to the New ISO 27001:2022 Standard",
                  "Why Supply Chain Security Matters More Than Ever",
                  "The Role of Accreditation in ESG Reporting"
                ].map((news, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h4 className="font-medium text-primary group-hover:text-secondary transition-colors text-sm mb-1">
                      {news}
                    </h4>
                    <p className="text-xs text-muted-foreground">Oct 2025 • Article</p>
                    {i < 3 && <div className="h-px bg-border mt-3" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground">
              <CardHeader>
                <CardTitle className="text-xl">Need Support?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm opacity-90">
                  Our technical team is available to assist with specific inquiries regarding standards interpretation.
                </p>
                <a href="mailto:info@iucb.org" className="block">
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Contact Support
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
}
