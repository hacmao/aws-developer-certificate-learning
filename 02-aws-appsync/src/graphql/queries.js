/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      teacherId
      teacher {
        id
        name
        age
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      students {
        items {
          student {
            id
            name
          }
        }
        nextToken
      }
      title
      description
      createdAt
      updatedAt
    }
  }
`;

export const getCourseStudent = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      students {
        items {
          student {
            id
            name
          }
        }
      }
    }
  }
`;

export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teacherId
        teacher {
          id
          name
          age
          createdAt
          updatedAt
        }
        name
        students {
          items {
            student {
              name
            }
          
        }
        }
        title
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      age
      courses {
        items {
          id
          courseId
          studentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
        courses {
          items {
            course {
              id
              name
            }
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      name
      age
      courses {
        items {
          id
          teacherId
          name
          title
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
