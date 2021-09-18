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

  .item-main-details {
    display: flex  
  }

  .item-picture {
    background: ${props => `url(${props.backgroundUrl})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 190px;
    margin: 0 16px;
  }

  .item-new-span {
    height: 18px;
    width: 18px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
    margin: 0 8px;
  }

  .item-location {
    margin: 0 32px 80px;
    color: #565770;
  }

  @media (max-width: 425px) {
    font-size: small;

    .item-title-section {
      max-width: 200px;
    }

    .item-picture {
      width: 100px;
    }

    .item-location {
      display: none;
    }
  }
`