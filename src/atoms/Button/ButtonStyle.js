import styled from 'styled-components'

export const ButtonStyle = styled.button`
  width: 100%;
  padding: 0 16px;
  border-radius: 6px;
  border-color: transparent;
  font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 48px;
  cursor: pointer;
  color: ${props => props.variant === 'primary' ? '#fff' : '#3483fa'};
  background-color: ${props => props.variant === 'primary' ? '#3483fa' : '#DBE8FA'};
`