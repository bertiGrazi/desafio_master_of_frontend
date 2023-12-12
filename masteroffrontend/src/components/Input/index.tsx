import { useRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from 'styled-components/native';

import { Container } from "./style";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({...rest}: Props) {
  const inputRef = useRef<TextInput>(null);
  const { COLORS }  = useTheme()

  return (
    <Container 
    ref={inputRef}
    placeholderTextColor={COLORS.GRAY_300}
    {...rest}
    >

    </Container>
  )
}