"use client";
import React from "react";

import SupportContact from "@/components/SupportContact";
export default function App() {
  return (
    <main className="flex min-h-screen flex-col j lg:items-center w-10/12 md:w-8/12 ">
      <section className="gap-5  VStack text-left w-full h-full mt-10">
        <p className="text-3xl font-medium ">FacePass Support</p>
        <p className="opacity-70 md:w-3/4">
          At FacePass, we're all about making your journey with us as
          comfortable as possible. Your security is our top priority, and we're
          here to ensure your experience with FacePass.
        </p>

        <div className="mt-5"></div>

        <SupportContact />
      </section>
    </main>
  );
}
