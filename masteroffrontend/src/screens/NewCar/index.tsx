import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewCar() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title="Conecte-se com milhares de compradores interessados"
          subtitle="Crie seu anúncio agora e coloque seu carro na via rápida para um novo lar!"
        />
        <Button title="Criar" type="SECONDARY"         
        />
      </Content>
    </Container>
  )
}