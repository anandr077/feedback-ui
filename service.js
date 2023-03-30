const baseUrl = "http://localhost:8080";
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNDEwOCIsInJvbGUiOiJTVFVERU5UIiwiZXhwIjoxNjc5OTU2MjMzLCJpYXQiOjE2Nzk5MjAyMzN9.DyXY110ISRUxM-qHRnNu2g1erdBbiazDabevhcy6dGU"
);

var raw = "";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
};

export const getTasks = async () => {
  return await fetch(baseUrl + "/tasks", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    //mode: "cors",
    // headers: {
    //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNDEwOCIsInJvbGUiOiJTVFVERU5UIiwiZXhwIjoxNjc5OTU2MjMzLCJpYXQiOjE2Nzk5MjAyMzN9.DyXY110ISRUxM-qHRnNu2g1erdBbiazDabevhcy6dGU"
    // },
    //credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const saveAssignment = async (data) => {
  return await fetch(baseUrl + "assignments/create", {
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