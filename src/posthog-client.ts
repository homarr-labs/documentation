import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import posthog from 'posthog-js';

export const isPostHogEnabled =
  ExecutionEnvironment.canUseDOM && process.env.NODE_ENV !== 'development';

if (isPostHogEnabled) {
  posthog.init('phc_pWxeD1hbl4ip02JYReX1Crjkt5DhB3dduigirHMCtFE', {
    api_host: 'https://hog.ajnart.dev',
    ui_host: 'https://eu.posthog.com',
    defaults: '2026-01-30',
    person_profiles: 'identified_only',
    autocapture: false,
    disable_session_recording: true,
    advanced_disable_feature_flags: true,
  });
}

export default {};
