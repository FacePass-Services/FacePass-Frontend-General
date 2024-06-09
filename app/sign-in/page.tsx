"use client";
import React, { useState } from "react";
import axios from "axios";
import useToken from "@/hooks/useToken";
import SignInForm from "@/components/SignInForm";

export default function App() {


  return (
    <section className="VStack lg:w-full h-full text-center items-center pt-12 md:pt-0 w-10/12 md:justify-center gap-5 min-h-screen">
      <p className="font-semibold text-3xl">Sign In to FacePass Account</p>
      <p>Manage your FacePass account</p> <SignInForm />
    </section>
  );
}
