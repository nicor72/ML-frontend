import styled from 'styled-components'

export const ItemDescriptionStyle = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-start;
  padding: 18px;

  .item-description-picture {
    background: ${props => `url(${props.backgroundUrl})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    /* width: 50%; */
    height: 600px;
  }

  .item-description {
    width: 50vw;
    color: #565770;
    margin-top: 48px;
  }

  .item-description-buy-section {
    padding: 0 16px;
  }

  .item-description-title {
    margin-top: 4px;
  }

  .item-description-price {
    font-size: 42px;
    margin-top: 0;
  }

  .sold-quantity {
    margin-bottom: 0;
    color: #565770;
  }

  span {
    color: #565770;
    font-size: 18px;
    position: relative;
    bottom: 18px;
  }

  @media (max-width: 768px) {
    display: block;

    .item-description-picture {
      height: 250px;
    }

    .item-description {
      width: 100%;
    }
  }
`