import React from "react";
import { Title } from "../../styles/GlobalStyles";
import { ProjectWrapper, ProjectContainer, Link, Grid } from "./style";
import Apps from "../../components/apps";

function Projectxs(props) {
  return (
    <ProjectWrapper id="Section-D">
      <Title id="Projects">Projetos</Title>
      <Grid>
        {props.repos.map((repo) => {
          return (
            <ProjectContainer key={repo.id} id={repo.name}>
              <Apps title={repo.name} preview={props.preview}>
                <Link id={repo.name} target="_blank" href={repo.html_url}>
                  Ir para o repositorio
                </Link>
              </Apps>
            </ProjectContainer>
          );
        })}
      </Grid>
    </ProjectWrapper>
  );
}

export default Projectxs;
