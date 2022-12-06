import {IProduct} from '@appTypes/product.type';
import {PRODUCT_LIST} from '@constants/recoils.const';
import {atom} from 'recoil';

export const productsAtom = atom<IProduct[]>({
  key: PRODUCT_LIST,
  default: [],
});
