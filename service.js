const baseUrl = "http://localhost:8080";

const fetchApi = async (url, options) => {
  const response = await fetch(url, {
    ...options,
    withCredentials: true,
    credentials: "include",
  });

  handleErrors(response);
  return await response.json();
};

const getApi = async (url) => await fetchApi(url, { method: "GET" });

const postApi = async (url, body, headers = {}) =>
  await fetchApi(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  });

const patchApi = async (url, body, headers = {}) =>
  await fetchApi(url, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  });

// ...

export const login = async () => {
  const token = getCookie("auth.access_token");
  if (!token) {
    const user = getCookie("userId");
    return await postApi(baseUrl + "/users/login", {
      username: user,
      password: "password",
    });
  }
};

export const getUserName = () => getCookie("user.name");
export const getUserId = () => getCookie("userId");
export const getUserRole = () => getCookie("role");

export const getCookie = (name) => {
  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split("=")[1] : null;
};

export const getTasks = async () => await getApi(baseUrl + "/tasks");
export const getModelResponses = async () => await getApi(baseUrl + "/feedbacks/modelResponses");
export const getCompletedTasks = async () => await getApi(baseUrl + "/completed-tasks");
export const getNotifications = async () => await getApi(baseUrl + "/notifications");
export const getAssignmentById = async (assignmentId) => await getApi(baseUrl + "/assignments/" + assignmentId);
export const getAssignments = async () => await getApi(baseUrl + "/assignments");
export const startSubmission = async (assignmentDetails) => await postApi(baseUrl + "/submissions", assignmentDetails);
export const getSubmissionById = async (submissionId) => await getApi(baseUrl + "/submissions/" + submissionId);
export const getSubmissionsByAssignmentId = async (assignmentId) => await getApi(baseUrl + "/assignments/" + assignmentId + "/submissions");
export const addFeedback = async (submissionId, comment) => await postApi(baseUrl + "/submissions/" + submissionId + "/feedbacks", comment);
export const deleteFeedback = async (submissionId, commentId) => await fetchApi(baseUrl + "/submissions/" + submissionId + "/feedbacks/" + commentId, { method: "DELETE" });
export const getCommentsForSubmission = async (submissionId) => await getApi(baseUrl + "/submissions/" + submissionId + "/comments");
export const getModelResponsesForClass = async (classId) => await getApi(baseUrl + "/classes/" + classId + "/modelResponses");
export const getStudentsForClass = async (classId) => await getApi(baseUrl + "/classes/" + classId + "/students");
export const getClasses = async () => await getApi(baseUrl + "/classes");
export const createAssignment = async (assignment) => await postApi(baseUrl + "/assignments", assignment);
export const saveAnswer = async (submissionId, serialNumber, answer) =>
  await patchApi(
    baseUrl + "/submissions/" + submissionId + "/answers/" + serialNumber,
    answer
  );

export const submitAssignment = async (submissionId) =>
  await patchApi(baseUrl + "/submissions/" + submissionId + "/submit");

export const markSubmissionReviewed = async (submissionId) =>
  await patchApi(baseUrl + "/submissions/" + submissionId + "/reviewed");

export const markSubmsissionClosed = async (submissionId) =>
  await patchApi(baseUrl + "/submissions/" + submissionId + "/closed");

export const createSubmission = async (submission) =>
  await postApi(baseUrl + "/submissions", submission);

function errorHandler(response) {
  console.log(response);
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(response);
    login().then((data) => {
      // window.location.reload();
    });
  }
  return response;
}
