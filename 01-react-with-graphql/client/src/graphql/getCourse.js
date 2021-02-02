import { gql } from '@apollo/client';

export const LOAD_COURSE = gql`
  query {
    courses {
      title
      author
      description
    }
  }
`;
