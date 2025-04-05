"use client"

import Image from "next/image";
import Link from "next/link"
// import {Github, Linkedin, Twitter, MapPin, } from "lucide-react"
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { ExternalLink, Mail, MapPin, CalendarArrowUp } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { ThemeToggle } from "./components/theme-toggle";
import { useTabContext } from " @/context/tabcontext";
import ToggleMenu from "./components/toggle-menu";
import "./globals.css"
import { useEffect } from "react";
import CalEmbed from "./components/cal-embed";
import BookingButton from "./components/booking-button";
// import { TabsContent } from "@radix-ui/react-tabs";
export default function Home() {
  const {activeTab, setActiveTab} = useTabContext();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b-bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center
            text-primary-foreground font-bold">
              TM
            </div>
            <span className="font-medium hidden sm:inline-block">millatevin.io</span>
          </Link>
          <nav className="fixed top-4 right-6 z-50 flex items-center gap-6 nest-hub-fix sm:right-8 md:right-10 lg:right-12 xl:right-16">
            <ThemeToggle />
            <ToggleMenu />

            {/* <nav className="fixed top-3 right-3 z-50 flex items-center gap-4 sm:right-4 lg:right-4 xl:right-13 xl:top-6"> */}


            {/* <Button variant="ghost" size="sm" asChild>
                <span className="sr-only">Toggle Menu</span>
            </Button>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg> */}
          </nav>
        </div>
      </header>
      <main className="container py-10 md:py-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16" id="home">
          {/* Left column - Hero content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-full border p-1 px-3">
                <div className="flex items-center text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  <span>Available for work</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center flex-wrap">
                Hi, I'm
                <div className="inline-block mx-2 relative h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-full border-background bg-background shadow-xl">
                  <Image
                    src="/assets/mil_image.svg?height=300&width=300"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-primary text-4xl">Tevin Milla</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl">
                I'm a <span className="font-semibold">Backend Developer</span>, {" "}
                <span className="text-primary font-semibold">currently upskilling</span>
              </h2>
              <p className="text-muted-foreground max-w-[600px]">
                Specializing in building robust, scalable backend systems with Java,
                Python, and Go. I focus on API
                design, database optimization, cloud infrastructure and data engineering.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* <Button className="gap-2" asChild>
                <Link href="#contact">
                  Book a call
                  <CalendarArrowUp className="h-4 w-4" />
                </Link>
              </Button> */}
              <CalEmbed />
              <BookingButton />
              <Button variant="outline" className="gap-2" asChild>
                <Link href="https://github.com/MrazTevin" target="_blank" rel="noopener noreferrer">
                  View Github
                </Link>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Feel free to explore my work and reach out - I'd love to connect!
            </div>
          </div>

          {/* Right column - Workflow section */}
          <div className="space-y-6 lg:pt-8">
            <h3 className="text-4xl font-semibold">My Workflow</h3>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
              {/* Architect */}
              <div className="space-y-3">
                <div className="relative h-20 w-20 mx-auto">
                  <div className="absolute inset-0 rounded-md border-2 border-primary"></div>
                  <div className="absolute inset-3 rounded-full bg-background border-2 border-primary"></div>
                  <div className="absolute inset-6 rounded-sm bg-primary"></div>
                </div>
                <h4 className="text-lg font-medium text-center">Architect</h4>
                <p className="text-sm text-muted-foreground text-center">
                  I design scalable systems with careful consideration of data flow and performance.
                </p>
              </div>

              {/* Build */}
              <div className="space-y-3">
                <div className="relative h-20 w-20 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-background/10"></div>
                  <div className="grid grid-cols-3 gap-1 absolute inset-2">
                    {[1, 0, 1, 0, 1, 0, 1, 0, 1].map((active, i) => (
                      <div key={i} className={`rounded-full ${active ? 'bg-primary' : 'bg-background border border-primary/30'}`}></div>
                    ))}
                  </div>
                </div>
                <h4 className="text-lg font-medium text-center">Build</h4>
                <p className="text-sm text-muted-foreground text-center">
                  I craft clean, tested code with documentation, ensuring reliability.
                </p>
              </div>

              {/* Deploy */}
              <div className="space-y-3">
                <div className="relative h-20 w-20 mx-auto">
                  <div className="absolute inset-0 rounded-full border-2 border-primary"></div>
                  <div className="absolute inset-3 rounded-full border-2 border-primary"></div>
                  <div className="absolute inset-6 rounded-full bg-primary"></div>
                </div>
                <h4 className="text-lg font-medium text-center">Deploy</h4>
                <p className="text-sm text-muted-foreground text-center">
                  I use CI/CD and cloud infrastructure for robust, scalable solutions.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-lg font-medium mb-3">How I Work</h3>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {["Discovery", "Planning", "Development", "Testing", "Deployment"].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-white dark:text-black font-medium text-sm">
                      {index + 1}
                    </div>
                    <span className="ml-1 text-sm whitespace-nowrap">{step}</span>
                    {index < 4 && <div className="h-0.5 w-6 bg-muted-foreground/30 ml-1"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16 md:mt-24">
          {/* <Tabs defaultValue="experience" className="w-full"> */}
          {/* <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full"> */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="experience">My Experience</TabsTrigger>
              <TabsTrigger value="projects">Recent Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="space-y-6" id="experiences">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center
                    justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                    </div>
                    <div className="h-full w-0.5 bg-border mt-2"></div>
                  </div>
                  <div className="space-y-1 pb-8">
                    <h3 className="font-semibold">Java Software Engineer at Zeraki</h3>
                    <p className="text-sm text-muted-foreground">March 2024 - June 2024</p>
                    <p className="mt-2">
                      Designed and implemented a URL shortening system.
                      Translated technical challenges into actionable plans for timely delivery.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">JavaEE</Badge>
                      <Badge variant="secondary">Maria DB</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center
                    justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                    </div>
                    <div className="h-full w-0.5 bg-border mt-2"></div>
                  </div>
                  <div className="space-y-1 pb-8">
                    <h3 className="font-semibold">Mobile Developer at Hng Internship</h3>
                    <p className="text-sm text-muted-foreground">September 2023 - October 2023</p>
                    <p className="mt-2">
                      Collaborated in a team of 3 members to build Android and Ios applications.
                      Engaged in code reviews to identify and resolve software defects.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">Flutter & Dart</Badge>
                      <Badge variant="secondary">Android</Badge>
                      <Badge variant="secondary">Ios</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center
                    justify-center text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Software Engineer Intern at Meliora Technologies</h3>
                    <p className="text-sm text-muted-foreground">September 2022 - December 2022</p>
                    <p className="mt-2">
                      Designed and implemented a URL shortening system.
                      Translated technical challenges into actionable plans for timely delivery.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">SpringBoot</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="projects" className="space-y-6" id="projects">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src="/assets/placeholder.svg?height=200&width=400" alt="Project1" fill
                      className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">User Authentication</h3>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href="https://github.com/MrazTevin/User-Authentication" target="_blank"
                            rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">View Objects</span>
                          </Link>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Securely manages user accounts with registraton, login and email verification.
                      </p>
                      <div className="flex flex-wrap gap-1 pt-2">
                        <Badge variant="outline" className="text-xs">Java Spring Boot</Badge>
                        <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                        <Badge variant="outline" className="text-xs">Docker</Badge>
                        <Badge variant="outline" className="text-xs">GraphQL</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src="/assets/placeholder.svg?height=200&width=400" alt="Project2" fill
                      className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Automated CI/CD Deployment Framework</h3>
                        <Button variant="ghost" size="icon" asChild>
                          <Link href="https://github.com/MrazTevin/Auto-Deploy-Superpowers" target="_blank"
                            rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">View Objects</span>
                          </Link>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Automates CI/CD pipelines for efficient cloud application deployment.
                      </p>
                      <div className="flex flex-wrap gap-1 pt-2">
                        <Badge variant="outline" className="text-xs">Circle CI</Badge>
                        <Badge variant="outline" className="text-xs">AWS</Badge>
                        <Badge variant="outline" className="text-xs">Cloud Formation</Badge>
                        <Badge variant="outline" className="text-xs">Ansible</Badge>
                        <Badge variant="outline" className="text-xs">Prometheus</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mt-16 md:mt-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Where I work</h3>
                </div>
                <div className="aspect-video relative rounded-lg overflow-hidden border">
                  <Image src="/assets/map.svg?height=300&width=600" alt="Map" fill className="object-cover" />
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-2
                  rounded-md font-medium">
                    Nairobi, KE
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="contact">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Get In Touch</h3>
                </div>
                <div className="space-y-4">
                  <p>I'm always open to discussing new projects, opportunities, or partnerships</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="gap-2" asChild>
                      <Link href="mailto:millatevin.io@gmail.com">
                        Email
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="gap-2" asChild>
                      <Link href="https://cal.com/milla-tevin/30min" target="_blank" rel="noopener noreferrer">
                        Schedule a Call
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/MrazTevin" target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-5 w-5" />
                        <span className="sr-only">Github</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://www.linkedin.com/in/tevin-milla-597307145" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin className="h-5 w-5" />
                        <span className="sr-only">Linkedin</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://x.com/millatevin" target="_blank" rel="noopener noreferrer">
                        <SiX className="h-5 w-5" />
                        <span className="sr-only">X</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4
        text-center sm:text-left">
          <div className="text-sm text-muted-foreground">
            @ {new Date().getFullYear()} Tevin Milla. All rights reserved.
          </div>
          <div className="flex gap4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
