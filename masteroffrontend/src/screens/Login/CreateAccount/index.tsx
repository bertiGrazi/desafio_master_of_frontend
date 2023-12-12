import { Container, Content } from "./styles";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ButtonOutline } from "@components/ButtonOutline";

export function CreateAccount() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  async function handleSignIn() {
    navigation.navigate('signIn')
  }

  return (
    <Container>
      <Content>
      <ButtonOutline 
          title="Voltar para o login"
          onPress={handleSignIn}
        />  
      </Content>
    </Container>
  )
}