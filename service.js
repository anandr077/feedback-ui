const baseUrl = "http://localhost:8080";


export const getTasks = async () => {
  return await fetch(baseUrl + "/tasks", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getCourses = async () => {
  return await fetch(baseUrl + "/courses", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const createAssignment = async (assignment) => {
  return await fetch(baseUrl + "/assignments", {
    method: "POST",
    body: JSON.stringify(assignment),
    withCredentials: true,
    credentials:'include',
    headers: { 
      "Content-Type": "application/json",
     }
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


export const getAssigmentById = async (assignmentId) => {
  return await fetch(baseUrl + `assignments/id?assignmentId=${assignmentId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const saveComment = async (data) => {
  return await fetch(baseUrl + `comments/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.status === 204;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getAllComments = async (assignmentId) => {
  return await fetch(baseUrl + `comments/all?assignmentId=${assignmentId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
