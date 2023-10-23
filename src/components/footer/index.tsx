import { InformationData, LinksData } from "./data";

import { Container, InformationContainer, InformationItem, LinksContainer } from "./styles";

export default function Footer() {
  return (
    <Container>
      <InformationContainer>
        <h3>Igreja Batista Prudentina</h3>
        {InformationData.map((item) => {
          return (
            <InformationItem>
              {item.icon}
              <a href={item.href}>{item.text}</a>
            </InformationItem>
          );
        })}
      </InformationContainer>
      <LinksContainer>
        {LinksData.map((item) => {
          return(
            <a href={item.href}>{item.text}</a>
          )
        })}
      </LinksContainer>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </Container>
  );
}
