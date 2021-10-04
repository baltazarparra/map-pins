import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>

    <S.Heading>Map Pins</S.Heading>

    <S.Body>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
      obcaecati necessitatibus odio mollitia quam officia asperiores accusantium
      accusamus dolor consectetur totam dolorum nostrum nisi quisquam possimus
      tenetur, eum ad maiores.
    </S.Body>
  </S.Content>
)

export default AboutTemplate
