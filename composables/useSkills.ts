export type Skill = {
  title: string;
  description?: string;
};

export const useSkills = () => {
  const skills = useState<Skill[]>("skills", () => [
    {
      title: "Nodejs",
      description: "Currently my favourite JS runtime.",
    },
    {
      title: "Vue 3",
      description: "Vue is the best frontend library idc what you say.",
    },
    {
      title: "Express.js",
      description: "Working with express.js is REST...ful get it *cries*",
    },
    {
      title: "GraphQL",
      description: "Tried it out this year. I think I like it.",
    },
    {
      title: "PostgreSQL",
      description: "Postgres is great. A great database. I like it.",
    },
    {
      title: "MongoDB",
      description:
        "I kind of find myself prefering literally any SQL than this. I don't know why.",
    },
    {
      title: "Nuxt 3",
      description: "Nuxt is just fire.",
    },
    {
      title: "TypeORM",
      description: "TypeORM and typescript work so well together.",
    },
    {
      title: "JWT",
      description: "Minimal and sweet.",
    },
    {
      title: "Socket.io",
      description:
        "Went full manual on room management for a project once. I lost my sanity after that. A mini multiplayer game will be added to projects soon once I finish it.",
    },
    {
      title: "Telegraf",
      description:
        "Currently trying to make bots for clients. We'll see how it goes.",
    },
  ]);

  return {
    skills,
  };
};
