import { useState, useEffect } from 'react';
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
import { detailGetByGroupAndTeam } from '@storage/details/detailGetByGroupandTeam';
import { DetailStorageDTO } from '@storage/details/DetailStorageDTO';

type RouteParams = {
  group: string
}

export function Details() {
  const [newCarModel, setNewCarModel] = useState('')
  const [brand, setBrand] = useState('Marca')
  const [numbers, setNumbers] = useState<DetailStorageDTO[]>([])

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
      fetchCarsByBrand();
     } catch(error) {
      if (error instanceof AppError) {
        Alert.alert('Ops', error.message)
      } else {
        console.log(error)
        Alert.alert('Ops', 'Não foi possível adicionar')
      }
     }
  }

  useEffect(() => {
    console.log("useEffect executed")
    fetchCarsByBrand()
  }, [brand])
  async function fetchCarsByBrand() {
    try {
      const carByBrand = await detailGetByGroupAndTeam(group, brand)
      setNumbers(carByBrand)
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível obter os dados filtrados do modelo selecionado.')
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
      keyExtractor={(item) => item.carModel}
      renderItem={({ item }) => (
        <DetailsCard 
          name={item.carModel} 
          onPress={() =>{}}        
        />
      )}
      showsVerticalScrollIndicator={false}
    />
   
    
    </Container>
  )
}


