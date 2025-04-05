"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { ReactNode } from "react"

import { cn } from " @/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

// Create TabContext
const TabContext = React.createContext<{
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setTargetScroll: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = React.useState("experience");
  const [targetScroll, setTargetScroll] = React.useState<string | null>(null);

  // Scroll handler
  // const scrollToSection = (id: string) => {
  //   requestAnimationFrame(() => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth", block: "start" });
  //       setTargetScroll(null);
  //     }
  //   });
  // };
  const handleTabChange = (newTab: string, targetId: string) => {
    setActiveTab(newTab);
    setTargetScroll(targetId);
  };

  React.useEffect(() => {
    if (targetScroll) {
      // Wait for the tab content to render
      const timeout = setTimeout(() => {
        const element = document.getElementById(targetScroll);
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        }
      }, 100); // Adjusted delay for rendering

      return () => clearTimeout(timeout);
    }
  }, [targetScroll, activeTab]);

  // React.useEffect(() => {
  //   if (targetScroll) {
  //     scrollToSection(targetScroll);
  //   }
  // }, [targetScroll, activeTab]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, setTargetScroll }}>
      {children}
    </TabContext.Provider>
  );
}


export { Tabs, TabsList, TabsTrigger, TabsContent, TabProvider }

