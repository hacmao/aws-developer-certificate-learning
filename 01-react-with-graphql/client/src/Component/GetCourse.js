import { useQuery } from '@apollo/client';
import { LOAD_COURSE } from '../graphql/getCourse'
import Course from './Course';

const GetCourses = () => {
  const {loading, error, data} = useQuery(LOAD_COURSE);
 
  if (loading) return <p>Loading ...</p>;
  if (error) throw error;
  if (data)
    console.log(data.courses);
    
  return data.courses.map(({title, author, description}) => (
    <Course 
      title={title}
      author={author}
      description={description}
    />
  ));
}

export default GetCourses;