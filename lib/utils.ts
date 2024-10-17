import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformUrlPath = (url: string) => {
  const getUrl = new URL(url);
  const getId = new URLSearchParams(getUrl.search);
  const id = getId?.get("id");
  if (id) return `https://drive.google.com/uc?export=view&id=${id}`;
  return "/logos/ssg-logo-square.png";
};
