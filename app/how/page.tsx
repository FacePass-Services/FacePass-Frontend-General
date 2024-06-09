import React from "react";
import { Image, Link } from "@nextui-org/react";
import { GoChevronRight } from "react-icons/go";

export default function App() {
  const faceAuth = "images/faceAuth.jpg";
  return (
    <main className="flex min-h-screen flex-col justify-between lg:items-center w-10/12  lg:w-8/12 ">
      <section className="gap-5  VStack items-center w-full h-full mt-12">
        <p className="text-xl">Easy way to use</p>
        <p className=" text-3xl lg:text-5xl font-semibold ">Sign In with FacePass</p>
        <p className="opacity-70 text-center lg:text-left">
          A face authentication service simplifies user verification through
          seamless and secure facial recognition.
        </p>
        <div className="relative w-full h-fit  rounded-lg lg:rounded-3xl overflow-hidden">
          <Image
            className="w-full h-full object-contain"
            src={faceAuth}
            alt="FacePass"
          />
          <div className="absolute inset-0 flex text-white pt-2 pl-3 pr-3 lg:pt-7 lg:pl-7 lg:pr-7 z-10">
            <div className="w-6/12 h-full flex items-start">
              <p className="font-medium text-base lg:text-xl">Face Authentication</p>
            </div>
            <div className="w-6/12 h-full flex items-center justify-center text-center ">
              <p className="font-medium text-xl lg:text-4xl w-11/12">
                Create your own password, so it’s never lost.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-30 rounded-3xl z-0"></div>
        </div>

        <section className=" cursor-pointer">
          <Link
            href="/sign-up"
            className="lg:pl-16  items-center lg:pr-16 lg:pt-4 lg:pb-4 pt-2 pb-2 justify-center pl-4 pr-4 bg-black shadow-sm bg-opacity-100 rounded-full HStack gap-1 text-white hover:bg-opacity-75"
          >
            <p> Create now</p>
            <GoChevronRight className="text-white text-xl" />
          </Link>
        </section>
      </section>
    </main>
  );
}
