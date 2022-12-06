import {IProduct} from '@appTypes/product.type';
import {CART} from '@constants/recoils.const';
import {atom} from 'recoil';

export const cartAtom = atom<IProduct[]>({
  key: CART,
  default: [],
});
