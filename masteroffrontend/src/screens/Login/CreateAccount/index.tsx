import { useState } from "react";
import { Alert } from "react-native";

import { Container, Content } from "./styles";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ButtonOutline } from "@components/ButtonOutline";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function CreateAccount() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handlePasswordMatch = () => {
    return password === confirmPassword;
  };

  function handleSignIn() {
    navigation.navigate('signIn')
  }

  async function handleGroup() {
    if (password && confirmPassword) {
      const passwordsMatch = handlePasswordMatch();
  
      if (passwordsMatch) {
        navigation.navigate('groups');
      } else {
        Alert.alert('Ops!', 'As senhas não correspondem!');
      }
    } else {
      Alert.alert('Ops!', 'Por favor, preencha todos os campos!');
    }
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
          keyboardType="email-address"
      />
      <Input 
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
      />
      <Input 
          placeholder="Confirme a Senha"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
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