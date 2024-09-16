import { useEffect, useState } from "react";

export const useScrollThreshold = (threshold: number) => {
  const [hasReachedThreshold, setHasReachedThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasReachedThreshold(scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll); // Add event listener

    // Initial check to handle the case when the page is loaded at a scrolled position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up
    };
  }, [threshold]); // Dependency array includes threshold

  return { hasReachedThreshold };
};
