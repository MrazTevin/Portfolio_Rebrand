import Image from "next/image";
import Link from "next/link"
import {Button} from "../components/ui/button"
import {Card, CardContent} from "../components/ui/card"
import { ExternalLink, Mail } from "lucide-react";
import {Badge} from "../components/ui/badge";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "../components/ui/tabs"
// import { TabsContent } from "@radix-ui/react-tabs";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b-bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex-items-center justify-center
            text-primary-foreground font-bold">
              TM
            </div>
            <span className="font-medium hidden sm:inline-block">millatevin.io</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
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
              </svg>
          </nav>
        </div>
      </header>
      <main className="container py-10 md:py-16">
        <section className="grid gap-8 ls:grid-cols-[lfr_400px] lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-full border p-1 px-3">
                <div className="flex items-center text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  <span>Available for work</span>
                </div>
              </div> 
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I&apos;m <span className="text-primary">Tevin Milla</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl">
                {/* I&apos;m a <span className="font-semibold">Backend Developer</span> at {" "} */}
                I&apos;m a <span className="font-semibold">Backend Developer</span> , {" "}
                <span className="text-primary font-semibold">currently upskilling</span>
              </h2>
              <p className="text-muted-foreground max-w-[600px]">
                Specializing in building robust, scalable backend systems with Java,
                Python, and Go. I focus on API 
                design, database optimization, cloud infrastructure and data engineering.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap3">
              <Button className="gap-2" asChild>
                <Link href="#contact">
                  Book a call
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <Link href="https://github.com/MrazTevin" target="_blank" rel="noopener noreferrer">
                  View Github
                </Link>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Feel free to explore my work and reach out - I&apos;d love to connect!
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full 
            border-background bg-background shadow-xl">
              <Image src="/assets/mil_image.svg?height=300&width=300" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </section>
        <section className="mt-16 md:mt-24">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="experience">My Experience</TabsTrigger>
              <TabsTrigger value="projects">Recent Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="space-y-6">
              <div className="space-y-8">
                {/* <div className="flex-gap-4">
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
                    <p className="text-sm text-muted-foreground">March 2024 - June 2024 </p>
                    <p className="mt-2">
                      Implemented system features in Java EE, aligning development with user and business requirements.
                      Identified and resolved issues during User Acceptance Testing.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">JavaEE</Badge>
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">MariaDB</Badge>
                      <Badge variant="secondary">Payara Server</Badge>
                    </div>
                  </div>
                </div> */}
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
                    <h3 className="font-semibold">Mobile Developer at Hng Internship</h3>
                    <p className="text-sm text-muted-foreground">September 2023 - October 2023</p>
                    <p className="mt-2">
                      Collaborated in a team of 3 members to build Android and Ios applications. 
                      Engaed in code reviews to identify and resolve software defects.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary">Flutter & Dart</Badge>
                      <Badge variant="secondary">Android</Badge>
                      <Badge variant="secondary">Ios</Badge>
                    </div>
                   </div>
                </div>  
              </div>
            </TabsContent>
            <TabsContent value="projects" className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src="/placeholder.svg?height=200&width=400" alt="Project1" fill
                    className="object-cover"/>
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
                    <Image src="/placeholder.svg?height=200&width=400" alt="Project2" fill
                    className="object-cover"/>
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
      </main>
    </div>
  );
}
