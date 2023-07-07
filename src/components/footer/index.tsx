import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </Container>
  );
}
