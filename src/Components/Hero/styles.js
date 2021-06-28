import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto; 
  column-gap: 20px;
  row-gap: 30px;
  border: 1px solid rgba(255, 255, 255, .17);
  border-radius: 4px;
  padding: 20px;
  background-color: #232239;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Image = styled.img`
`

export const TextWrapper = styled.div`
`

export const Title = styled.h2` 
  font-size: 1.4em;
  font-weight: 300;
  color: #fff
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