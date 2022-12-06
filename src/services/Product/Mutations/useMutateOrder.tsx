import {IProduct} from '@appTypes/product.type';
import {PRODUCT_LIST} from '@constants/reactQuery.const';
import {APIClient} from '@utils/api';
import {useMutation, useQueryClient} from 'react-query';

export const transact = async (cart: IProduct): Promise<any> => {
  try {
    const source = 'transaction-detail';

    return await APIClient.post<any>(source, undefined, cart);
  } catch (error: any) {
    console.error(
      'services/Product/Mutations/useTransaction',
      'transact',
      error.data || error.response?.data || error.response || error,
    );

    throw error;
  }
};

const useTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation(transact, {
    // onMutate: async (
    //   productData: IProduct,
    // ): Promise<{prevData: Array<IProduct>}> => {
    //   // cancel the outgoing queries
    //   await queryClient.cancelQueries(PRODUCT_LIST);

    //   // get the existing cached query's data
    //   const prevData = queryClient.getQueryData<Array<IProduct>>(PRODUCT_LIST);

    //   if (prevData) {
    //     // create a new copy of the query's cached data
    //     const newData = [...prevData];

    //     newData.push(productData);

    //     // find the current product data that needs to be added among the
    //     // cached query data
    //     // const index = newData.findIndex(product => {
    //     //   return product?.id === productData?.id;
    //     // });

    //     // grab that product data
    //     // newData.splice(index, 1);

    //     // update query's cached data
    //     // by inserting the new product data into the query's cached data
    //     queryClient.setQueryData<Array<IProduct>>(PRODUCT_LIST, [...newData]);
    //   }

    //   return {prevData};
    // },
    onError: _error => {
      console.error(_error);
    },
    // onError: (_error, _variables, context) => {
    //   if (context?.prevData) {
    //     queryClient.setQueryData<Array<IProduct>>(
    //       PRODUCT_LIST,
    //       context?.prevData,
    //     );
    //   }
    //   console.error(_error);
    // },
    onSuccess: () => {
      // Finally, invalidate the query to update the inserted data to
      // the cached query datas
      queryClient.invalidateQueries(PRODUCT_LIST);
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries(PRODUCT_LIST);
    // },
  });
};

export default useTransaction;
