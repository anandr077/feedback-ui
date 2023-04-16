const baseUrl = "http://localhost:8080";

export const login = async () => {
  const token = getCookie("auth.access_token");
  if (!token) {
    const user = getCookie("userId");
    return await fetch(baseUrl + "/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: user,
        password: "password",
      }),
      withCredentials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
};
export const getUserName = () => {
  return getCookie("user.name");
};

export const getUserRole = () => {
  return getCookie("role");
};

export const getCookie = (name) => {
  console.log(document.cookie);
  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`));
  console.log(cookieValue);
  if (cookieValue) {
    return cookieValue.split("=")[1];
  } else {
    return null;
  }
};

export const getTasks = async () => {
  return await fetch(baseUrl + "/tasks", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};
export const getModelResponses = async () => {
  return await fetch(baseUrl + "/feedbacks/modelResponses", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};
export const getCompletedTasks = async () => {
  return await fetch(baseUrl + "/completed-tasks", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};
export const getNotifications = async () => {
  return await fetch(baseUrl + "/notifications", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};
export const getAssignmentById = async (assignmentId) => {
  return await fetch(baseUrl + "/assignments/" + assignmentId, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const getAssignments = async () => {
  return await fetch(baseUrl + "/assignments", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};
export const startSubmission = async (assignmentDetails) => {
  return await fetch(baseUrl + "/submissions", {
    method: "POST",
    body: JSON.stringify(assignmentDetails),
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const getSubmissionById = async (submissionId) => {
  return await fetch(baseUrl + "/submissions/" + submissionId, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const addFeedback = async (submissionId, comment) => {
  return await fetch(baseUrl + "/submissions/" + submissionId + "/feedbacks", {
    method: "POST",
    body: JSON.stringify(comment),
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const deleteFeedback = async (submissionId, commentId) => {
  return await fetch(baseUrl + "/submissions/" + submissionId + "/feedbacks/" + commentId, {
    method: "DELETE",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};
export const getCommentsForSubmission = async (submissionId) => {
  return await fetch(baseUrl + "/submissions/" + submissionId + "/comments", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const getModelResponsesForClass = async (classId) => {
  return await fetch(baseUrl + "/classes/" + classId + "/modelResponses", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const getStudentsForClass = async (classId) => {
  return await fetch(baseUrl + "/classes/" + classId + "/students", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const getClasses = async () => {
  return await fetch(baseUrl + "/classes", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const createAssignment = async (assignment) => {
  return await fetch(baseUrl + "/assignments", {
    method: "POST",
    body: JSON.stringify(assignment),
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const saveAnswer = async (submissionId, serialNumber, answer) => {
  const s = JSON.stringify(submissionId);

  const url =
    baseUrl +
    "/submissions/" +
    s.substring(1, s.length - 1) +
    "/answers/" +
    serialNumber;
  console.log("url " + url);
  return await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(answer),
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const submitAssignment = async (submissionId) => {
  const s = JSON.stringify(submissionId);

  const url =
    baseUrl + "/submissions/" + s.substring(1, s.length - 1) + "/submit";
  console.log("url " + url);
  return await fetch(url, {
    method: "PATCH",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const markSubmissionReviewed = async (submissionId) => {
  const s = JSON.stringify(submissionId);

  const url =
    baseUrl + "/submissions/" + s.substring(1, s.length - 1) + "/reviewed";
  console.log("url " + url);
  return await fetch(url, {
    method: "PATCH",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const markSubmsissionClosed = async (submissionId) => {
  const s = JSON.stringify(submissionId);

  const url =
    baseUrl + "/submissions/" + s.substring(1, s.length - 1) + "/closed";
  console.log("url " + url);
  return await fetch(url, {
    method: "PATCH",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

export const createSubmission = async (submission) => {
  return await fetch(baseUrl + "/submissions", {
    method: "POST",
    body: JSON.stringify(submission),
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleErrors)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(errorHandler);
};

function errorHandler(response) {
  console.log(response);
}
function handleErrors(response) {
  if (!response.ok) {
    console.log(response);
    login().then((data) => {
      //window.location.reload();
    });
  }
  return response;
}
