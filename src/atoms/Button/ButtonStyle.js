import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const MODIFIER_CONFIG = {
  primary: ({ theme }) => `
    color: ${theme.button.primary.color};
    background-color: ${theme.button.primary.backgroundColor};
  `,
  secondary: ({ theme }) => `
    color: ${theme.button.secondary.color};
    background-color: ${theme.button.secondary.backgroundColor};
  `,
}

export const ButtonStyle = styled.button`
  width: 100%;
  padding: 0 16px;
  border-radius: 6px;
  border-color: transparent;
  font-size: 16px;
  font-weight: 600;
  line-height: 48px;
  cursor: pointer;

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`