import { Container, Content } from "./styles";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ButtonOutline } from "@components/ButtonOutline";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function CreateAccount() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  async function handleSignIn() {
    navigation.navigate('signIn')
  }

  async function handleGroup() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      <Content>
      <Highlight 
          title="Crie sua conta"
      />
      <Input 
          placeholder="Nome"
      />
      <Input 
          placeholder="E-mail"
      />
      <Input 
          placeholder="Senha"
      />
      <Input 
          placeholder="Confirme a Senha"
      />
      <Button 
        title="Crie e acessar"
        style={{ marginTop: 20}}
        onPress={handleGroup}
      />
      <ButtonOutline 
          title="Voltar para o login"
          style={{ marginTop: 40}}
          onPress={handleSignIn}
        />  
      </Content>
    </Container>
  )
}