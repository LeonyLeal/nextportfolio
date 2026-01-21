import rodapeComandos from "../constants/commands";
import Projectxs from "../sections/Projectx";
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills";
import Socials from "../sections/Social";
import { getGithubData } from "../service/github";
import { getRandomCommand, getYearsExperience } from "../service/fancy";


export default function Home({
  repos,
  profile,
  command,
  yearsExperience,
  forbiddenTopics,
}) {
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
    </>
  );
}

export async function getServerSideProps() {
   const [githubData, command, yearsExperience] = await Promise.all([
    getGithubData(),
    getRandomCommand(rodapeComandos),
    getYearsExperience('2022-11-01')
  ]);
  return {
    props: {
      yearsExperience,
      command,
      repos: githubData.repos,
      profile: githubData.profile,
      forbiddenTopics: githubData.forbiddenTopics
    },
  };
}

