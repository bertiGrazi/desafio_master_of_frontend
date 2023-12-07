import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form } from "./style";

export function Details() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight 
        title="Fiat Argo"
      />
    <Form>
      <Input 
        placeholder="Pesquisar"
        autoCorrect={false}
        />
        <ButtonIcon 
          icon="add" 
        />
    </Form>
    <Filter isActive={false} title={"Marca"} />
    </Container>
  )
}