import { useState } from 'react';
import { FlatList } from 'react-native'

import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form, HeaderList, Number } from "./style";


export function Details() {
  const [select, setSelect] = useState('Marca')
  const [numbers, setNumbers] = useState([])

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
   
    
    </Container>
  )
}