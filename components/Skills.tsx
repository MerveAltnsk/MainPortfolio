"use client";
import { IconCloud } from "@/components/ui/IconCloud";
import React from "react";

const slugs = [
  "javascript",
  "python",
  "java",
  "c",
  "cplusplus",
  "csharp",
  "mysql",
  "react",
  "tailwindcss",
  "bootstrap",
  "reactnative",
  "html5",
  "css3",
  "git",
  "github",
  "pandas",
  "numpy",
  "matplotlib",
];


function Skills() {
  return (
    <div className="my-10 py-10">
      <h1 className="heading">
        Skills &amp;{" "}
        <span className="text-purple">Technologies</span>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
