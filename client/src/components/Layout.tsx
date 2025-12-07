import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Globe, Mail, Linkedin, Twitter, Facebook, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Accreditation", path: "/accreditation" },
    { name: "Certifications", path: "/certifications" },
    { name: "Training", path: "/training" },
    { name: "Directory", path: "/directory" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <div className="absolute inset-0 bg-secondary rounded-full opacity-20 group-hover:scale-110 transition-transform" />
                <img src="/images/accreditation-seal.png" alt="IUCB Logo" className="w-full h-full object-contain relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold text-white leading-none tracking-tight">IUCB</span>
                <span className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest">International Union</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    location === item.path 
                      ? "bg-white/10 text-white shadow-inner" 
                      : "text-blue-100 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <a href="mailto:accreditation@iucb.org" className="ml-4">
              <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-lg shadow-secondary/20">
                Apply Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary border-l-white/10 w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <img src="/images/accreditation-seal.png" alt="IUCB Logo" className="w-10 h-10 object-contain" />
                    <span className="text-2xl font-heading font-bold text-white">IUCB</span>
                  </div>
                </div>
                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <div 
                        className={`px-4 py-3 rounded-lg text-base font-medium transition-all cursor-pointer flex items-center justify-between group ${
                          location === item.path 
                            ? "bg-white/10 text-white" 
                            : "text-blue-100 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                        {location === item.path && <div className="w-1.5 h-1.5 rounded-full bg-secondary" />}
                      </div>
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-white/10">
                  <a href="mailto:accreditation@iucb.org" className="block w-full">
                    <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src="/images/accreditation-seal.png" alt="IUCB Logo" className="w-12 h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
                <div className="flex flex-col">
                  <span className="text-2xl font-heading font-bold leading-none">IUCB</span>
                  <span className="text-xs text-blue-300 uppercase tracking-widest">International Union</span>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Setting the global standard for trust, transparency, and excellence in accreditation and certification.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-secondary">Quick Links</h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li><Link href="/about"><span className="hover:text-white cursor-pointer transition-colors">About Us</span></Link></li>
                <li><Link href="/accreditation"><span className="hover:text-white cursor-pointer transition-colors">Accreditation Process</span></Link></li>
                <li><Link href="/directory"><span className="hover:text-white cursor-pointer transition-colors">Verify Certificate</span></Link></li>
                <li><Link href="/training"><span className="hover:text-white cursor-pointer transition-colors">Find Training</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-white cursor-pointer transition-colors">Contact Support</span></Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-secondary">Legal & Policy</h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li><Link href="/resources"><span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span></Link></li>
                <li><Link href="/resources"><span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span></Link></li>
                <li><Link href="/resources"><span className="hover:text-white cursor-pointer transition-colors">Impartiality Statement</span></Link></li>
                <li><Link href="/resources"><span className="hover:text-white cursor-pointer transition-colors">Complaints & Appeals</span></Link></li>
                <li><Link href="/resources"><span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span></Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-secondary">Contact Us</h4>
              <ul className="space-y-4 text-sm text-blue-200">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0" />
                  <span>Maakri 19/1, 10145<br />Tallinn, Estonia</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <a href="mailto:info@iucb.org" className="hover:text-white">info@iucb.org</a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-secondary shrink-0" />
                  <a href="https://iucb.org" className="hover:text-white">www.iucb.org</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
            <p>&copy; {new Date().getFullYear()} IUCB International. All rights reserved.</p>
            <p>Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
