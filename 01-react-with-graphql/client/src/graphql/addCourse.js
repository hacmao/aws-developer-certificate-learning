import { gql } from '@apollo/client';

export const ADD_COURSE = gql`
  mutation setCourse(
    $title : String, 
    $author: String,
    $description: String
  ){
    setCourse(new_course: {title: $title, author: $author, description: $description}) {
      title
    } 
  }
`;