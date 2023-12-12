import { Container, Content } from "./styles";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonOutline } from "@components/ButtonOutline";

export function SignIn() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  async function handleSignIn() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      <Content>
        <Highlight 
          title="Acesse a sua conta"
        />
        <Input 
          placeholder="E-mail"
        />
        <Input
           placeholder="Senha"
        />
        <Button 
          title="Acessar"
          style={{ marginTop: 20}}
          onPress={handleSignIn}
        />

        <Highlight
          title="" 
          subtitle="Ainda não tem acesso?"
        />  
        <ButtonOutline 
          title="Criar conta"
          style={{ marginTop: -12}}
        />  
      </Content>
    </Container>
  )
}