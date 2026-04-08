import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="max-w-xl text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Button asChild className="bg-primary text-primary-foreground transition-all duration-200 hover:scale-105">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
