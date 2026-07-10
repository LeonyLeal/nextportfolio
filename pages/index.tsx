import type { GetServerSideProps } from "next";
import rodapeComandos from "../constants/commands";
import { getPublicLinks, type PublicLinks } from "../data/publicLinks";
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
  publicLinks: PublicLinks;
};

export default function Home({
  repos,
  profile,
  command,
  yearsExperience,
  forbiddenTopics,
  publicLinks,
}: HomeProps) {
  return (
    <>
      <AboutMe
        profile={profile}
        command={command}
        yearsExperience={yearsExperience}
      />
      <Socials publicLinks={publicLinks} />
      <Skills />
      <Projectxs
        repos={repos}
        forbiddenTopics={forbiddenTopics}
        publicLinks={publicLinks}
      />
      <Footer publicLinks={publicLinks} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const experienceStartDate =
    process.env.EXPERIENCE_START_DATE ?? "2022-11-01";

  const [githubData, command, yearsExperience] = await Promise.all([
    getGithubData(),
    getRandomCommand(rodapeComandos),
    getYearsExperience(experienceStartDate),
  ]);

  return {
    props: {
      yearsExperience,
      command,
      repos: githubData.repos,
      profile: githubData.profile,
      forbiddenTopics: githubData.forbiddenTopics,
      publicLinks: getPublicLinks(),
    },
  };
};
