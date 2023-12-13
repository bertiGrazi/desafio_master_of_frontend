import { useState } from "react";
import { Alert } from "react-native";

import { Container, Content } from "./styles";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonOutline } from "@components/ButtonOutline";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  async function handleSignIn() {
    if (email && password) {
      navigation.navigate('groups');
    } else {
      Alert.alert('Ops!', 'Por favor, preencha o e-mail e a senha!');
    }
  }
  

  async function handleCreateAccount() {
    navigation.navigate('createAccount')
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
           secureTextEntry={true}
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
          onPress={handleCreateAccount}
        />  
      </Content>
    </Container>
  )
}