import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, .17);
  border-radius: 4px;
  padding: 20px;
`

export const Picture = styled.picture` 
  width: 100%;
  text-align: center; 
  display: block;
`

export const Image = styled.img`
  max-width: 120px
`

export const Title = styled.h2` 
  font-size: 1.4em;
  font-weight: 300;
  color: #fff
`

export const TextWrapper = styled.div` 
  display: flex;
`

export const Column = styled.div` 
  width: 50%
`

export const Label = styled.span` 
  font-weight: 300;
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.32);
`

export const Data = styled.p` 
  font-weight: 600;
  font-size: 1.8em;
  color: #fff;
  margin: 0;
`

export const Button = styled.button` 
  width: 100%;
  background-color: #149E96;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding-top: 5px;
  padding-bottom: 5px; 
  margin-top: 10px;
`