"use client";

import Header from "./header";
import Footer from "./footer";
import { useEffect } from 'react';

function disableInspect() {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // Disable developer tools keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Prevent F12
    if (e.key === 'F12') {
      e.preventDefault();
    }
    // Prevent Ctrl + Shift + I, J, C
    if (e.ctrlKey && e.shiftKey) {
      if (e.key === 'I' || e.key === 'J' || e.key === 'C') {
        e.preventDefault();
      }
    }
    // Prevent Ctrl + U
    if (e.ctrlKey && e.key === 'U') {
      e.preventDefault();
    }
    // Prevent Cmd + Option + I, J, C (Mac)
    if (e.metaKey && e.altKey) {
      if (e.key === 'I' || e.key === 'J' || e.key === 'C') {
        e.preventDefault();
      }
    }
  });

  // Optional: Check if developer tools are opened
  const checkDevTools = setInterval(() => {
    if (window.outerWidth !== window.innerWidth || window.outerHeight !== window.innerHeight) {
      clearInterval(checkDevTools);
      // Developer tools might be opened, you can handle this as needed
      console.log('Developer tools detected!');
    }
  }, 1000);
}

export default function Layout({ children }) {
  useEffect(() => {
    disableInspect();
    return () => {
      // Clean up event listeners
      document.removeEventListener('contextmenu', disableInspect);
      document.removeEventListener('keydown', disableInspect);
      clearInterval(checkDevTools);
    };
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}