import styled from 'styled-components'

export const ItemDescriptionStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 18px;

  .item-description-picture {
    background: ${props => `url(${props.backgroundUrl}) no-repeat top center`};
    background-size: contain;
    /* width: 50%; */
    height: 600px;
  }

  .item-description {
    width: 50vw;
    color: #565770;
    margin-top: 48px;
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
`