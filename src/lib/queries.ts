import { gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;

const GET_CHARACTER_BY_ID = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      gender
      status
      image
      created
      species
      origin {
        name
      }
      location {
        name
        type
      }
    }
  }
`;

export { GET_ALL_CHARACTERS, GET_CHARACTER_BY_ID };
