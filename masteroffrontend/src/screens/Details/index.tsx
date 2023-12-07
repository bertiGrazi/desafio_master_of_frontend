import { useState } from 'react';
import { FlatList } from 'react-native'

import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { DetailsCard } from "@components/DetailsCard";

import { Container, Form, HeaderList, Number } from "./style";


export function Details() {
  const [select, setSelect] = useState('Marca')
  const [numbers, setNumbers] = useState(['Fiat'])

  return (
    <Container>
      <Header showBackButton />
      <Highlight 
        title="Fiat Argo"
      />
    <Form>
      <Input 
        placeholder="Pesquisar"
        autoCorrect={false}
        />
        <ButtonIcon 
          icon="add" 
        />
    </Form>
    <HeaderList>
    <FlatList 
      data={['Marca', 'Modelo','Ano']}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
          <Filter 
            isActive={item === select} 
            title={item} 
            onPress={() => setSelect(item)}
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