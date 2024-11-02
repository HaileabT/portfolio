type Social = {
  site: string;
  link: string;
  fontawesomeClass: string;
};
export const useSocials = () => {
  const socials = useState<Social[]>("socials", () => [
    {
      site: "Github",
      link: "https://www.github.com/haileabT",
      fontawesomeClass: "fa-brands fa-github",
    },
    {
      site: "LinkedIn",
      link: "https://www.linkedin.com/in/haileab-tesfaye-08414b199",
      fontawesomeClass: "fa-brands fa-linkedin",
    },
    {
      site: "Telegram",
      link: "https://t.me/vividream88",
      fontawesomeClass: "fa-brands fa-telegram",
    },
  ]);

  return {
    socials,
  };
};
