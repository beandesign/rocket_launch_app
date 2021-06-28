import { useHistory } from 'react-router-dom';
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
    btnTarget, 
    btnVideo,
    title, 
    dateTitle,
    launchDate,
    mission,
    patch
  }
) {
  const history = useHistory();

  const date = new Date(launchDate);

  const handleClick = () => {
    if (btnTarget && !btnVideo) { 
      history.push(btnTarget) 
      window.gtag('event', 'click', { 'event_category': 'engagement', 'event_label': 'see_past_launches'});
    }
    if (btnVideo && !btnTarget ) { window.open(btnVideo) }
  }

  return (
    <Wrapper>
      {
        patch && (
          <Picture>
            <Image src={patch} alt="Mission patch" />
          </Picture>
        )
      }
      {
        title && (
          <Title>{title}</Title>
        )
      }
      <TextWrapper>
        <Column>
          <Label>{ dateTitle }</Label>
          <Data>{date.toLocaleDateString('pt-BR')}</Data>
        </Column>
        <Column>
          <Label>mission</Label>
          <Data>{ mission }</Data>
        </Column>
      </TextWrapper>
      {
        btnLabel && (
          <Button id="past-launches" onClick={handleClick}>
            { btnLabel }
          </Button>
        )
      }
    </Wrapper>
  )
}

export default Card