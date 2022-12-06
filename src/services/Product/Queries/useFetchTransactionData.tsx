import {ITransactionDetail} from '@appTypes/product.type';
import {PRODUCT_LIST} from '@constants/reactQuery.const';
import {APIClient} from '@utils/api';
import {useQuery} from 'react-query';

interface IOptions {
  enabled: boolean;
}

export const fetchTransactionData = async (): Promise<
  Array<ITransactionDetail>
> => {
  try {
    // const response: IApiProductListResponse = await APIClient.get('products');

    return await APIClient.get('transaction-detail');
  } catch (err: any) {
    console.error(
      'services/User/Queries/useFetchTransactionList',
      'fetchTransactionData',
      err.data || err.response?.data || err.response || err,
    );

    throw err;
  }
};

const useFetchTransactionList = (options: IOptions = {enabled: true}) => {
  return useQuery<Array<ITransactionDetail>, Error>(
    PRODUCT_LIST,
    async () => {
      const response = await fetchTransactionData();
      if (!response) {
        throw new Error('fetchTransactionData failed');
      }

      return response;
    },
    {...options},
  );
};

export default useFetchTransactionList;
