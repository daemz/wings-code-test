import {ITokenData, IUser} from '@appTypes/user.type';
import {TOKEN_DATA, USER_DATA} from '@constants/recoils.const';
import {atom} from 'recoil';

export const tokenDataAtom = atom<ITokenData>({
  key: TOKEN_DATA,
  default: null,
});

export const userDataAtom = atom<IUser>({
  key: USER_DATA,
  default: undefined,
});
