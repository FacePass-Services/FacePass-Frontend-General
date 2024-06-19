import React from "react";

export default function ProjectDetails({ project }: any) {
  if (!project) {
    return (
      <section className="w-full h-full min-h-screen bg-red-500 justify-center items-center">
        <p>No project selected yet!</p>
      </section>
    );
  }

  return (
    <section
      id="ProjectDetails"
      className="VStack pl-2 pr-2 gap-5 items-center"
    >
      <img
        className="w-20 h-20"
        src="https://developer.apple.com/assets/elements/icons/storekit/storekit-128x128_2x.png"
        alt=""
      />
      <div className="gap-2 VStack items-center">
        <h2 className="text-xl font-medium">{project.title}</h2>
        <p className="font-normal opacity-75">{project.description}</p>
      </div>
    </section>
  );
}
