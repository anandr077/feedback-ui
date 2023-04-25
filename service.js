import { useHistory } from "react-router-dom";

// const baseUrl = process.env.REACT_APP_API_BASE_URL ?? "https://feedbacks-backend-leso2wocda-ts.a.run.app";
const baseUrl = process.env.REACT_APP_API_BASE_URL ?? "http://localhost:8080";
const jeddleBaseUrl =
  process.env.REACT_APP_JEDDLE_BASE_URL ?? "https://jeddle.duxdigital.net";
const selfBaseUrl =
  process.env.REACT_APP_SELF_BASE_URL ?? "http://localhost:1234";
const clientId =
  process.env.REACT_APP_CLIENT_ID ?? "glkjMYDxtVbCbGabAyuxfMLJkeqjqHyr";

async function fetchData(url, options) {
  try {
    const response = await fetch(url, {
      ...options,
      withCredentials: true,
      credentials: "include",
    });
    if (response.status === 401) {
      return redirectToExternalIDP();
    }
    if (response.status === 404) {
      throw new Error("Page not found");
    }
    if (response.status === 404) {
      throw new Error("Page not found");
    } else if (response.status === 500) {
      throw new Error("Server error");
    } else if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json");
    // alert(isJson)
    const data = isJson ? await response.json() : null;
    // alert(data)
    return data;
  } catch (error) {
    console.error(error);
  }
}

const fetchApi = async (url, options) => {
  return fetchData(url, options);
};

const getApi = async (url) => fetchApi(url, { method: "GET" });

const postApi = async (url, body, headers = {}) => {
  return await fetchApi(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  });
};
const patchApi = async (url, body, headers = {}) => {
  return await fetchApi(url, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...headers },
  });
};
const deleteApi = async (url, headers = {}) => {
  return await fetchApi(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", ...headers },
  });
};

export const deleteFeedback = async (submissionId, commentId) => {
  return deleteApi(
    baseUrl + "/submissions/" + submissionId + "/feedbacks/" + commentId
  );
};

// ...

export const getUserName = () => getCookie("user.name");
export const getUserId = () => getCookie("userId");
export const getUserRole = () => getCookie("role");

export const getCookie =  (name) => {
  const cookieValue = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`));
  
    return cookieValue ? cookieValue.split("=")[1] : null;
  
};
export const setProfileCookies = (profile) => {
  
  document.cookie = "user.name=" + profile.name + "; max-age=" + 86400 + "; path=/";
  document.cookie = "userId=" + profile.userId.value + "; max-age=" + 86400 + "; path=/";
  const role = profile?.roles?.[0] === "group_leader" ? "TEACHER" : "STUDENT";
  document.cookie = "role=" + role + "; max-age=" + 86400 + "; path=/";
  
}
export const logout = async () => {
  await postApi(baseUrl + "/users/logout").then(() => {
    window.location.href =
      jeddleBaseUrl +
      "/wp-login.php?action=logout&redirect_to=" +
      jeddleBaseUrl;
  });
};
export const changePassword = async () => {
  window.location.href = jeddleBaseUrl + "/account/?action=newpassword";
};
export const account = async () => {
  window.location.href = jeddleBaseUrl + "/account";
};
export const getProfile = async () => await getApi(baseUrl + "/users/profile");
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

function redirectToExternalIDP() {
  const externalIDPLoginUrl =
    jeddleBaseUrl +
    `/wp-json/moserver/authorize?response_type=code&client_id=` +
    clientId +
    `&redirect_uri=` +
    selfBaseUrl +
    `/callback`;
  window.location.href = externalIDPLoginUrl;
}

export const exchangeCodeForToken = async (code) => {

  return await postApi(baseUrl + "/users/exchange", code);
  
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
