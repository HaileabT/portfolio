export type Skill = {
  title: string;
  description?: string;
  icon?: string;
};

export const useSkills = () => {
  const skills = useState<Record<string, Skill[]>>("skills", () => ({
    Languages: [
      {
        title: "JavaScript",
        description: "The first ever language I really took my time with.",
        icon: "fa-brands fa-javascript",
      },
      {
        title: "TypeScript",
        description: "Makes JavaScript a little fun.",
        icon: "fa-brands fa-typescript",
      },
      {
        title: "Go",
        description: "I'm only new to Go but it already feels like home.",
        icon: "fa-brands fa-go",
      },
    ],
    Runtimes: [
      {
        title: "Nodejs",
        description: "Currently my favourite JS runtime.",
        icon: "fa-brands fa-node-js",
      },
    ],
    APIs: [
      {
        title: "REST",
        description: "Representational State Transfer.",
        icon: "fa-solid fa-code",
      },
      {
        title: "WebSocket",
        description: "A protocol for real-time communication.",
        icon: "fa-solid fa-code",
      },
      {
        title: "GraphQL",
        description: "A query language for APIs.",
        icon: "fa-brands fa-graphql",
      },
    ],
    "Server Frameworks": [
      {
        title: "Express.js",
        description: "Working with express.js is REST...ful get it *cries*",
        icon: "fa-brands fa-node-js",
      },
      {
        title: "Socket.IO",
        description:
          "A library for real-time, bidirectional and event-based communication.",
        icon: "fa-solid fa-code",
      },
      {
        title: "Apollo Server",
        description: "Apollo Server is a GraphQL server framework.",
        icon: "fa-brands fa-graphql",
      },
      {
        title: "Gin",
        description: "",
        icon: "fa-brands fa-golang",
      },
    ],
    ORMs: [
      {
        title: "Prisma",
        icon: "fa-brands fa-prisma",
      },
      {
        title: "TypeORM",
        icon: "fa-brands fa-typeorm",
      },
      {
        title: "GORM",
        icon: "fa-brands fa-gorm",
      },
    ],
    Databases: [
      {
        title: "PostgreSQL",
        icon: "fa-solid fa-database",
      },
      {
        title: "MongoDB",
        icon: "fa-solid fa-database",
      },
      {
        title: "Redis",
        icon: "fa-solid fa-database",
      },
    ],
    Frontend: [
      {
        title: "Vue",
        description: "Vue is the best frontend library idc what you say.",
        icon: "fa-brands fa-vuejs",
      },
      {
        title: "React",
        description: "React is the best frontend library idc what you say.",
        icon: "fa-brands fa-react",
      },
    ],
    Fullstack: [
      {
        title: "Nuxt",
        description: "Nuxt is just fire.",
        icon: "fa-brands fa-vuejs",
      },
      {
        title: "Next.js",
        description: "Next.js is just fire.",
        icon: "fa-brands fa-react",
      },
    ],
    DevOps: [
      {
        title: "Github Actions",
        description: "Github Actions is a great tool for automating workflows.",
        icon: "fa-brands fa-github",
      },
      {
        title: "Docker",
        description:
          "Docker is a great tool for managing containers. I use it for my projects.",
        icon: "fa-brands fa-docker",
      },
    ],
  }));

  return {
    skills,
  };
};
