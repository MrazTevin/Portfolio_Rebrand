"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useTabContext } from " @/context/tabcontext"
export default function ToggleMenu() {
    const { setActiveTab } = useTabContext();
    const {setTargetScroll}= useTabContext();
    const {handleTabChange} = useTabContext();
    const [isOpen, setIsOpen] = useState(false)

    // Close menu when pressing escape key
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false)
        }

        window.addEventListener("keydown", handleEsc)

        return () => {
            window.removeEventListener("keydown", handleEsc)
        }
    }, [])

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])
    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center lg:justify-end"
                    onClick={() => setIsOpen(false)}
                >
                    <nav
                        // className="w-full h-full sm:w-1/2 sm:h-auto sm:mt-16 sm:mt-50 lg:w-1/2 lg:h-auto lg:mt-16 lg:mt-50 lg:rounded-xl bg-background/90 p-8 flex flex-col justify-center"
                        // className="w-full h-full overflow-y-auto pt-16 pb-8 px-8 bg-background/90 flex flex-col 
                        // sm:w-1/2 sm:h-auto sm:mt-16 sm:pt-8
                        // lg:w-1/2 lg:rounded-xl"
                        className="w-full h-full flex flex-col bg-background/90
            sm:w-1/2 sm:h-auto sm:mt-16 sm:rounded-xl
            lg:w-1/2 lg:rounded-xl lg:mt-16 lg:mt-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex-1 flex flex-col justify-center p-8" >
                            {/* <ul className="space-y-6 text-center lg:text-left"> */}
                            <ul className="space-y-4 sm:space-y-6 text-center lg:text-left">
                                <li>
                                    <Link
                                        href="#home"
                                        className="text-4xl font-bold hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#experiences"
                                        className="text-4xl font-bold hover:text-primary transition-colors"
                                        // onClick={() => setIsOpen(false)}
                                        // onClick={() => {
                                        //     setActiveTab("experience");
                                        //     setIsOpen(false);
                                        //     setTimeout(() => {
                                        //         const element = document.getElementById("experiences");
                                        //         if (element) {
                                        //             element.scrollIntoView({behavior: "smooth"});
                                        //         }
                                        //     }, 0)
                                        // }}
                                        onClick={() => {
                                            handleTabChange("experience", "experiences");
                                            setIsOpen(false);
                                          }}
                                        // onClick={() => {
                                        //     setActiveTab("experience");
                                        //     if (setTargetScroll) {
                                        //         setTargetScroll("experiences");
                                        //     }
                                        //     setIsOpen(false);
                                        //   }}
                                    >
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#projects"
                                        className="text-4xl font-bold hover:text-primary transition-colors"
                                        // onClick={() => setIsOpen(false)}
                                        // onClick={() => {
                                        //     setActiveTab("projects");
                                        //     setIsOpen(false);
                                        //     setTimeout(() => {
                                        //         const element = document.getElementById("projects");
                                        //         if (element) {
                                        //             element.scrollIntoView({behavior: "smooth"});
                                        //         }
                                        //     }, 0)
                                        // }}
                                        // onClick={() => {
                                        //     setActiveTab("projects");
                                        //     if (setTargetScroll) {
                                        //         setTargetScroll("projects");
                                        //     }
                                        //     setIsOpen(false);
                                        //   }}
                                        onClick={() => {
                                            handleTabChange("projects", "projects");
                                            setIsOpen(false);
                                          }}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#contact"
                                        className="text-4xl font-bold hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}


// className="fixed z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md 
// top-3 right-16
// sm:top-3 sm:right-16
// md:top-3 md:right-16
// lg:top-3 lg:right-16
// xl:top-6 xl:right-20"

// className="p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center"
