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

export const getAssigmentById = async (assignmentId) => {
  return await fetch(baseUrl + "/assignments/" + assignmentId, {
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

export const getSubmissionById = async (submissionId) => {
  return await fetch(baseUrl + "/submissions/" + submissionId, {
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


export const addNewComment = async (submissionId, comment) => {
  return await fetch(baseUrl + "/submissions/" + submissionId+"/comments", {
    method: "POST",
    body: JSON.stringify(comment),
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
export const getCommentsForSubmission = async (submissionId) => {
  return await fetch(baseUrl + "/submissions/" + submissionId+"/comments", {
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

export const getClasses = async () => {
  return await fetch(baseUrl + "/classes", {
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
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
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
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
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
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
