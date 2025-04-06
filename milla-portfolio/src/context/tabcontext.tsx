"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

type TabContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
  setTargetScroll?: (value: string | null) => void;
  handleTabChange: (newTab: string, targetId: string) => void;

};

const TabContext = createContext<TabContextType | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState("experience"); // Default tab
  const [, setTargetScroll] = useState<string | null>(null);
  
  const handleTabChange = (newTab: string, targetId: string) => {
    setActiveTab(newTab);
    setTargetScroll(targetId);
    // Add any additional logic for handling tab change here
  };

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
}