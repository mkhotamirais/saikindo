import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Maintenence() {
  return (
    <div className="max-w-lg mx-auto rounded p-5 my-5 text-center shadow-lg">
      <div className="text-lg italic">This page is under maintenence</div>
      <Button asChild variant={"link"}>
        <Link href="/" className="text-saikindo-secondary-600">
          Back to homepage
        </Link>
      </Button>
    </div>
  );
}
