import { useHistory } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_BASE_URL ?? "http://localhost:8080";
const fetchApi = async (url, options) => {

  try {
    const response = await fetch(url, {
      ...options,
      withCredentials: true,
      credentials: "include",
    });
    const data =  response.json();
    handleResponse(response);
    return data;
  } catch (error) {
    handleResponse(response, error);
  }
};

const getApi = async (url) =>  fetchApi(url, { method: "GET" });

const postApi = async (url, body, headers = {}) => {
  const response = await fetchApi(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  });

  await handleResponse(response);
  return response.json();
};
const patchApi = async (url, body, headers = {}) => {
  const response = await fetchApi(url, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  });

  await handleResponse(response);
  return response.json();
};


// ...

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
export const getClassesWithStudents = async () =>
  await getApi(baseUrl + "/classes/all/details");
export const getModelResponses = async () =>
  await getApi(baseUrl + "/feedbacks/modelResponses");
export const getCompletedTasks = async () =>
  await getApi(baseUrl + "/completed-tasks");
export const getNotifications = async () =>
  await getApi(baseUrl + "/notifications");
export const getAssignmentById = async (assignmentId) =>
  await getApi(baseUrl + "/assignments/" + assignmentId);
export const getAssignmentsByClassId = async (classId) =>
  await getApi(baseUrl + "/classes/" + classId + "/assignments");
export const getAssignments = async () =>
  await getApi(baseUrl + "/assignments");
export const startSubmission = async (assignmentDetails) =>
  await postApi(baseUrl + "/submissions", assignmentDetails);
export const getSubmissionById = async (submissionId) =>
  await getApi(baseUrl + "/submissions/" + submissionId);
export const getSubmissionsByAssignmentId = async (assignmentId) =>
  await getApi(baseUrl + "/assignments/" + assignmentId + "/submissions");
export const addFeedback = async (submissionId, comment) =>
  await postApi(
    baseUrl + "/submissions/" + submissionId + "/feedbacks",
    comment
  );
export const deleteFeedback = async (submissionId, commentId) => {
  const response = await fetch(
    baseUrl + "/submissions/" + submissionId + "/feedbacks/" + commentId,
    {
      method: "DELETE",
      withCredentials: true,
      credentials: "include",
    }
  );

  handleResponse(response);
  return response;
};
export const getCommentsForSubmission = async (submissionId) =>
  await getApi(baseUrl + "/submissions/" + submissionId + "/comments");
export const getModelResponsesForClass = async (classId) =>
  await getApi(baseUrl + "/classes/" + classId + "/modelResponses");
export const getStudentsForClass = async (classId) =>
  await getApi(baseUrl + "/classes/" + classId + "/students");
export const getClasses = async () => await getApi(baseUrl + "/classes");
export const createAssignment = async (assignment) =>
  await postApi(baseUrl + "/assignments", assignment);
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

export const updateFeedbackRange = async (submissionId, commentId, range) =>
  await patchApi(
    baseUrl + "/submissions/" + submissionId + "/feedbacks/" + commentId,
    range
  );

export const createSubmission = async (submission) =>
  await postApi(baseUrl + "/submissions", submission);

function handleResponse(response, error) {
    if (error) {
      // Handle network errors or exceptions
      alert(`Error: ${error}`);
    } 
    if (!response.ok) {
      // Handle HTTP error responses
      if (response.status === 401) {
        alert("Redirecting")
        redirectToExternalIDP();
      } else {
        alert(response.status)
      }
    } else {
      // Return the response for OK responses
      return response;
    }
}


function redirectToExternalIDP() {
  const clientId = "your_client_id";
  const responseType = "code";
  const redirectUri = encodeURIComponent("your_redirect_uri");
  const state = "some_random_state";
  const externalIDPLoginUrl = `https://jeddle.duxdigital.net/wp-json/moserver/authorize?response_type=code&client_id=glkjMYDxtVbCbGabAyuxfMLJkeqjqHyr&redirect_uri=http://localhost:1234/callback`;
  window.location.href = externalIDPLoginUrl;
  // history.push(externalIDPLoginUrl);
}

export const exchangeCodeForToken = async (code) => {
  const token = getCookie("auth.access_token");
  if (!token) {
    return await postApi(baseUrl + "/users/exchange", code);
  }
};

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

export const getShortcuts = () => {
  const shortcuts = [
    { text: "Use More Techniques" },
    { text: "Shorten Quote" },
    { text: "This is too long" },
    { text: "Great answer!" },
    { text: "Nice!" },
    { text: "Remove" },
    { text: "Shorten" },
    { text: "Storytelling!" },
    { text: "Incorrect syntax" },
    { text: "Check grammar" },
    { text: "Merge these sentences" },
    { text: "Split into two sentences" },
    { text: "Too clunky" },
    { text: "Repetitive" },
    { text: "Too abrupt" },
    { text: "Change start" },
    { text: "Be more specific" },
    { text: "Expand on this" },
    { text: "Avoid listing" },
    { text: "Shorten quote" },
    { text: "Quote does not flow" },
    { text: "Quote does not prove your point" },
    { text: "Add a technique" },
    { text: "Use a different technique" },
    { text: "Contextualise" },
    { text: "Wrong technique" },
    { text: "Refer to form" },
    { text: "Evidence?" },
    { text: "Link to question" },
    { text: "Repeating the question" },
    { text: "Use actual key terms of question" },
  ];
  return shortcuts;
};
