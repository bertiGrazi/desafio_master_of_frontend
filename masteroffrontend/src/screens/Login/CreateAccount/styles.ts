import { SafeAreaView } from 'react-native-safe-area-context'
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: any }) => theme.COLORS.GRAY_600};
  padding: 24px;
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
`