import { 
  Wrapper, 
  Picture, 
  Button, 
  Title, 
  TextWrapper,
  Column,
  Label,
  Data,
  Image
} from './styles'

function Card(
  { 
    btnLabel, 
    title, 
    dateTitle,
    launchDate,
    mission,
    patch
  }
) {
  return (
    <Wrapper>
      <Picture>
        <Image src={patch} alt="Mission patch" />
      </Picture>
      {
        title && (
          <Title>{title}</Title>
        )
      }
      <TextWrapper>
        <Column>
          <Label>{ dateTitle }</Label>
          <Data>{ launchDate }</Data>
        </Column>
        <Column>
          <Label>mission</Label>
          <Data>{ mission }</Data>
        </Column>
      </TextWrapper>
      {
        btnLabel && (
          <Button>
            { btnLabel }
          </Button>
        )
      }
    </Wrapper>
  )
}

export default Card