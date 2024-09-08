import React, { useEffect, useState } from "react";
import { DataProvider } from "@plasmicapp/loader-nextjs";

export interface ScrollContextValue {
  isScrolled: boolean;
}

export const ScrollContext = React.createContext<ScrollContextValue>({
  isScrolled: false,
});

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  console.log('ScrollProvider is running');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsScrolled(true);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsScrolled(false);
        }
        
        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]); // Add lastScrollY as a dependency

  return (
    <DataProvider name={"isScrolled"} data={isScrolled}>
      {children}
    </DataProvider>
  );
}