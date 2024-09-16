import { useEffect, useState } from "react";

export const useMaxScrollReached = () => {
  const [maxScrollReached, setMaxScrollReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

      // Check if the scroll has reached the max scroll value
      setMaxScrollReached(scrollTop >= maxScrollTop);
    };

    window.addEventListener("scroll", handleScroll); // Add event listener

    // Initial check to handle the case when the page is loaded at a scrolled position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up
    };
  }, []);

  return { maxScrollReached };
};
