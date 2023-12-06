import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import * as S from './styles';

export function Groups() {
  const [groupsCar, setgroupsCar] = useState<string[]>(['Fiat Argo', 'Volkswagen Gol', 'Hyundai HB20']);

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
      />
    </S.Container>
  );
}

