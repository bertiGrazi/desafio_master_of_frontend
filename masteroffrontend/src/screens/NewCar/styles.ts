import styled from "styled-components/native";
import { Jeep } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: any }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(Jeep).attrs(({ theme }: { theme: any }) => ({
  size: 56,
  color: theme.COLORS.BLUE_700,
}))`
  align-self: center;
`