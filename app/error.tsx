"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <h2 className="text-3xl font-semibold">Something went wrong</h2>
      <p className="max-w-xl text-muted-foreground">
        We hit an unexpected issue. Please try again.
      </p>
      <Button
        onClick={() => reset()}
        className="bg-primary text-primary-foreground transition-all duration-200 hover:scale-105"
      >
        Try again
      </Button>
    </div>
  );
}
