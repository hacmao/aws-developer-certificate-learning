/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
          id
          courseId
          studentId
          createdAt
          updatedAt
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
          id
          courseId
          studentId
          createdAt
          updatedAt
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
          id
          courseId
          studentId
          createdAt
          updatedAt
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
export const createManager = /* GraphQL */ `
  mutation CreateManager(
    $input: CreateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    createManager(input: $input, condition: $condition) {
      id
      courseId
      studentId
      course {
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
          nextToken
        }
        title
        description
        createdAt
        updatedAt
      }
      student {
        id
        name
        age
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateManager = /* GraphQL */ `
  mutation UpdateManager(
    $input: UpdateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    updateManager(input: $input, condition: $condition) {
      id
      courseId
      studentId
      course {
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
          nextToken
        }
        title
        description
        createdAt
        updatedAt
      }
      student {
        id
        name
        age
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteManager = /* GraphQL */ `
  mutation DeleteManager(
    $input: DeleteManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    deleteManager(input: $input, condition: $condition) {
      id
      courseId
      studentId
      course {
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
          nextToken
        }
        title
        description
        createdAt
        updatedAt
      }
      student {
        id
        name
        age
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
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
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
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
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
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
