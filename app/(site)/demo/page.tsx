import React from "react";
import { FlipWords } from "../components/ui/flip-words";


export default function page() {
  const words = ["Data Scientist", "Software Engineer", "Web Developer", "Consultant", "ML Enthusiast"];
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites 
      </div>
    </div>
  );
}

