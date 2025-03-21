import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  default as React,
  default as React,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
} from 'react-router-dom';
import TeacherClassesRoot from './components/Classes/TeacherClassesRoot';
import CompletedPage from './components/CompletedPage';
import CreateAssignment from './components/CreateAssignment';
import CreateNewMarkingCriteriaRoot from './components/CreateNewMarkingCriteria/CreateNewMarkingCriteriaRoot';
import CreateNewStrengthAndTargets from './components/CreateNewMarkingCriteria/CreateNewStrengthAndTargets';
import ExemplarResponsesPage from './components/ExemplarResponsesPage';
import FeedbacksRoot from './components/FeedbacksComponents/FeedbacksRoot';
import PageNotFound from './components/PageNotFound';
import AccountSettingsRoot from './components/Settings/AccountSettingRoot';
import TaskDetail from './components/StartAssignment/TaskDetail';
import PageNotFound from './components/PageNotFound';
import { Redirect } from 'react-router-dom';
import AccountSettingsRoot from './components/Settings/AccountSettingRoot';
import CreateNewMarkingCriteriaRoot from './components/CreateNewMarkingCriteria/CreateNewMarkingCriteriaRoot';
import CreateNewStrengthAndTargets from './components/CreateNewMarkingCriteria/CreateNewStrengthAndTargets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  getUserName,
  getUserRole,
  setProfileCookies,
} from './userLocalDetails';
import GiveFeedback from './components/GiveFeedback';
import MainPage from './components/MainPage';
import NewDocPage from './components/NewDocRoot';
import MainSidebar from './components/MainSidebar';
import CommentBanks from './components/CommentBanks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isMobileView } from './components/ReactiveRender';
import WelcomeOverlayMobile from './components2/WelcomeOverlayMobile';
import JeddAI from './components/JeddAI';
import VisibilityWrapper from './components2/VisibilityWrapper/VisibilityWrapper';
import { exchangeCodeForToken, getProfile, isLoggedOut } from './service';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import queryString from 'query-string';
import { ddRum } from './dd';
import { getLocalStorage } from './utils/function';
import OnboardingScreen from './components2/Onboard/OnboardingScreen';
import Loader from './components/Loader';
import TeacherOnboarding from './components2/TeacherOnboarding';
import { isShowWelcomeOnboarding, isStudentOnboarding, isTeacherOnboarding } from './rules';
import { AppContext } from './app.context';
import WelcomeOnboarding from './components2/TeacherOnboarding/WelcomeOnboarding';
import Cookies from 'js-cookie';

function App() {
  const exchangeInProgress = useRef(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showStudentOnboarding, setShowStudentOnboarding] = useState(false);
  const [showTeacherOnboarding, setShowTeacherOnboarding] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [showWelcomeOnboarding, setShowWelcomeOnboarding] = useState(false);

  useEffect(() => {
    if (isLoggedOut) {
      return;
    }
    const token = localStorage.getItem('jwtToken');
    const parsed = queryString.parse(window.location.search);
    
    if (parsed.code) {
      if (exchangeInProgress.current) {
        console.log('Exchange already in progress');
        return;
      }
      exchangeInProgress.current = true;

      // Use the API client to exchange the code
      exchangeCodeForToken(parsed.code)
        .then((data) => {
          setProfileCookies(data);
          setIsAuthenticated(true);
          window.history.replaceState({}, document.title, '/');
          exchangeInProgress.current = false;
          if (parsed.redirect) {
            localStorage.setItem('redirectPath', `/#${parsed.redirect}`);
          }
        })
        .catch((error) => {
          console.error('Error exchanging code:', error);
          exchangeInProgress.current = false; // Reset the flag on error
        });
    } else if (!token) {
      // No code and no token, redirect to IdP
      const authUrl = externalIDPUrl();
      window.location.href = authUrl;
    } else {
      // Token already present
      console.log('Token already present');
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      const defaultShowStudentOnboarding =
        getUserRole() === 'STUDENT' &&
        (getLocalStorage('state') === undefined ||
          getLocalStorage('state') === null) &&
        !localStorage.getItem('onboardingShown');

      if (defaultShowStudentOnboarding) {
        setShowStudentOnboarding(true);
        localStorage.setItem('onboardingShown', true);
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserProfile = async () => {
        setLoadingProfile(true);
        try {
          const userProfile = await getProfile();

          const defaultShowTeacherOnboarding =
            (userProfile?.state === null || userProfile?.state === undefined) &&
            (userProfile?.year === null || userProfile?.year === undefined);

            if (defaultShowTeacherOnboarding) {
              setShowTeacherOnboarding(true);
            } else {
              const lastShown = Cookies.get('welcomeOnboardingShown');
              const now = Date.now();
              const oneWeek = 7 * 24 * 60 * 60 * 1000;

              if (!lastShown || now - Number(lastShown) > oneWeek) {
                setShowWelcomeOnboarding(true);
              }
            }
        } catch (error) {
          console.error(error);
        } finally {
          setLoadingProfile(false);
        }
      };

      fetchUserProfile();
    }
  }, [isAuthenticated, isLoadingProfile]);

   // **NEW: Redirect AFTER login is fully done**
   useEffect(() => {
    if (isAuthenticated) {
      const redirectPath = localStorage.getItem('redirectPath') ;
      if (redirectPath) {
        localStorage.removeItem('redirectPath');

        // alert(`Redirecting to ${redirectPath}`);
        window.location.href = redirectPath; // Full redirect for clean navigation
      }
    }
  }, [isAuthenticated]);
  const closeOnboarding = () => {
    setShowStudentOnboarding(false);
    Cookies.set('showNotificationBar', 'true');
  };

  const closeTeacherOnboarding = () => {
    setShowTeacherOnboarding(false);
  };
  
  const updateRedirectAt = () => {
    const url = new URL(window.location.href);
    const hashFragment = window.location.hash.substring(1); // Remove `#`

    // If there's a hash path, move it to `redirect` query parameter
    if (hashFragment) {
        url.hash = ''; // Remove hash from URL
        url.searchParams.set('redirect', hashFragment); // Store hash path in query param
    }

    // Add or update `redirect_at`
    url.searchParams.set('redirect_at', Date.now());
    const res = url.toString()
    
    return res;
  };


  const externalIDPUrl = () => {
    const selfBaseUrl =
      process.env.REACT_APP_SELF_BASE_URL ?? 'http://localhost:1234';
    const clientId =
      process.env.REACT_APP_CLIENT_ID ?? 'KjdJNoiRHNrJIxDvvGRDsQwKImCQKBdF';
    const jeddleBaseUrl = 'https://jeddle.com';
    return (
      jeddleBaseUrl +
      '/wp-json/moserver/authorize?response_type=code&client_id=' +
      clientId +
      '&state=' +
      Date.now() +
      '&redirect_uri=' +
      // encodeURIComponent(selfBaseUrl + '?redirect_at=' + Date.now())
      encodeURIComponent(updateRedirectAt())
    );
  };
 
  const mobileView = isMobileView();

  if (!isAuthenticated || loadingProfile) {
    return <Loader />;
  }
  const role = getUserRole();
  const isTeacher = role === 'TEACHER';
  const userName = getUserName();
  userName && (document.title = 'Jeddle - ' + userName);

  // const middleware = (c) => withOnboarding(c);
  const middleware = (c) => c;
  const ProtectedTeacherClassesRoot = middleware(TeacherClassesRoot);
  const ProtectedTaskDetail = middleware(TaskDetail);
  const ProtectedCreateAssignment = middleware(CreateAssignment);
  const ProtectedFeedbacksRoot = middleware(FeedbacksRoot);
  const ProtectedDocumentRoot = middleware(FeedbacksRoot);
  const ProtectedExemplarResponsesPage = middleware(ExemplarResponsesPage);
  const ProtectedMarkingCriteria = middleware(CreateNewMarkingCriteriaRoot);
  const ProtectedSettings = middleware(AccountSettingsRoot);
  const ProtectedStrengthAndTarget = middleware(CreateNewStrengthAndTargets);
  const ProtectedDashboard = middleware(Dashboard);
  const ProtectedTasks = middleware(Tasks);
  const ProtectedGiveFeedback = middleware(GiveFeedback);
  const ProtectedDocRoot = middleware(NewDocPage);
  const ProtectedCompletedRoot = middleware(CompletedPage);

  const ProtectedCommentbanks = middleware(CommentBanks);
  const ProtectedJeddAI = middleware(JeddAI);

  const client = new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     retry: (failureCount, error) => {
    //       console.log('retry error', error);
    //       return !(error.status === 401);  // Stop retries if status is 401
    //     },
    //     onError: (error) => {
    //       console.log('error', error);
    //       if (error.status === 401) {
    //         handleRedirect();
    //       }
    //     },
    //   },
    // },
  });

  ddRum();

  return (
    <>
      <QueryClientProvider client={client}>
        <AppContext.Provider
          value={{
            setShowStudentOnboarding,
            setShowTeacherOnboarding,
            showWelcomeOnboarding,
            setShowWelcomeOnboarding
          }}
        >
          <Router>
            <div className="app-container">
              <MainSidebar />
              {isTeacherOnboarding(showTeacherOnboarding, mobileView, role) && (
                <TeacherOnboarding onCloseOnboarding={closeTeacherOnboarding} />
              )}
              {isShowWelcomeOnboarding(
                showWelcomeOnboarding,
                mobileView,
                role
              ) && (
                <WelcomeOnboarding />
              )}
              {isStudentOnboarding(showStudentOnboarding) && (
                <OnboardingScreen
                  editStateYear={false}
                  onClose={closeOnboarding}
                />
              )}
              <VisibilityWrapper>
                {mobileView ? (
                  <WelcomeOverlayMobile />
                ) : (
                  <Switch>
                    <Route path="/docs">
                      <ProtectedDocRoot />
                    </Route>
                    <Route path="/main">
                      <MainPage />
                    </Route>
                    <Route path="/settings">
                      <ProtectedSettings />
                    </Route>
                    <Route path="/markingTemplates/rubrics/:markingCriteriaId">
                      <ProtectedMarkingCriteria />
                    </Route>
                    <Route path="/markingTemplates/strengths-and-targets/:markingMethodologyId">
                      <ProtectedStrengthAndTarget />
                    </Route>
                    <Route path="/getFeedback">
                      <ProtectedDocRoot />
                    </Route>
                    <Route path="/giveFeedback">
                      <ProtectedGiveFeedback />
                    </Route>
                    <Route path="/completed">
                      <ProtectedCompletedRoot />
                    </Route>
                    <Route path="/feedbackHistory">
                      <ProtectedGiveFeedback />
                    </Route>
                    <Route path="/classes/:classIdFromUrl?">
                      <ProtectedTeacherClassesRoot />
                    </Route>
                    <Route
                      exact
                      path="/tasks/:assignmentId/start"
                      render={(props) => {
                        return isTeacher ? (
                          <Redirect
                            to={`/tasks/${props.match.params.assignmentId}`}
                          />
                        ) : (
                          <ProtectedTaskDetail />
                        );
                      }}
                    />
                    <Route
                      exact
                      path="/tasks/:assignmentId"
                      render={(props) => {
                        return isTeacher ? (
                          <ProtectedCreateAssignment />
                        ) : (
                          <Redirect
                            to={`/tasks/${props.match.params.assignmentId}/start`}
                          />
                        );
                      }}
                    />
                    <Route path="/tasks">
                      <ProtectedTasks role={role} />
                    </Route>
                    <Route path="/sharedresponses">
                      <ProtectedExemplarResponsesPage />
                    </Route>
                    <Route path="/submissions/:id">
                      <ProtectedFeedbacksRoot isAssignmentPage={false} />
                    </Route>
                    <Route path="/docs">
                      <ProtectedDocumentRoot />
                    </Route>
                    <Route path="/documents/:id">
                      <ProtectedDocumentRoot />
                    </Route>
                    <Route path="/documentsReview/:id">
                      <ProtectedDocumentRoot />
                    </Route>
                    <Route path="/commentbanks">
                      <ProtectedCommentbanks />
                    </Route>
                    <Route path="/jeddai">
                      <ProtectedJeddAI />
                    </Route>
                    <Route path="/404">
                      <PageNotFound />
                    </Route>
                    <Route exact path="/">
                      <ProtectedDashboard role={role} />
                    </Route>
                    <Redirect to="/404" />
                  </Switch>
                )}
              </VisibilityWrapper>
            </div>
            <ToastContainer
              position="bottom-left"
              autoClose={6000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover
              theme="dark"
            />
          </Router>
        </AppContext.Provider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}
export default App;
