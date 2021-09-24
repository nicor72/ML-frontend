import styled from 'styled-components'

export const ItemDescriptionStyle = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-start;
  padding: 18px;

  .item-description__picture {
    background: ${props => `url(${props.backgroundUrl})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    /* width: 50%; */
    height: 600px;
  }

  .item-description__description {
    width: 50vw;
    color: ${({ theme }) => theme.text.secondary.color};
    margin-top: 48px;
  }

  .buy-section {
    padding: 0 16px;
  }

  .buy-section__title {
    margin-top: 4px;
  }

  .buy-section__price {
    font-size: 42px;
    margin-top: 0;
  }

  .buy-section__sold-quantity {
    margin-bottom: 0;
    color: ${({ theme }) => theme.text.secondary.color};
  }

  .buy-section__decimals {
    color: ${({ theme }) => theme.text.secondary.color};
    font-size: 18px;
    position: relative;
    bottom: 18px;
  }

  @media (max-width: 768px) {
    display: block;

    .item-description__picture {
      height: 250px;
    }

    .item-description__description {
      width: 100%;
    }
  }
`