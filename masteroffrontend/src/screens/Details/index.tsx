import { useState, useEffect, useRef } from 'react';
import { Alert, FlatList, TextInput } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRoute, useNavigation, ParamListBase } from '@react-navigation/native';

import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight";
import { Button } from '@components/Button';
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { DetailsCard } from "@components/DetailsCard";
import { Loading } from '@components/Loading';

import { Container, Form, HeaderList, Number } from "./style";
import { AppError } from '@utils/AppError';

import { detaildAddByGroup } from '@storage/details/detaildAddByGroup'
import { detailGetByGroupAndTeam } from '@storage/details/detailGetByGroupAndTeam';
import { DetailStorageDTO } from '@storage/details/DetailStorageDTO';
import { detailsRemoveByGroup } from '@storage/details/detailsRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';



type RouteParams = {
  group: string
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true)
  const [newCarModel, setNewCarModel] = useState('')
  const [brand, setBrand] = useState('Marca')
  const [numbers, setNumbers] = useState<DetailStorageDTO[]>([])

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
 
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newCarNameInputRef = useRef<TextInput>(null)

  async function handleAddDetails() {
    if(newCarModel.trim().length === 0) {
      return Alert.alert('Ops!', 'Insira a informação.')
     }

     const newCar = {
      carModel: newCarModel,
      brand
     }

     try {
      await detaildAddByGroup(newCar, group)

      newCarNameInputRef.current?.blur();

      setNewCarModel('')
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

  async function fetchCarsByBrand() {
    try {
      setIsLoading(true)
      const carByBrand = await detailGetByGroupAndTeam(group, brand)
      setNumbers(carByBrand)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível obter os dados filtrados do modelo selecionado.')
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
      
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível remover o modelo selecionado.')
    }
  }

  async function handleCarNameRemove(carName: string) {
    try {
      await detailsRemoveByGroup(carName, group);
      fetchCarsByBrand()
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível remover o carro selecionado.')
    }
  }

  async function handleGroupRemove() {
    Alert.alert(
      'Remover',
      'Deseja remover o carro selecionado?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => {
          groupRemove()
        }},
      ]

    )
  }

  function handleCallTheSeller() {
    console.log('handleCallTheSeller')
  }

  useEffect(() => {
    console.log("useEffect executed")
    fetchCarsByBrand()
  }, [brand])

  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title={group}
      />

    <Form>
      {numbers.length === 0 && (
        <>
          <Input 
            inputRef={newCarNameInputRef}
            onChangeText={setNewCarModel}
            value={newCarModel}
            placeholder={`Insira ${brand}`}
            autoCorrect={false}
            onSubmitEditing={handleAddDetails}
            returnKeyType="done"
          />
          <ButtonIcon 
            icon="add" 
            onPress={handleAddDetails}
          />
        </>
      )}
    </Form>

    <HeaderList>
    <FlatList 
      data={['Marca','Ano','Cidade','Valor']}
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
    </HeaderList>
        {
          isLoading ? <Loading /> : 
          <FlatList 
          data={numbers}
          keyExtractor={(item) => item.carModel}
          renderItem={({ item }) => (
            <DetailsCard 
              name={item.carModel} 
              onPress={() => handleCarNameRemove(item.carModel)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        }

      <Button
        title={numbers.length === 0 ? 'Deletar Carro' : 'Mande uma mensagem'}
        type={numbers.length === 0 ? 'TERCIARY' : 'SECONDARY'}
        onPress={numbers.length === 0 ? handleGroupRemove : handleCallTheSeller}
      />
    </Container>
  )
}


