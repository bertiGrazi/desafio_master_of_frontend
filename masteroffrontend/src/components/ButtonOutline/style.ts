import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  border: 1px solid ${({ theme, type }: { theme: any, type:  ButtonTypeStyleProps}) => 
        type === 'PRIMARY' ? theme.COLORS.BLUE_700 : theme.COLORS.ORANGE
      };

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }: { theme: any }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BLUE_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`