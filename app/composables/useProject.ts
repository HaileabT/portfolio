type Tech = {
  title: string;
  description: string;
};

type ProjectPartner = {
  name: string;
  link: string;
};
type Project = {
  title: string;
  link?: string;
  tech: Tech[];
  partners?: ProjectPartner[];
  description: string;
  picture: string;
};
export const useProject = () => {
  const projects = useState<Project[]>("projects", () => [
    {
      title: "MMCY Tech Talent Spot Web Portal",
      link: "https://mmcy-talent-spot-portal-client.vercel.app",
      partners: [
        {
          name: "Nehemiah Aklil",
          link: "https://et.linkedin.com/in/nehemiahaklil",
        },
      ],
      tech: [
        {
          title: "Nuxt 3",
          description: "Frontend framework built on vue",
        },
        {
          title: "Vue 3",
          description: "Clean and fast javascript frontend library",
        },
        {
          title: "Tailwindcss",
          description: "Class based css library",
        },
        {
          title: "Shadcn-vue",
          description: "Shadcn UI library for vue",
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
      picture: "/mmcy_talents.png",
    },
    {
      title: "Optimized simple ball bouncing simulation",
      link: "https://haileabt.github.io/bol_go_bounce",
      tech: [
        {
          title: "HTML Canvas",
          description: "HTML Canvas API for rendering 2D drawing.",
        },
        {
          title: "Typescript",
          description: "Typed language built around javascript",
        },
      ],
      description:
        "This was a fun little project I tried when trying to learn how to optimized the Canvas API.",
      picture: "/bol_bounce.png",
    },
  ]);

  return {
    projects,
  };
};
