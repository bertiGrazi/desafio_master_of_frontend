import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

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
        <Input placeholder="Marca do carro"/>
        {/* <Input placeholder="Modelo do carro"/>
        <Input placeholder="Ano de fabricação"/>
        <Input placeholder="Valor"/>
        <Input placeholder="Cidade"/> */}
        <Button title="Criar" type="SECONDARY" style={{ marginTop: 20}}        
        />
      </Content>
    </Container>
  )
}