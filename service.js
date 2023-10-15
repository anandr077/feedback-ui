// const baseUrl = process.env.REACT_APP_API_BASE_URL ?? "https://feedbacks-backend-leso2wocda-ts.a.run.app";
const baseUrl = process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:8080';
const jeddleBaseUrl =
  process.env.REACT_APP_JEDDLE_BASE_URL ?? 'https://jeddle.duxdigital.net';
const selfBaseUrl =
  process.env.REACT_APP_SELF_BASE_URL ?? 'http://localhost:1234';
const clientId =
  process.env.REACT_APP_CLIENT_ID ?? 'glkjMYDxtVbCbGabAyuxfMLJkeqjqHyr';

async function fetchData(url, options, headers = {}) {
  const defaultHeaders = new Headers();
  const token = localStorage.getItem('jwtToken');
  if (token) {
    defaultHeaders.append('Authorization', `Bearer ${token}`);
  }

  const mergedHeaders = Object.assign(defaultHeaders, headers);
  try {
    const response = await fetch(url, {
      ...options,
      withCredentials: true,
      credentials: 'include',
      headers: mergedHeaders,
    });

    if (response.status === 401) {
      return redirectToExternalIDP();
    }
    if (response.status === 404) {
      // window.location.href = selfBaseUrl + '/#/404';
      // window.location.reload();
      // throw new Error('Page not found');
    } else if (response.status === 500) {
      window.location.href = selfBaseUrl + '/#/404';
      window.location.reload();
      throw new Error('Server error');
    } else if (!response.ok) {
      // window.location.href = selfBaseUrl + '/#/404';
      // window.location.reload();
      // throw new Error(`HTTP error! status: ${response.status}`);
    }

    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json');
    const data = isJson ? await response.json() : null;
    if (data === null) {
      window.location.href = selfBaseUrl + '/#/404';
      window.location.reload();
      throw new Error('Page not found');
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function modifyData(url, options = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      withCredentials: true,
      credentials: 'include',
    });

    if (response.status === 401) {
      return redirectToExternalIDP();
    }
    if (response.status === 404) {
      throw new Error('Page not found');
    }
    if (response.status === 404) {
      throw new Error('Page not found');
    } else if (response.status === 500) {
      throw new Error('Server error');
    } else if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json');
    const data = isJson ? await response.json() : null;
    return data;
  } catch (error) {
    console.error(error);
  }
}
const fetchApi = async (url, options, headers) => {
  return fetchData(url, options, headers);
};

const getApi = async (url) => fetchApi(url, { method: 'GET' });

const postApi = async (url, body) => {
  const token = localStorage.getItem('jwtToken');

  return await modifyData(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
const putApi = async (url, body) => {
  const token = localStorage.getItem('jwtToken');

  return await modifyData(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
const patchApi = async (url, body) => {
  const token = localStorage.getItem('jwtToken');

  return await modifyData(url, {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

const deleteApi = async (url) => {
  const token = localStorage.getItem('jwtToken');

  return await modifyData(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteFeedback = async (submissionId, commentId) => {
  return deleteApi(
    baseUrl + '/submissions/' + submissionId + '/feedbacks/' + commentId
  );
};

export const deleteFocusArea = async (focusAreaID) => {
  return deleteApi(baseUrl + '/feedbacks' + '/focusAreas/' + focusAreaID);
};

export const getUserName = () => getCookie('user.name');
export const getUserId = () => getCookie('userId');
export const getUserRole = () => getCookie('role');
export const getAuthToken = () => localStorage.getItem('jwtToken');

export const getCookie = (name) => {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split('=')[1] : null;
};
export const setProfileCookies = (profile) => {
  localStorage.setItem('jwtToken', profile.token);
  const expiry = 30 * 24 * 60 * 60;

  document.cookie =
    'user.name=' + profile.name + '; max-age=' + expiry * +'; path=/';
  document.cookie =
    'userId=' + profile.userId + '; max-age=' + expiry + '; path=/';
  document.cookie = 'role=' + profile.role + '; max-age=' + expiry + '; path=/';
};

export const deleteProfileCookies = () => {
  document.cookie = 'user.name=; max-age=' + 0 + '; path=/';
  document.cookie = 'userId=; max-age=' + 0 + '; path=/';
  document.cookie = 'role=; max-age=' + 0 + '; path=/';
};
export const logout = async () => {
  await postApi(baseUrl + '/users/logout').then(() => {
    logoutLocal();

    window.location.href =
      jeddleBaseUrl + '/wp-login.php?action=logout&redirect_to=' + selfBaseUrl;
  });
};
export const changePassword = async () => {
  window.open(jeddleBaseUrl + '/account/?action=newpassword');
};
export const account = async () => {
  window.open(jeddleBaseUrl + '/account');
};
export const getProfile = async () => await getApi(baseUrl + '/users/profile');
export const getTasks = async () => await getApi(baseUrl + '/tasks');
export const getClassesWithStudents = async () =>
  await getApi(baseUrl + '/classes/all/details');
export const getModelResponses = async () =>
  await getApi(baseUrl + '/feedbacks/modelResponses');
export const getCompletedTasks = async () =>
  await getApi(baseUrl + '/completed-tasks');
export const getNotifications = async () =>
  await getApi(baseUrl + '/notifications');
export const getAssignmentById = async (assignmentId) =>
  await getApi(baseUrl + '/assignments/' + assignmentId);
export const getAssignmentsByClassId = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/assignments');
export const getAssignments = async () =>
  await getApi(baseUrl + '/assignments');
export const getDocumentReviews = async () =>
  await getApi(baseUrl + '/document-review-tasks');
export const startSubmission = async (assignmentDetails) =>
  await postApi(baseUrl + '/submissions', assignmentDetails);
export const getSubmissionById = async (submissionId) =>
  await getApi(baseUrl + '/submissions/' + submissionId);
export const getSubmissionsByAssignmentId = async (assignmentId) =>
  await getApi(baseUrl + '/assignments/' + assignmentId + '/submissions');
export const addFeedback = async (submissionId, comment) =>
  await postApi(
    baseUrl + '/submissions/' + submissionId + '/feedbacks',
    comment
  );
export const deleteSubmissionById = async (submissionId) => {
  console.log('delete submission ' + submissionId);
  await patchApi(baseUrl + '/submissions/' + submissionId + '/delete');
};

export const updateFeedback = async (submissionId, commentId, comment) =>
  await putApi(
    baseUrl + '/submissions/' + submissionId + '/feedbacks/' + commentId,
    comment
  );
export const updateSubmissionClass = async (submissionId, classId) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/updateClass/' + classId
  );
export const resolveFeedback = async (feedbackId) =>
  await patchApi(baseUrl + '/feedbacks/comment/' + feedbackId + '/resolve');

export const getSmartAnnotaionAnalyticsByClassId = async (classId) => {
  let smartAnnotationsMap = new Map();
  const feedbacks = await getApi(
    baseUrl + '/feedbacks/' + classId + '/analytics'
  );
  await feedbacks.forEach((feedback) => {
    const splits = feedback.comment.split('\n\n');
    const title = splits[0].trim();
    const suggestion = splits[1]?.trim();
    if (smartAnnotationsMap.get(title)) {
      if (smartAnnotationsMap.get(title).get(suggestion)) {
        smartAnnotationsMap
          .get(title)
          .set(suggestion, smartAnnotationsMap.get(title).get(suggestion) + 1);
      } else {
        smartAnnotationsMap.get(title).set(suggestion, 1);
      }
    } else {
      smartAnnotationsMap.set(title, new Map([[suggestion, 1]]));
    }
  });
  return smartAnnotationsMap;
};

export const createNewMarkingCriteria = async (markingCriteria) => {
  return await postApi(baseUrl + '/teachers/markingCriteria', markingCriteria);
};
export const updateMarkingCriteria = async (
  markingCriteria,
  markingCriteriaId
) => {
  return await postApi(
    baseUrl + '/teachers/markingCriteria/' + markingCriteriaId,
    markingCriteria
  );
};

export const updateStrength = async (markingCriteriaId, strength) => {
  await patchApi(
    baseUrl +
      '/teachers/markingCriteria/' +
      markingCriteriaId +
      '/selectedStrengths',
    strength
  );
};
export const deleteMarkingCriteria = async (markingCriteriaId) => {
  await deleteApi(baseUrl + '/teachers/markingCriteria/' + markingCriteriaId);
};

export const createNewSmartAnnotation = async (smartAnnotation) => {
  return await postApi(baseUrl + '/teachers/smartAnnotation', smartAnnotation);
};

export const updateSmartAnnotation = async (
  smartAnnotation,
  smartAnnotationId
) => {
  return postApi(
    baseUrl + '/teachers/smartAnnotation/' + smartAnnotationId,
    smartAnnotation
  );
};

export const deleteSmartAnnotation = async (smartAnnotationId) => {
  await deleteApi(baseUrl + '/teachers/smartAnnotation/' + smartAnnotationId);
};

export const getSmartAnnotations = async () =>
  await getApi(baseUrl + '/teachers/smartAnnotation');

export const getMarkingMethodology = async (id) =>
  await getApi(baseUrl + '/teachers/markingCriterias/' + id);

export const getAllMarkingCriteria = async () =>
  await getApi(baseUrl + '/teachers/markingCriteria');

export const getCommentsForSubmission = async (submissionId) =>
  await getApi(baseUrl + '/submissions/' + submissionId + '/comments');
export const getModelResponsesForClass = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/modelResponses');
export const getStudentsForClass = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/students');
export const getTeachersForClass = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/teachers');
export const getClasses = async () => await getApi(baseUrl + '/classes');
export const createAssignment = async (assignment) =>
  await postApi(baseUrl + '/assignments', assignment);
export const publishAssignment = async (id, update) =>
  await patchApi(baseUrl + '/assignments/' + id + '/publish', update);
export const deleteAssignment = async (id, update) =>
  await patchApi(baseUrl + '/assignments/' + id + '/delete', update);
export const extendDueAtAssignment = async (id, extendDueAt) =>
  await patchApi(baseUrl + '/assignments/' + id + '/extend', extendDueAt);
export const updateAssignment = async (id, assignment) =>
  await putApi(baseUrl + '/assignments/' + id, assignment);
export const saveAnswer = async (submissionId, serialNumber, answer) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/answers/' + serialNumber,
    answer
  );

export const submitAssignment = async (submissionId) =>
  await patchApi(baseUrl + '/submissions/' + submissionId + '/submit');

export const markSubmissionReviewed = async (submissionId) =>
  await patchApi(baseUrl + '/submissions/' + submissionId + '/reviewed');
export const markSubmissionRequestSubmission = async (submissionId) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/requestResubmission'
  );
export const acceptFeedbackRequest = async (submissionId) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/acceptFeedbackRequest'
  );

export const declineFeedbackRequest = async (submissionId) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/declineFeedbackRequest'
  );

export const markSubmsissionClosed = async (submissionId) =>
  await patchApi(baseUrl + '/submissions/' + submissionId + '/closed');

export const updateFeedbackRange = async (submissionId, commentId, range) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/feedbacks/' + commentId,
    range
  );
export const publishModelResponse = async (feedbackId) =>
  await patchApi(
    baseUrl + '/feedbacks/modelResponses/' + feedbackId + '/publish'
  );
export const unpublishModelResponse = async (feedbackId) =>
  await patchApi(
    baseUrl + '/feedbacks/modelResponses/' + feedbackId + '/unpublish'
  );
export const denyModelResponse = async (feedbackId) =>
  await patchApi(baseUrl + '/feedbacks/modelResponses/' + feedbackId + '/deny');

export const createSubmission = async (submission) =>
  await postApi(baseUrl + '/submissions', submission);

export const createRequestFeddbackType = async (
  submissionId,
  requestFeddbackType
) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/requestFeedback',
    requestFeddbackType
  );
function logoutLocal() {
  deleteProfileCookies();
  localStorage.removeItem('jwtToken');
}

export function redirectToExternalIDP() {
  logoutLocal();
  const externalIDPLoginUrl =
    jeddleBaseUrl +
    '/wp-json/moserver/authorize?response_type=code&client_id=' +
    clientId +
    '&redirect_uri=' +
    selfBaseUrl;
  window.location.href = externalIDPLoginUrl;
}

export const exchangeCodeForToken = async (code) => {
  return await getApi(baseUrl + '/users/exchange/' + code);
};

export const getShortcuts = () => {
  const shortcuts = [
    { text: 'Use of evidence' },
    { text: 'Selection of evidence' },
    { text: 'Contextualise evidence' },
    { text: 'Incorrect syntax' },
    { text: 'Overcomplicated syntax' },
    { text: 'Paragraph cohesion' },
    { text: 'Use of techniques' },
    { text: 'Lack of specificity' },
    { text: 'Reference to the question' },
    { text: 'Analytical tone' },
    { text: 'Concision and precision' },
    { text: 'Use of Context' },
    { text: 'Setting' },
    { text: 'Character' },
    { text: 'Plot' },
    { text: 'Syntax for creative effect' },
  ];
  return shortcuts;
};

export const getFocusAreas = async () => {
  return await getApi(baseUrl + '/feedbacks/focusAreas');
};

export const addFocusArea = async (focusArea) =>
  await postApi(baseUrl + '/feedbacks/focusAreas', focusArea);

export const getAllColors = () => {
  return [
    '#F0C8C8',
    '#F6DEDE',
    '#F8DBB9',
    '#FBECDA',
    '#D0E4C4',
    '#E5F0DF',
    '#C0DFE4',
    '#D9ECEF',
    '#D7D1EA',
    '#E7E3F2',
    '#B5CFED',
    '#D3E2F4',
  ];
};

export const getNewCriteria = (criteriaId) => {
  return {
    id: { criteriaId },
    title: '',
    levels: [
      {
        id: '',
        name: '',
        description: '',
      },
      {
        id: '',
        name: '',
        description: '',
      },
      {
        id: '',
        name: '',
        description: '',
      },
    ],
  };
};

export const getDefaultCriteria = () => {
  const criteria = getNewCriteria(0);
  return {
    title: '',
    criterias: [criteria],
  };
};
export const getPortfolio = async () =>
  await getApi(baseUrl + '/students/portfolio');
export const updatePortfolio = async (portfolio) =>
  await putApi(baseUrl + '/students/portfolio', portfolio);

export const addDocumentToPortfolioWithDetails = async (documentDetails) =>
  await postApi(baseUrl + '/students/portfolio/documents', documentDetails);
export const addFolderToPortfolio = async (newFolder) =>
  await postApi(baseUrl + '/students/portfolio/folders', newFolder);
export const deleteFolderFromPortfolio = async (folderId) =>
  await deleteApi(baseUrl + `/students/portfolio/folders/${folderId}`)

export const addDocumentToPortfolio = async (classId, courseId, title) =>
  addDocumentToPortfolioWithDetails({
    classId,
    courseId,
    title,
  });
