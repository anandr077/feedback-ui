import { datadogRum } from '@datadog/browser-rum';
const env =
  process.env.REACT_APP_ENV ?? 'dev';
export const ddRum = () => {

    datadogRum.init({
        applicationId: 'c060e39a-fe15-41c6-b580-158c4d290665',
        clientToken: 'pub5367c2844dea48390397f6cf72864575',
        site: 'us5.datadoghq.com',
        service: 'gojeddle',
        env: env,
        sessionSampleRate: 100,
        sessionReplaySampleRate: 20,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'mask-user-input',
    });
  }