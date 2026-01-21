import { Title } from "../../styles/GlobalStyles";
import { ProjectWrapper, ProjectContainer, Link, Grid } from "./style";
import Apps from "../../components/apps";

function Projectxs(props) {
  return (
    <ProjectWrapper id="Section-D">
      <Title id="Projects">Github</Title>
      <Grid>
        {props.repos?.filter(
            (item) =>
              !item.topics.some((topic) =>
                props.forbiddenTopics.includes(topic),
              ),
          ).map((repo) => (
            <ProjectContainer key={repo.id} id={repo.name}>
              <Apps title={repo.name} preview={props.preview}>
                <Link id={repo.name} target="_blank" href={repo.html_url}>
                  Ir para o repositorio
                </Link>
              </Apps>
            </ProjectContainer>
          ))}
      </Grid>
    </ProjectWrapper>
  );
}

export default Projectxs;
