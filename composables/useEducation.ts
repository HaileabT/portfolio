type Education = {
  title: string;
  institute: string;
  description: string;
};
export const useEducation = () => {
  const education = useState<Education[]>("education", () => [
    {
      title: "Currently enrolled",
      institute: "Addis Ababa Science and Technology University",
      description: "A 4th year software engineering student.",
    },
    {
      title: "HighSchool Diploma",
      institute: "Random School",
      description: "Finished my high school years at Random School.",
    },
  ]);

  return {
    education,
  };
};
