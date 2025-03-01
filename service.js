import { deleteProfileCookies, getUserRole } from './userLocalDetails';
import { getLocalStorage } from './utils/function';

// const baseUrl = process.env.REACT_APP_API_BASE_URL ?? "https://feedbacks-backend-leso2wocda-ts.a.run.app";
const baseUrl = process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:8080';
const jeddleBaseUrl =
  process.env.REACT_APP_JEDDLE_BASE_URL ?? 'https://jeddle.com';
const selfBaseUrl =
  process.env.REACT_APP_SELF_BASE_URL ?? 'http://localhost:1234';
const clientId =
  process.env.REACT_APP_CLIENT_ID ?? 'KjdJNoiRHNrJIxDvvGRDsQwKImCQKBdF';
const env =
  process.env.REACT_APP_ENV ?? 'dev';

export let isLoggedOut = false;
let isRedirecting = false;
const COOLDOWN_PERIOD = 10000;



async function fetchData(url, options = {}, headers = {}) {
  const token = localStorage.getItem('jwtToken');

  const createHeaders = () => {
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    };
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: createHeaders(),
    });


    if (!response.ok) {
      console.error('API request failed:', response);
      if (response.status === 401) {
        // Handle unauthorized access (e.g., token expired)
        localStorage.clear();
        window.location.href = '/';
      }
      const errorData = await response.json();
      throw new Error(errorData.message || 'API request failed');
    }

    // Parse JSON response
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Ensure the error propagates to React Query's onError handling
  }
}

async function modifyData(url, options = {}) {
  const token = localStorage.getItem('jwtToken');

  const createHeaders = () => {
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      // Include any headers passed in options
      ...options.headers,
    };
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: createHeaders(),
    });

    if (!response.ok) {
      console.error('API request failed:', response);

      if (response.status === 401) {
        // Handle unauthorized access (e.g., token expired)
        localStorage.clear();
        window.location.href = '/';
        return;
      } else if (response.status === 404) {
        throw new Error('Page not found');
      } else if (response.status === 500) {
        throw new Error('Server error');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error occurred: ${response.status}`);
      }
    }

    // Parse JSON response
    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json');
    return isJson ? await response.json() : null;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Ensure the error propagates to React Query's onError handling
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

export const downloadSubmission = async (submissionId) => {
  const url = `${baseUrl}/submissions/${submissionId}/download`;
  const token = localStorage.getItem('jwtToken');

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(
        `Server returned ${response.status} during file download`
      );
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = downloadUrl;
    a.download = `submission-${submissionId}.pdf`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(downloadUrl);
    document.body.removeChild(a);
  } catch (error) {
    console.error('Download error:', error);
    // Handle any errors here
  }
};

export const deleteFeedback = async (submissionId, commentId) => {
  return deleteApi(
    baseUrl + '/submissions/' + submissionId + '/feedbacks/' + commentId
  );
};

export const deleteFocusArea = async (focusAreaID) => {
  return deleteApi(baseUrl + '/feedbacks' + '/focusAreas/' + focusAreaID);
};

export const logout = async () => {
  logoutLocal();

  const logoutUrl = `${jeddleBaseUrl}/wp-login.php?action=logout`;
  window.location.href = logoutUrl;
};

export const changePassword = async () => {
  window.open(jeddleBaseUrl + '/account/?action=newpassword');
};
export const account = async () => {
  window.open(jeddleBaseUrl + '/account');
};
export const getTasks = async () => await getApi(baseUrl + '/tasks');
export const getIsJeddAIEnabled = async () => await getApi(baseUrl + '/users/isJeddAIEnabled');
export const getCommunityTasks = async () =>
  await getApi(baseUrl + '/communityTasks');
export const getGiveFeedbackCompletedTasks = async () =>
  await getApi(baseUrl + '/feedbackHistory');
export const getStudentStats = async () =>
  await getApi(baseUrl + '/students/stats');
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
export const getStudentsAnalyticsByClassId = async (classId) =>
  await getApi(baseUrl + '/feedbacks/' + classId + '/studentsAnalytics');
export const getStudentsStatsByClassId = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/studentStats');
export const getAssignments = async () =>
  await getApi(baseUrl + '/assignments');
export const getDocuments = async () =>
  await getApi(baseUrl + '/submissions/documents');
export const getDocumentReviews = async () =>
  await getApi(baseUrl + '/document-review-tasks');
export const startSubmission = async (assignmentDetails) =>
  await postApi(baseUrl + '/submissions', assignmentDetails);
export const nextSubmission = async (assignmentID) =>
  await getApi(baseUrl + '/assignments/' + assignmentID + '/nextSubmission');

export const getSubmissionById = async (submissionId) =>
  await getApi(baseUrl + '/submissions/' + submissionId);
export const getSubmissionsByAssignmentId = async (assignmentId) =>
  await getApi(baseUrl + '/assignments/' + assignmentId + '/submissions');
export const getOverComments = async (id) =>
  await getApi(baseUrl + '/submissions/' + id + '/overallComments');
export const getPortfolioSubjects = async () =>
  await getApi(baseUrl + '/students/drafts');



export const addFeedback = async (submissionId, comment) =>
  await postApi(
    baseUrl + '/submissions/' + submissionId + '/feedbacks',
    comment
  );
export const deleteSubmissionById = async (submissionId) => {
  await patchApi(baseUrl + '/submissions/' + submissionId + '/delete');
};

export const updateFeedback = async (submissionId, commentId, comment) =>
  await putApi(
    baseUrl + '/submissions/' + submissionId + '/feedbacks/' + commentId,
    comment
  );

export const resolveFeedback = async (feedbackId) =>
  await patchApi(baseUrl + '/feedbacks/comment/' + feedbackId + '/resolve');

export const provideFeedbackOnFeedback = async (
  submissionId,
  feedbackOnFeedback
) =>
  await patchApi(
    baseUrl +
      '/submissions/' +
      submissionId +
      '/feedbackOnFeedback/' +
      feedbackOnFeedback
  );

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

export const deleteMarkingCriteria = async (markingCriteriaId) => {
  await deleteApi(baseUrl + '/teachers/markingCriteria/' + markingCriteriaId);
};

export const createNewFeedbackBank = async (newFeedbackBank) => {
  return await postApi(baseUrl + '/commentbanks', newFeedbackBank);
};

export const createNewSmartAnnotation = async (
  smartAnnotation,
  smartAnnotationId
) => {
  return await putApi(
    baseUrl + '/commentbanks/' + smartAnnotationId,
    smartAnnotation
  );
};

export const updateSmartAnnotation = async (
  smartAnnotation,
  smartAnnotationId
) => {
  return putApi(
    baseUrl + '/commentbanks/' + smartAnnotationId,
    smartAnnotation
  );
};

export const deleteSmartAnnotation = async (smartAnnotationId) => {
  await deleteApi(baseUrl + '/commentbanks/' + smartAnnotationId);
};

export const getSmartAnnotations = async () =>
  await getApi(baseUrl + '/teachers/smartAnnotation');

export const getFeedbackBanks = async () =>
  await getApi(baseUrl + '/commentbanks?projection=commentBanksProjection');

export const getAllSubmissions = async (id) => 
  await getApi(baseUrl + '/assignments/' + id + '/allSubmissions')

export const getCommentBank = async (id) => {
  const url = `${baseUrl}/commentbanks/${id}?projection=commentBanksProjection`;
  const token = localStorage.getItem('jwtToken'); // Retrieve the token if available

  const headers = new Headers();
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include', // Ensure credentials are included for cookies
      headers: headers,
    });

    if (response.ok) {
      const isJson =
        response.headers.get('content-type')?.includes('application/json') ||
        response.headers.get('content-type')?.includes('application/hal+json');
      return isJson ? await response.json() : null; // Only parse JSON if the content type is correct
    } else {
      console.error('HTTP error:', response.status);
      return null; // Return null on any non-ok HTTP response
    }
  } catch (error) {
    console.error('Network or other error:', error);
    return null; // Return null on network errors or exceptions
  }
};

export const updateFeedbackBanks = async (updatedCommentBank, commentBankId) =>
  await putApi(baseUrl + '/commentbanks/' + commentBankId, updatedCommentBank);

export const getMarkingMethodology = async (id) =>
  await getApi(baseUrl + '/teachers/markingCriterias/' + id);

export const getAllMarkingCriteria = async () =>
  await getApi(baseUrl + '/teachers/markingCriteria');

export const getCommentsForSubmission = async (submissionId) =>
  await getApi(baseUrl + '/submissions/' + submissionId + '/comments');
export const getModelResponsesForClass = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/modelResponses');
export const getClassSettingForClass = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/settings');
export const updateClassSettingForClass = async (classId,classSetting) =>
  await putApi(baseUrl + '/classsettings/' + classId, classSetting);
export const getStudentsForClass = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/students');
export const getTeachersForClass = async (classId) =>
  await getApi(baseUrl + '/classes/' + classId + '/teachers');
export const getClasses = async () => await getApi(baseUrl + '/classes');
export const createAssignment = async (assignment) =>
  await postApi(baseUrl + '/assignments', assignment);
export const publishAssignment = async (id, update) =>
  await patchApi(baseUrl + '/assignments/' + id + '/publish', update);
export const updateSubject = async (id, subject) =>
  await patchApi(baseUrl + '/assignments/' + id + '/updateSubject', {
    subject: subject,
  });
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

export const addToFavouriteList = async (feedbackId) =>
  await patchApi(
    baseUrl + '/feedbacks/modelResponses/' + feedbackId + '/addBookmark'
  );
export const removeFromFavouriteList = async (feedbackId) =>
  await patchApi(
    baseUrl + '/feedbacks/modelResponses/' + feedbackId + '/removeBookmark'
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
export const cancelFeedbackRequest = async (submissionId) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/cancelFeedbackRequest'
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
export const updateDocumentType = async (submissionId, documentType) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/updateDocumentType',
    { documentType: documentType }
  );
export const publishModelResponse = async (feedbackId) =>
  await patchApi(
    baseUrl + '/feedbacks/modelResponses/' + feedbackId + '/publish'
  );

export const denyModelResponse = async (feedbackId) =>
  await patchApi(baseUrl + '/feedbacks/modelResponses/' + feedbackId + '/deny');

export const profileStateYear = async (stateYear) =>
  await patchApi(baseUrl + '/users/profile', stateYear);

export const createRequestFeddbackType = async (
  submissionId,
  requestFeddbackType
) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/requestFeedback',
    requestFeddbackType
  );
function logoutLocal() {
  isLoggedOut = true;
  localStorage.clear();
  deleteProfileCookies();
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('onboardingShown');
}

export const exchangeCodeForToken = (code) =>
  fetchData(baseUrl+`/users/exchange/${code}`);

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
    '#F5E9D6',
    '#CCE7E1',
    '#F4E5F6',
    '#D1D1EB',
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
    title: 'New Marking Template',
    criterias: [criteria],
  };
};
export const getPortfolio = async () =>
  await getApi(baseUrl + '/students/portfolio');

export const addDocumentToPortfolioWithDetails = async (documentDetails) =>
  await postApi(baseUrl + '/students/portfolio/documents', documentDetails);

export const addDocumentToPortfolio = async (classId, courseId, title) =>
  addDocumentToPortfolioWithDetails({
    classId,
    courseId,
    title,
    documentType: 'Analytical',
  });

  export const askJeddAI = async (submissionId, cleanAnswer,markingCriteriaId,feedbackBankId) =>
    await postApi(baseUrl + '/submissions/' + submissionId + '/jeddAIFeedback', {
      state: getLocalStorage('state'),
      year: getLocalStorage('year'),
    cleanAnswer: cleanAnswer,
    markingCriteriaId: markingCriteriaId,
    feedbackBankId: feedbackBankId,
  });



export const getAllSubjects = [{ title: 'English' }];
export const getAllTypes = [
  { title: 'Analytical' },
  { title: 'Imaginative' },
  { title: 'Discursive' },
  { title: 'Persuasive' },
  { title: 'Reflective' },
];


export const uploadFileToServer = async (uploadedFile) => {
  const formData = new FormData();
  formData.append('file', uploadedFile);

  const token = localStorage.getItem('jwtToken');
  try {
    const response = await fetch(`${baseUrl}/files/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`, 
      },
      body: formData,
    });

    const responseText = await response.text(); 

    if (!response.ok) {
      throw new Error(responseText); 
    }
    return responseText;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Network error:', error);
    } else {
      console.error('Server error:', error);
    }
  }
};

export const updateHandWrittenDocumentById = async (submissionId, serialNumber, documentUrls) =>
  await patchApi(
    baseUrl + '/submissions/' + submissionId + '/answers/' + serialNumber + "/files", documentUrls
  )

export const extractText = async (id, serialNumber) =>
  await patchApi(baseUrl + "/submissions/" + id + "/answers/" + serialNumber + "/extractText")
export const getProfile = async () => await getApi(baseUrl + '/users/profile');
export const updateOnboardingStatus = async (profile) =>
  await patchApi(baseUrl + '/users/profile', profile);

