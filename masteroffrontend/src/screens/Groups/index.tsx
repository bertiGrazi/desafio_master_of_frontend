import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import * as S from './styles';

export function Groups() {
  return (
    <S.Container>
      <Header/>
      <Highlight 
        title='Encontre Seu Carro Ideal Agora!'
        subtitle='Explore. Escolha. Dirija. Seu Novo Carro Está a Apenas um Toque de Distância!'
      />
    </S.Container>
  );
}

