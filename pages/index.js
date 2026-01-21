import rodapeComandos from '../constants/commands'
import AboutMe from '../sections/AboutMe'
import Projectxs from '../sections/Projectx'
import Skills from '../sections/Skills'
import Socials from "../sections/Social"

export default function Home({repos, profile, comando, AnosExperiencia, ForbiddenTopics}) {

  return (
    <>
    <AboutMe owner={profile} comando={comando} AnosExperiencia={AnosExperiencia}/>
    <Socials/>
    <Skills/>
    <Projectxs repos={repos} ForbiddenTopics={ForbiddenTopics}/>
    </>
  )
}

function AnosDeExperiencia(desde) {
    const dataInicial = new Date(desde);
    const hoje = new Date();

    let anos = hoje.getFullYear() - dataInicial.getFullYear();

    const jaFezAniversario =
      hoje.getMonth() > dataInicial.getMonth() ||
      (hoje.getMonth() === dataInicial.getMonth() &&
        hoje.getDate() >= dataInicial.getDate());

    if (!jaFezAniversario) {
      anos--;
    }
    return anos;
  }

  function pegarComandoAleatorio(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
  }

export async function getStaticProps() {
  const token = process.env.GITHUB_TOKEN
  const ForbiddenTopics = process.env.FORBIDDEN_TOPICS ?? []
  const URL = `https://api.github.com/users/LeonyLeal/repos`;
  const profileInfo = `https://api.github.com/users/LeonyLeal`;
  const AnosExperiencia = await AnosDeExperiencia("2022-11-01");
  const comando =  await pegarComandoAleatorio(rodapeComandos);
  const res = await fetch(URL, { headers: {
    "Authorization": `token ${token}`,
    "Accept": "application/vnd.github.v3+json"
  }});
  const resProfile = await fetch(profileInfo, { headers: {
    "Authorization": `token ${token}`,
    "Accept": "application/vnd.github.v3+json"
  }});
  const repos = await res.json() ?? [];
  const profile = await resProfile.json() ?? [];
  console.log(repos);
  console.log("Anos ", AnosExperiencia)
  console.log("Comandos ", comando)
  console.log("Forbidden",ForbiddenTopics)
  return {
    props: {
      AnosExperiencia,
      comando,
      repos,
      profile,
      ForbiddenTopics
    }
  };
}
