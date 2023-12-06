import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }: { theme: any, type:  ButtonTypeStyleProps}) => type === 'PRIMARY' ? theme.COLORS.BLUE_700 : theme.COLORS.ORANGE };
  border-radius: 6px;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: any }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }: { theme: any }) => theme.COLORS.WHITE};
  font-family: ${({ theme }: { theme: any }) => theme.FONT_FAMILY.BOLD};
`