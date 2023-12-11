import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Container, Logo, BackButton, BackIcon } from "./style";

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleGoBack() {
    navigation.navigate('groups')
  }
  
  return (
    <Container>
      {
        showBackButton && 
          <BackButton onPress={handleGoBack}>
            <BackIcon />
          </BackButton>
      }
      <Logo source={logoImg}/>
    </Container>
  )
}