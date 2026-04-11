// src/pages/404.tsx
import { useEffect } from "react";
import Link from "next/link";
import React from "react";
function Custom404() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        window.location.pathname
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dashboard-bg">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-muted-foreground">Oops! Page not found</p>
        <Link href="/" className="text-primary hover:underline cursor-pointer">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default Custom404;