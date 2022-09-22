import AboutMe from '../sections/AboutMe'
import Projectxs from '../sections/Projectx'
import Skills from '../sections/Skills'
import Socials from "../sections/Social"

export default function Home({repos}) {

  return (
    <>
    <AboutMe/>
    <Socials/>
    <Skills/>
    <Projectxs repos={repos}/>
    </>
  )
}

export async function getStaticProps() {
  const URL = `https://api.github.com/users/LeonyLeal/repos`;
  const res = await fetch(URL);
  const repos = await res.json();
  return {
    props: {
      repos,
    }, // will be passed to the page component as props
  };
}
