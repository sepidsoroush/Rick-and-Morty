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

const GET_ALL_LOCATIONS = gql`
  query Location($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

const GET_LOCATION_BY_ID = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
    }
  }
`;

const GET_ALL_EPISODES = gql`
  query Episode($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const GET_EPISODE_BY_ID = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`;

export {
  GET_ALL_CHARACTERS,
  GET_CHARACTER_BY_ID,
  GET_ALL_LOCATIONS,
  GET_LOCATION_BY_ID,
  GET_ALL_EPISODES,
  GET_EPISODE_BY_ID,
};
