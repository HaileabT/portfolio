type Tech = {
  title: string;
  description: string;
};
type Project = {
  title: string;
  tech: Tech[];
  description: string;
  picture: string;
};
export const useProject = () => {
  const projects = useState<Project[]>("projects", () => [
    {
      title: "MMCY Tech Talent Spot Web Portal",
      tech: [
        {
          title: "Nuxt 3",
          description: "Frontend framework built on vue",
        },
        {
          title: "GraphQL",
          description: "API prefered for optimized fetching.",
        },
      ],
      description:
        "Designed, built and deployed MMCY Tech talent spot web portal.",
      picture: "somePicture",
    },
    {
      title: "MMCY Tech Talent Spot Web Portal",
      tech: [
        {
          title: "Nuxt 3",
          description: "Frontend framework built on vue",
        },
        {
          title: "GraphQL",
          description: "API prefered for optimized fetching.",
        },
      ],
      description:
        "Designed, built and deployed MMCY Tech talent spot web portal.",
      picture: "somePicture",
    },
    {
      title: "MMCY Tech Talent Spot Web Portal",
      tech: [
        {
          title: "Nuxt 3",
          description: "Frontend framework built on vue",
        },
        {
          title: "Vue 3",
          description: "Frontend framework built on vue",
        },
        {
          title: "Apollo Server",
          description: "API prefered for optimized fetching.",
        },
        {
          title: "GraphQL",
          description: "API prefered for optimized fetching.",
        },
        {
          title: "Node.js",
          description: "API prefered for optimized fetching.",
        },
        {
          title: "PostgreSQL",
          description: "API prefered for optimized fetching.",
        },
        {
          title: "TypeORM",
          description: "API prefered for optimized fetching.",
        },
      ],
      description:
        "Designed, built and deployed MMCY Tech talent spot web portal.",
      picture: "somePicture",
    },
  ]);

  return {
    projects,
  };
};
