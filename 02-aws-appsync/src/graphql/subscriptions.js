/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateManager = /* GraphQL */ `
  subscription OnCreateManager {
    onCreateManager {
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
export const onUpdateManager = /* GraphQL */ `
  subscription OnUpdateManager {
    onUpdateManager {
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
export const onDeleteManager = /* GraphQL */ `
  subscription OnDeleteManager {
    onDeleteManager {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
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
