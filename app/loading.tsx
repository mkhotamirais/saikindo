import { Loader2 } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <Loader2 size={56} className="animate-spin text-primary" />
    </div>
  );
}
