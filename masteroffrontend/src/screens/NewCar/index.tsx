import { useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Alert } from "react-native";



export function NewCar() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  
  async function handleNewCar() {
    try {
      if(group.trim().length === 0) {
        return Alert.alert('Ops, algo deu errado', 'Informe o nome da marca do carro')
      }
      await groupCreate(group)
      navigation.navigate('details', { group })
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Novo Anúncio', err.message)
      } else {
        Alert.alert('Novo Anúncio', 'Não foi possível criar um novo anúncio.')
        console.log(err)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title="Conecte-se com milhares de compradores interessados"
          subtitle="Crie seu anúncio agora e coloque seu carro na via rápida para um novo lar!"
        />
        <Input 
          placeholder="Marca do carro"
          onChangeText={setGroup}
          />
        {/* <Input placeholder="Modelo do carro"/>
        <Input placeholder="Ano de fabricação"/>
        <Input placeholder="Valor"/>
        <Input placeholder="Cidade"/> */}
        <Button title="Criar" type="SECONDARY" style={{ marginTop: 20}} onPress={handleNewCar}       
        />
      </Content>
    </Container>
  )
}