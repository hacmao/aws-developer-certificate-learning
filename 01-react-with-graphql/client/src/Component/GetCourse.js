import { useQuery } from '@apollo/client';
import { LOAD_COURSE } from '../graphql/getCourse'
import Course from './Course';
import { useEffect, useState } from 'react';

const GetCourses = () => {
  const [course, setCourse] = useState([]);
  
  const {loading, error, data} = useQuery(LOAD_COURSE);
  
  if (loading) return <p>Loading ...</p>;
  if (error) throw error;
  if (data)
    console.log(data);

  return data.courses.map(({title, author, description}) => (
    <Course 
      title={title}
      author={author}
      description={description}
      key={title}
    />
  ));
}

export default GetCourses;