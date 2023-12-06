import styled from 'styled-components/native';

type ThemeProp = { theme: any };

export const Container = styled.View`
    flex: 1;
    background-color: $({ theme }: ThemeProp) => theme.COLORS.GRAY_600;
    padding: 24px;
`;

export const Title = styled.Text`

`