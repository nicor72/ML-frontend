import styled from 'styled-components'

export const ItemBoxStyle = styled.div`
  a {
    color: initial;
    text-decoration: none;
  }

  hr {
    color: #EBEBEB;
    border: #EBEBEB 0.1px solid;
    width: 95%;
  }

  .item-box {
    display: flex;
    padding: 4px;
    height: 200px;
    justify-content: space-between;
    align-items: center;
  }

  .item-box__main-details {
    display: flex  
  }

  .item-box__picture {
    background: ${props => `url(${props.backgroundUrl})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 190px;
    margin: 0 16px;
  }

  .item-title__new-span {
    height: 18px;
    width: 18px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
    margin: 0 8px;
  }

  .item-box__location {
    margin: 0 32px 80px;
    color: ${({ theme }) => theme.text.secondary.color};
  }

  @media (max-width: 425px) {
    font-size: small;

    .item-title__title {
      max-width: 200px;
    }

    .item-box__picture {
      width: 100px;
    }

    .item-box__location {
      display: none;
    }
  }
`