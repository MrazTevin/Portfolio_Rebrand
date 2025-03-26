import Image from "next/image";
import Link from "next/link"
import {Button} from "../components/ui/button"
import { Mail } from "lucide-react";

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
      </main>
    </div>
  );
}
