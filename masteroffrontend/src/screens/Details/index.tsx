import { useState } from 'react';
import { Alert, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native';

import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { DetailsCard } from "@components/DetailsCard";

import { Container, Form, HeaderList, Number } from "./style";
import { AppError } from '@utils/AppError';
import { detaildAddByGroup } from '@storage/details/detaildAddByGroup'
import { detailsGetByGroup } from '@storage/details/detailsGetByGroup';

type RouteParams = {
  group: string
}

export function Details() {
  const [newCarModel, setNewCarModel] = useState('')
  const [brand, setBrand] = useState('Marca')
  const [numbers, setNumbers] = useState(['Fiat'])

  const route = useRoute();

  const { group } = route.params as RouteParams;

  async function handleAddDetails() {
    if(newCarModel.trim().length === 0) {
      return Alert.alert('Ops!', 'Informe o Modelo do carro que queira adicionar')
     }

     const newCar = {
      carModel: newCarModel,
      brand
     }

     try {
      await detaildAddByGroup(newCar, group)
      const cars = await detailsGetByGroup(group)
      console.log(cars)
     } catch(error) {
      if (error instanceof AppError) {
        Alert.alert('Ops', error.message)
      } else {
        console.log(error)
        Alert.alert('Ops', 'Não foi possível adicionar')
      }
     }
  }
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title={group}
      />

    <Form>
      <Input 
        onChangeText={setNewCarModel}
        placeholder="Pesquisar"
        autoCorrect={false}
        />
        <ButtonIcon 
          icon="add" 
          onPress={handleAddDetails}
        />
    </Form>
    <HeaderList>
    <FlatList 
      data={['Marca', 'Modelo','Ano']}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
          <Filter 
            isActive={item === brand} 
            title={item} 
            onPress={() => setBrand(item)}
          />
      )}
      horizontal
      
    />
    <Number>
      {numbers.length}
    </Number>
    </HeaderList>

    <FlatList 
      data={numbers}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <DetailsCard 
          name={item} 
          onPress={() =>{}}        
        />
      )}
      showsVerticalScrollIndicator={false}
    />
   
    
    </Container>
  )
}


