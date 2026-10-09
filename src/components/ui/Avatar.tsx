import { cn } from "@/lib/utils";

const PALETTE = [
  "bg-indigo-100 text-indigo-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-sky-100 text-sky-700",
  "bg-violet-100 text-violet-700",
];

function colorForSeed(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash + seed.charCodeAt(i)) % PALETTE.length;
  }
  return PALETTE[hash];
}

function initials(name: string): string {
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return `${first}${last}`.toUpperCase();
}

export function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm";
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-semibold",
        sizeClass,
        colorForSeed(name),
      )}
    >
      {initials(name)}
    </div>
  );
}

export function ProductThumb({ name, size = "md" }: { name: string; size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm";
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg font-semibold",
        sizeClass,
        colorForSeed(name),
      )}
    >
      {initials(name)}
    </div>
  );
}
