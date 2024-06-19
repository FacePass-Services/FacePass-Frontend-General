import React, { useState, useEffect, useCallback } from "react";
import { GoChevronRight } from "react-icons/go";
import useToken from "@/hooks/useToken";

interface Project {
  id: number;
  title: string;
  description: string;
  // Add more fields as per your actual data structure
}

export default function ProjectLists({
  selectedItem,
  handleItemClick,
  handleProjectClick,
}: any) {
  const { userId } = useToken();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/user/get_project_list_by_user_id?user_id=${userId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      setProjects(data.projects);
      setLoading(false);
    } catch (error) {
      setError("Error fetching projects");
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : projects.length === 0 ? (
        <p>There are no connected platforms.</p>
      ) : (
        <section id="Toolbar" className="VStack justify-between ">
          <div className="VStack w-full">
            <section className="VStack gap-7 text-sm">
              <ul className="VStack  bg-primary divide-y dark:divide-gray-800  dark:bg-primary-dark rounded-lg">
                {projects.map((project) => (
                  <li
                    key={project.id}
                    className={`HStack w-full justify-between cursor-pointer ${
                      selectedItem === project.id ? "bg-opacity-45 font-semibold shadow-sm" : ""
                    }`}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="HStack justify-between w-full items-center gap-3 hover:bg-primary p-5 hover:dark:bg-primary-dark hover:rounded-lg">
                      <div className="HStack gap-3">
                        <img
                          className="w-10 h-10"
                          src="https://developer.apple.com/assets/elements/icons/storekit/storekit-128x128_2x.png"
                          alt=""
                        />
                        <div className="VStack">
                          <p className="font-medium">{project.title}</p>
                          <p className="text-sm opacity-75">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      <GoChevronRight className="text-3xl" />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      )}
    </>
  );
}
