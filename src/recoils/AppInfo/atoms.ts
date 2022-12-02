import { EAppStateStatus } from '@appTypes/appState.type';
import {APP_BUILD_NUMBER_ATOM, APP_STATE, APP_VERSION} from '@constants/recoils.const';
import {atom} from 'recoil';

export const appVersionAtom = atom<string>({
  key: APP_VERSION,
  default: '',
});

export const appBuildNumberAtom = atom<number>({
  key: APP_BUILD_NUMBER_ATOM,
  default: 0,
});

export const appStateAtom = atom<EAppStateStatus>({
  key: APP_STATE,
  default: EAppStateStatus.ACTIVE,
})
