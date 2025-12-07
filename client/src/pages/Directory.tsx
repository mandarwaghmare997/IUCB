import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Globe, ShieldCheck, Filter } from "lucide-react";

export default function Directory() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold mb-6">Global Directory</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Verify the status of accredited bodies, certified organizations, and qualified professionals.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search by name, certificate ID, or country..." 
                  className="pl-10 h-12 bg-white text-foreground border-none"
                />
              </div>
              <Button size="lg" className="h-12 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Verify
              </Button>
            </div>
            <div className="flex justify-center gap-4 mt-4 text-sm text-blue-200">
              <span className="flex items-center gap-1 cursor-pointer hover:text-white"><Filter className="w-3 h-3" /> Filter by Scope</span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-white"><MapPin className="w-3 h-3" /> Filter by Region</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Listings */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar Filters */}
            <div className="hidden lg:block space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["All Listings", "Accredited Bodies", "Certified Organizations", "Training Providers", "Certified Auditors"].map((cat, i) => (
                    <div key={i} className={`p-2 rounded cursor-pointer ${i === 0 ? 'bg-primary/10 text-primary font-bold' : 'text-muted-foreground hover:bg-muted'}`}>
                      {cat}
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Standards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {["ISO 9001", "ISO 27001", "ISO 14001", "ISO 45001", "ISO 22301"].map((std, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" id={`std-${i}`} className="rounded border-gray-300" />
                      <label htmlFor={`std-${i}`} className="text-sm text-muted-foreground cursor-pointer">{std}</label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Showing 5 sample results</h3>
                <span className="text-sm text-muted-foreground">Sort by: Relevance</span>
              </div>

              {[
                {
                  name: "Global Quality Assurance Ltd",
                  type: "Accredited Certification Body",
                  id: "ACB-2024-001",
                  loc: "London, UK",
                  scope: ["ISO 9001", "ISO 27001", "ISO 14001"],
                  status: "Active"
                },
                {
                  name: "TechSecure Solutions GmbH",
                  type: "Certified Organization",
                  id: "CERT-DE-88291",
                  loc: "Berlin, Germany",
                  scope: ["ISO 27001:2022"],
                  status: "Active"
                },
                {
                  name: "Nordic Compliance Academy",
                  type: "Training Provider",
                  id: "ATP-EE-104",
                  loc: "Tallinn, Estonia",
                  scope: ["Lead Auditor Training", "Internal Auditor"],
                  status: "Active"
                },
                {
                  name: "Jean-Pierre Dubois",
                  type: "Certified Lead Auditor",
                  id: "AUD-FR-5521",
                  loc: "Paris, France",
                  scope: ["QMS", "ISMS", "BCMS"],
                  status: "Active"
                },
                {
                  name: "Pacific Rim Standards",
                  type: "Accredited Certification Body",
                  id: "ACB-2023-015",
                  loc: "Singapore",
                  scope: ["ISO 9001", "ISO 45001"],
                  status: "Suspended"
                }
              ].map((item, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                          {item.status === "Active" && <ShieldCheck className="w-5 h-5 text-green-500" />}
                        </div>
                        <p className="text-sm font-medium text-secondary">{item.type}</p>
                      </div>
                      <Badge variant={item.status === "Active" ? "default" : "destructive"} className={item.status === "Active" ? "bg-green-600 hover:bg-green-700" : ""}>
                        {item.status}
                      </Badge>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">ID:</span> {item.id}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {item.loc}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.scope.map((s, j) => (
                        <Badge key={j} variant="secondary" className="bg-muted text-muted-foreground font-normal">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-center pt-8">
                <Button variant="outline">Load More Results</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
