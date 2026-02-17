import { ArrowRight, CheckCircle, Code, Globe, Palette, Shield, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export function Welcome() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Built with performance in mind. Loads instantly and runs smoothly."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Scale",
      description: "Deploy anywhere with our global CDN and edge network."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer First",
      description: "Beautiful APIs, comprehensive docs, and great developer experience."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Beautiful UI",
      description: "Pre-built components that follow modern design principles."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Tools designed for teams to build together efficiently."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Lead at TechCorp",
      content: "This platform has reduced our development time by 60%. The components are incredibly well-designed and easy to use.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Startup Founder",
      content: "As a non-technical founder, this gave me the tools to build a professional product without a large team.",
      avatar: "MJ",
      rating: 5
    },
    {
      name: "Alex Rodriguez",
      role: "Full Stack Developer",
      content: "The documentation is fantastic and the community is very supportive. Highly recommended!",
      avatar: "AR",
      rating: 5
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50+", label: "Countries" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="flex-1">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm font-medium">
                <span className="mr-2">🚀</span>
                Version 2.0 is here! Explore new features
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Build Amazing
                <span className="text-primary block">Digital Experiences</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                The modern platform for developers to create, deploy, and scale beautiful web applications with ease.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link to="/get-started">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link to="/demo">
                  View Live Demo
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                14-day free trial
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border bg-card p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Live Preview
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-muted rounded-lg p-6 space-y-3">
                  <div className="h-3 bg-background rounded w-3/4"></div>
                  <div className="h-3 bg-background rounded w-1/2"></div>
                  <div className="h-3 bg-background rounded w-2/3"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/10 rounded p-3 text-center">
                    <div className="font-bold text-primary">React</div>
                  </div>
                  <div className="bg-primary/10 rounded p-3 text-center">
                    <div className="font-bold text-primary">TypeScript</div>
                  </div>
                  <div className="bg-primary/10 rounded p-3 text-center">
                    <div className="font-bold text-primary">Tailwind</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to help you build better products faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Loved by Developers
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of developers and teams who build better with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers already building amazing products with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base" asChild>
              <Link to="/get-started">
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base border-primary-foreground text-primary-foreground" asChild>
              <Link to="/contact">
                Schedule a Demo
              </Link>
            </Button>
          </div>
          <p className="text-sm opacity-80 mt-4">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  </div>
  );
}
