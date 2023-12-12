import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERCIARY';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }: { theme: any, type:  ButtonTypeStyleProps}) => 
        type === 'PRIMARY'
        ? theme.COLORS.BLUE_700
        : type === 'SECONDARY'
        ? theme.COLORS.ORANGE
        : theme.COLORS.RED_DARK
      }; 
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }: { theme: any }) =>css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`