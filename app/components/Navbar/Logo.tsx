"use client";

import { cn } from "@/lib/utils";
import { Lemon } from "next/font/google";

import Image from "next/image";
import { useRouter } from "next/navigation";

const montserrat = Lemon({
  subsets: ["latin"],
  weight: ["400"],
});
const Logo = () => {
  const router = useRouter();

  return (
    <h1
      onClick={() => router.push("/")}
      className={cn("font-bold text-2xl cursor-pointer", montserrat.className)}
    >
      Dream Trip
    </h1>
  );
};

export default Logo;
