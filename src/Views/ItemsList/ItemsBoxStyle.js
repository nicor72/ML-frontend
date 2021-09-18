import styled from 'styled-components'

export const ItemsBoxStyle = styled.div`
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
`