import styled from 'styled-components'

export const MainLayoutStyle = styled.div`
  padding-bottom: 40px;

  .content-container {
    border-radius: 4px;
    margin: 0 15vw;
  }

  @media (max-width: 768px) {
    .content-container {
      margin: 0 5vw;
    }
  }
`  