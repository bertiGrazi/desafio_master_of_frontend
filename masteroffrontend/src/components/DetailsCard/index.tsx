import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Icon, BrandName } from './style'

type Props = {
  name: string;
  onPress: () => void;
}

export function DetailsCard({ name, onPress }: Props) {
  return (
    <Container>
      <Icon  
        name="branding-watermark"
      />
      <BrandName>
        {name}
      </BrandName>

      <ButtonIcon 
          icon='call'
          type='SECONDARY'
          onPress={onPress}
      />
    </Container>
  )
}