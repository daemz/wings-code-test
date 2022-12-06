/* 
This initiator populates anything related to app, including listeners too.

Such as app version, app state, etc.
*/

import {EAppStateStatus} from '@appTypes/appState.type';
import * as React from 'react';
import {useSetRecoilState} from 'recoil';
import {userDataAtom} from '@recoils/User/atoms';
import {useFetchUser} from '@services/User';

export interface IUserInitiator {
  children?: JSX.Element;
}

const UserInitiator = ({children}: IUserInitiator) => {
  const setUserData = useSetRecoilState(userDataAtom);

  const {data, isLoading} = useFetchUser({enabled: true});

  React.useEffect(() => {
    if (!isLoading) {
      setUserData(data[0]);
    }
    // add some listeners here, such as network info listeners or something like that
  }, [data, isLoading, setUserData]);

  return children;
};

export default UserInitiator;
