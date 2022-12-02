/* 
This initiator populates anything related to app, including listeners too.

Such as app version, app state, etc.
*/

import {EAppStateStatus} from '@appTypes/appState.type';
import * as React from 'react';
import {AppState} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {appBuildNumberAtom, appStateAtom, appVersionAtom} from '@recoils/AppInfo';
import {getVersion, getBuildNumber} from 'react-native-device-info';

export interface IAppInfoInitiator {
  children?: JSX.Element;
}

const AppInfoInitiator = ({children}: IAppInfoInitiator) => {

  const setAppVersion = useSetRecoilState(appVersionAtom);
  const setAppBuildNumber = useSetRecoilState(appBuildNumberAtom);
  const setAppState = useSetRecoilState(appStateAtom);

  const checkAppVersion = async (): Promise<void> => {
    const [appVersion, appBuildNumber] = [getVersion(), getBuildNumber()];

    if (appVersion) {
      setAppVersion(appVersion);
    }

    if (appBuildNumber) {
      const buildNumber = parseInt(appBuildNumber);
      setAppBuildNumber(buildNumber);
    }
  };

  React.useEffect(() => {
    checkAppVersion();
  }, [])

  React.useEffect(() => {
    // add some listeners here, such as network info listeners or something like that
    const subscription = AppState.addEventListener('change', nexAppState => {
      setAppState(nexAppState as EAppStateStatus);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return children;
};

export default AppInfoInitiator;
