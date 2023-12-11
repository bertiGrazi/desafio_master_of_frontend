import { useState } from 'react'
import { FlatList } from 'react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import * as S from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function Groups() {
  //'Fiat Argo', 'Volkswagen Gol', 'Hyundai HB20'
  const [groupsCar, setgroupsCar] = useState<string[]>(['Fiat Argo']);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleNewCar() {
    navigation.navigate('newCar');
  }

  return (
    <S.Container>
      <Header/>
      <Highlight 
        title='Encontre Seu Carro Ideal Agora!'
        subtitle='Explore. Escolha. Dirija. Seu Novo Carro Está a Apenas um Toque de Distância!'
      />
      
      <FlatList 
        data={groupsCar}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groupsCar.length === 0 && { flex: 1 }}
        ListEmptyComponent={ () => (
          <ListEmpty 
          message='Que tal anunciar um carro?'
        />
        )}
        />
        <Button 
          title='Anunciar Carro'
          type='PRIMARY'
          onPress={handleNewCar}
        />
    </S.Container>
  );
}

