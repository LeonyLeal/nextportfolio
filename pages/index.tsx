import type { GetServerSideProps } from "next";
import rodapeComandos from "../constants/commands";
import Projectxs from "../sections/Projectx";
import AboutMe from "../sections/AboutMe";
import Footer from "../sections/Footer";
import Skills from "../sections/Skills";
import Socials from "../sections/Social";
import { getGithubData, type GithubData } from "../service/github";
import { getRandomCommand, getYearsExperience } from "../service/fancy";

type HomeProps = GithubData & {
  command: string;
  yearsExperience: number;
};

export default function Home({
  repos,
  profile,
  command,
  yearsExperience,
  forbiddenTopics,
}: HomeProps) {
  return (
    <>
      <AboutMe
        profile={profile}
        command={command}
        yearsExperience={yearsExperience}
      />
      <Socials />
      <Skills />
      <Projectxs repos={repos} forbiddenTopics={forbiddenTopics} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const [githubData, command, yearsExperience] = await Promise.all([
    getGithubData(),
    getRandomCommand(rodapeComandos),
    getYearsExperience("2022-11-01"),
  ]);

  return {
    props: {
      yearsExperience,
      command,
      repos: githubData.repos,
      profile: githubData.profile,
      forbiddenTopics: githubData.forbiddenTopics,
    },
  };
};
