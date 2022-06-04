import { gql } from "@apollo/client";

//------------------------ QUERY ------------------------

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        species
        type
        gender
        status
        origin {
          name
          dimension
        }
        image
        location {
          name
          dimension
        }

        created
      }
    }
  }
`;
