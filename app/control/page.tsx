"use client";
import React, { useState, useEffect } from "react";
import Toolbar from "@/components/control/ProjectLists";
import UserSetting from "@/components/settings/UserSetting";
import NotificationSetting from "@/components/settings/NotificationSetting";
import SoundSetting from "@/components/settings/SoundSetting";
import GeneralSetting from "@/components/settings/GeneralSetting";
import PrivacySetting from "@/components/settings/PrivacySetting";
import AccessibilitySetting from "@/components/settings/AccessibilitySetting";
import ControlSetting from "@/components/settings/ContolCenterSetting";
import ProjectDetails from "@/components/control/ProjectDetails";
import { Link } from "@nextui-org/react";
import { GoChevronLeft } from "react-icons/go";

export default function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setSelectedItem("");
  };

  const handleBackClick = () => {
    setSelectedProject(null);
    setSelectedItem("");
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setSelectedItem("");
      } else {
        setSelectedItem("user");
      }
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  if (isMobile === null) {
    return null;
  }

  return (
    <main className="xl:pl-10 bg-secondary dark:bg-secondary-dark xl:pr-10 VStack min-h-screen overflow-y-hidden w-full items-center">
      {selectedProject && isMobile ? (
        <div
          className="  w-full pl-7 pt-1  HStack items-center text-blue-500 gap-1 text-base font-normal cursor-pointer"
          onClick={handleBackClick}
        >
          <GoChevronLeft />
          <p> Control Center</p>
        </div>
      ) : (
        <div className="flex justify-between w-full pl-7 pt-1 items-center  gap-1 text-base font-normal cursor-pointer">
          {isMobile && (<>
          <Link href="/" className="flex text-blue-500  items-center gap-1 ">
            <GoChevronLeft />
            <p>Home</p>
          </Link>
          
            <div className="flex-grow dark:text-primary text-primary-dark font-medium text-xl text-center">
              Control Center
            </div>
            </>
          )}

          <div className="flex-grow"></div>
        </div>
      )}

      <div className="HStack justify-center w-full h-full pt-5 pb-5 pl-7 pr-7">
        <div
          className={`${
            isMobile && selectedProject
              ? "hidden"
              : "VStack w-full md:max-w-[300px]"
          }`}
        >
          <Toolbar
            selectedItem={selectedItem}
            handleItemClick={handleItemClick}
            handleProjectClick={handleProjectClick}
          />
        </div>

        <section
          className={`${
            isMobile && !selectedProject ? "hidden" : "VStack w-full pl-5"
          }`}
        >
          {!selectedProject ? (
            <p>No platform selected </p>
          ) : (
            <ProjectDetails project={selectedProject} />
          )}
        </section>
      </div>
    </main>
  );
}
