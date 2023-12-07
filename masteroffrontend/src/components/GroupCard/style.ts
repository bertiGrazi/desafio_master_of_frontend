import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Jeep } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }: { theme: any }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  

  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  ${({ theme }: { theme: any }) =>css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`

export const Icon = styled(Jeep).attrs(({ theme }: { theme: any }) => ({
  size: 32,
  color: theme.COLORS.BLUE_700,
}))`
  margin-right: 20px;
`;