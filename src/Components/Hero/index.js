import { 
  Wrapper, 
  Column, 
  Image, 
  Title,
  Label,
  Data,
  TextWrapper
} from "./styles";

function Hero(
  { 
    title, 
    dateTitle,
    launchDate,
    mission,
    patch
  }
) {
  const date = new Date(launchDate);
  return (
    <Wrapper>
      <Column>
        {
          patch && (
            <Image src={patch} alt="Mission patch" />
          )
        }
      </Column>
      <Column>
        <Title>{title}</Title>
        <TextWrapper>
          <Label>{dateTitle}</Label>
          <Data>{date.toLocaleDateString('pt-BR')}</Data>
        </TextWrapper>
        <TextWrapper>
          <Label>mission</Label>
          <Data>{mission}</Data>
        </TextWrapper>
      </Column>
    </Wrapper>
  )
}

export default Hero