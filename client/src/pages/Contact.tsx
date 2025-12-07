import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real static site, this would submit to a form handler service or trigger the mailto
    setIsSubmitted(true);
    toast.success("Message sent successfully!");
    
    // Optional: Trigger mailto as fallback or primary method if backend isn't available
    const formData = new FormData(e.target as HTMLFormElement);
    const subject = `Contact Form: ${formData.get('subject')}`;
    const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`;
    
    // We don't automatically open mailto here to avoid disrupting the UX, 
    // but in a pure static site without JS form handling, you might use <form action="mailto:...">
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <Badge variant="outline" className="border-secondary text-secondary mb-4 px-3 py-1 uppercase tracking-widest">
            Get in Touch
          </Badge>
          <h1 className="text-4xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions about accreditation, certification, or training? Our global team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <Card className="border-t-4 border-t-secondary shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been recorded. Our team will respond to your inquiry within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                        <Input id="name" name="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <select 
                        id="subject" 
                        name="subject"
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select a topic...</option>
                        <option value="Accreditation Inquiry">Accreditation Inquiry</option>
                        <option value="Certification Verification">Certification Verification</option>
                        <option value="Training & Exams">Training & Exams</option>
                        <option value="Partnership Proposal">Partnership Proposal</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="How can we help you?" 
                        className="min-h-[150px]" 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg h-12">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our privacy policy. 
                      Alternatively, you can email us directly at <a href="mailto:connect@iucb.org" className="text-primary hover:underline">connect@iucb.org</a>
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Contact Information</h2>
              <div className="grid gap-6">
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Global Headquarters</h3>
                      <p className="text-muted-foreground">
                        IUCB International<br />
                        Maakri 19/1<br />
                        10145 Tallinn, Estonia
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:border-primary transition-colors">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">General Inquiries:</span>
                          <a href="mailto:info@iucb.org" className="font-medium hover:text-secondary">info@iucb.org</a>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Accreditation Services:</span>
                          <a href="mailto:accreditation@iucb.org" className="font-medium hover:text-secondary">accreditation@iucb.org</a>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Support Team:</span>
                          <a href="mailto:connect@iucb.org" className="font-medium hover:text-secondary">connect@iucb.org</a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:border-primary transition-colors">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM (EET)<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden h-64 bg-muted relative group">
              <img 
                src="/images/tallinn-office.jpg" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" className="shadow-lg">
                  <MapPin className="w-4 h-4 mr-2" /> View on Google Maps
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
