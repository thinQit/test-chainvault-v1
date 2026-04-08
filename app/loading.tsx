export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background text-foreground">
      <div className="animate-pulse text-lg text-muted-foreground">Loading ChainVault…</div>
    </div>
  );
}
