import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`

export const Logo = styled.Image`
 width: 46px;
 height: 46px;
`
export const BackButton = styled.TouchableOpacity`
  flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }: { theme: any }) => ({
  size: 30,
  color: theme.COLORS.WHITE,
}))`
`
