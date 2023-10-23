import { InformationData, LinksData } from "./data";

import { Container, InformationContainer, InformationItem, LinksContainer } from "./styles";

export default function Footer() {
  return (
    <Container>
      <InformationContainer>
        <h3>Igreja Batista Prudentina</h3>
        {InformationData.map((item, id) => {
          return (
            <InformationItem key={id}>
              {item.icon}
              <a href={item.href}>{item.text}</a>
            </InformationItem>
          );
        })}
      </InformationContainer>
      <LinksContainer>
        {LinksData.map((item, id) => {
          return(
            <a key={id} href={item.href}>{item.text}</a>
          )
        })}
      </LinksContainer>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </Container>
  );
}
