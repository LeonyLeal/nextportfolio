export default function ProjectsGit({ repos }) {
  return (
    <>
      {repos.map(repo => {
        return(
            <div key={repo.name}>
                <h3>{repo.name}</h3>
                <p><strong>{repo.owner.login}</strong></p>
                <a href={repo.html_url} target="_blank">acessar este projeto</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>      
        )
      })}
    </>
  );
}

export async function getStaticProps(context) {
    const URL = `https://api.github.com/users/LeonyLeal/repos`
    const res = await fetch(URL)
    const repos = await res.json()
  return {
    props: {
        repos
    }, // will be passed to the page component as props
  };
}
