import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;

  font-size: ${({ theme }: { theme: any }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }: { theme: any }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: { theme: any }) => theme.COLORS.WHITE};
`

export const Subtitle = styled.Text`
  text-align: center;
  padding-top: 10px;

  font-size: ${({ theme }: { theme: any }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }: { theme: any }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: { theme: any }) => theme.COLORS.GRAY_300};
`