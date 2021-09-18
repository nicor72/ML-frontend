import styled from 'styled-components'

export const BreadcrumbsStyle = styled.div`
  ul {
    margin: 0 15vw;
    list-style: none;
    display: flex;
    padding: 16px 0;
  }

  li {
    color: #565770;
    padding: 4px;
  }

  a {
    text-decoration: none;
  }

  .breadcrumbs-mobile {
      display: none;
    }

  @media (max-width: 768px) {
    ul {
      margin: 0 5vw;
    }
    
    .breadcrumbs-desktop {
      display: none;
    }

    .breadcrumbs-mobile {
      display: block;

      li {
        cursor: pointer;
      }
    }
  }
`