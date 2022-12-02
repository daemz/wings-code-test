import {ITokenData} from '@appTypes/user.type';
import { tokenDataAtom } from '@recoils/User/atoms';
import { useRecoilValue } from 'recoil';

const useUser = () => {
  const tokenData = useRecoilValue(tokenDataAtom);

  const getTokenData = (): ITokenData => {
    return tokenData;
  };

  return {
    getTokenData,
  };
};

export default useUser;
