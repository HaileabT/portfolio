export type Skill = {
  title: string;
  description?: string;
};

export const useSkills = () => {
  const skills = useState<Skill[]>("skills", () => [
    {
      title: "Nodejs",
      description: "Backend Developer with Nodejs",
    },
    {
      title: "Vue 3",
      description: "Backend Developer with Nodejs",
    },
    {
      title: "Express.js",
      description: "Backend Developer with Nodejs",
    },
    {
      title: "GraphQL",
      description: "Backend Developer with Nodejs",
    },
    {
      title: "PostgreSQL",
      description: "Backend Developer with Nodejs",
    },
    {
      title: "MongoDB",
      description: "Backend Developer with Nodejs",
    },
    {
      title: "Nuxt 3",
      description: "Backend Developer with Nodejs",
    },
    {
      title: "TypeORM",
      description: "Backend Developer with Nodejs",
    },
    {
      title: "JWT",
      description: "Backend Developer with Nodejs",
    },
  ]);

  return {
    skills,
  };
};
