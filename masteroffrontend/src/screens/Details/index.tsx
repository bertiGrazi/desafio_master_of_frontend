import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight";
import { Container } from "./style";

export function Details() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight 
        title="Fiat Argo"
      />
    </Container>
  )
}